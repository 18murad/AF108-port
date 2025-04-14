let usernameInput = document.getElementById("username");
let passwordInput = document.getElementById("password");
let form = document.querySelector("form");

let users = JSON.parse(localStorage.getItem("users") || "[]");

let blockedUsers = JSON.parse(localStorage.getItem("blockedUsers") || "{}");

let loginAttempts = JSON.parse(localStorage.getItem("loginAttempts") || "{}");

function isValidEmail(email) {
  return email.includes("@") && email.includes(".") && !email.includes(" ");
}

function isValidUsername(username) {
  let allowed = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_-";
  return (
    username.length >= 3 &&
    username.length <= 20 &&
    [...username].every(c => allowed.includes(c))
  );
}

function isStrongPassword(password) {
  if (password.length < 8) return false;
  let specials = "@#$%&";
  let upper = password.toLowerCase() !== password;
  let lower = password.toUpperCase() !== password;
  let digit = [...password].some(c => !isNaN(parseInt(c)));
  let special = [...password].some(c => specials.includes(c));
  return upper && lower && digit && special;
}

function showToast(message, color = "linear-gradient(to right, #ff5f6d, #ffc371)") {
  Toastify({
    text: message,
    duration: 3000,
    close: true,
    gravity: "top",
    position: "right",
    style: {
      background: color,
    },
  }).showToast();
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let usernameOrEmail = usernameInput.value.trim();
  let password = passwordInput.value;

  let isEmail = usernameOrEmail.includes("@");
  if (
    (isEmail && !isValidEmail(usernameOrEmail)) ||
    (!isEmail && !isValidUsername(usernameOrEmail))
  ) {
    showToast("Username ve ya sifre yanlisdi");
    return;
  }

  if (!isStrongPassword(password)) {
    showToast("Zeif sifre");
    return;
  }

  let user = users.find(
    (u) => (u.username === usernameOrEmail || u.email === usernameOrEmail) && u.password === password
  );

  if (user) {
    showToast("Gris ugurlu oldu", "linear-gradient(to right, #00b09b, #96c93d)");

    delete loginAttempts[usernameOrEmail];
    localStorage.setItem("loginAttempts", JSON.stringify(loginAttempts));
    delete blockedUsers[usernameOrEmail];
    localStorage.setItem("blockedUsers", JSON.stringify(blockedUsers));

    sessionStorage.setItem("currentUser", JSON.stringify(user));

    window.location.href = "account.html";
  } 
});
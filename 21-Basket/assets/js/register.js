let usernameInput = document.getElementById("username");
let emailInput = document.getElementById("email");
let passwordInput = document.getElementById("password");
let confirmPasswordInput = document.getElementById("confirmpassword");
let form = document.querySelector("form");

let users = JSON.parse(localStorage.getItem("users") || "[]");


let isValidUsername = (username) => {
  if (username.length < 3 || username.length > 20) return false;

  for (let i = 0; i < username.length; i++) {
    let char = username[i];
    let isLetterOrNumber =
      (char >= "a" && char <= "z") ||
      (char >= "A" && char <= "Z") ||
      (char >= "0" && char <= "9");
    let isValidSymbol = char === "_" || char === "-";
    if (!isLetterOrNumber && !isValidSymbol) {
      return false;
    }
  }
  return true;
};

let isValidEmail = (email) => {
  if (!email.includes("@") || !email.includes(".")) return false;
  let parts = email.split("@");
  if (parts.length !== 2 || parts[0].length === 0 || parts[1].length === 0) return false;
  if (!parts[1].includes(".")) return false;
  return true;
};

let isStrongPassword = (password) => {
  if (password.length < 8) return false;

  let upper = false;
  let lower = false;
  let number = false;
  let special = false;
  let specialChars = "@#$%&";

  for (let i = 0; i < password.length; i++) {
    let char = password[i];
    if (char >= "A" && char <= "Z") upper = true;
    else if (char >= "a" && char <= "z") lower = true;
    else if (char >= "0" && char <= "9") number = true;
    else if (specialChars.includes(char)) special = true;
  }

  return upper && lower && number && special;
};

let isUserExists = (username, email) => {
  return users.some(
    (user) => user.username === username || user.email === email
  );
};

let showToast = (message, color = "linear-gradient(to right, #ff5f6d, #ffc371)") => {
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
};


form.addEventListener("submit", function (e) {
  e.preventDefault();

  let username = usernameInput.value.trim();
  let email = emailInput.value.trim();
  let password = passwordInput.value;
  let confirmPassword = confirmPasswordInput.value;

  if (!isValidUsername(username)) {
    showToast("Username - Minimum 3, maksimum 20 simvol; yalniz elifba, reqem, alt xett və tire istifade oluna biler.");
    return;
  }

  if (!isValidEmail(email)) {
    showToast(" Email - Duzgun e-poçt formatinda olmalidir");
    return;
  }

  if (isUserExists(username, email)) {
    showToast("Username və ya email movcuddur");
    return;
  }

  if (!isStrongPassword(password)) {
    showToast("Sifre zeifdi");
    return;
  }

  if (password !== confirmPassword) {
    showToast("Qeydiyyat zamani daxil edilen sifre ile uygun olmalidi");
    return;
  }

  let newUser = {
    id: uuidv4(),
    username,
    email,
    password,
  };

  users.push(newUser);
  localStorage.setItem("users", JSON.stringify(users));

  showToast("Qeydiyyat ugurlu oldu", "linear-gradient(to right, #00b09b, #96c93d)");

  form.reset();
  addStatusIcon(passwordInput, "invalid");
});
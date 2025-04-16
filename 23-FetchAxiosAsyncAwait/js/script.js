document.addEventListener("DOMContentLoaded", async () => {


    async function fetchProducts() {
        const response = await fetch("http://localhost:3000/products");
        if (!response.ok) {
            return [];  
        }
        return await response.json(); 
    }
  
    async function getUsersFromStorage() {
        let users = JSON.parse(localStorage.getItem("users")) || [];
        return users;
    }
  
    async function setUsersToStorage(users) {
        localStorage.setItem("users", JSON.stringify(users));
    }
  
    let loginBtn = document.querySelector(".login");
    let registerBtn = document.querySelector(".register");
    let logoutBtn = document.querySelector(".logout");
  
    function updateUserStatus(users) {
        let isLogined = users.find((user) => user.isLogined === true);
        let usernameBtn = document.querySelector(".username");
  
        if (isLogined) {
            usernameBtn.textContent = isLogined.username;
            loginBtn.classList.add("d-none");
            registerBtn.classList.add("d-none");
            logoutBtn.classList.remove("d-none");
        } else {
            logoutBtn.classList.add("d-none");
            loginBtn.classList.remove("d-none");
            registerBtn.classList.remove("d-none");
            usernameBtn.textContent = "Username";
        }
    }
  
    async function logout() {
        let users = await getUsersFromStorage();
        let currentUser = users.find((user) => user.isLogined === true);
  
        if (currentUser) {
            currentUser.isLogined = false;
            let userIndex = users.findIndex((user) => user.id === currentUser.id);
            users[userIndex] = currentUser;
  
            await setUsersToStorage(users);
            updateUserStatus(users);
  
            let heartIcons = document.querySelectorAll(".card-heart");
            heartIcons.forEach((icon) => {
                icon.classList.add("far");
                icon.classList.remove("fas");
            });
  
            toast("You have successfully logged out.");
        }
    }
  
    logoutBtn.addEventListener("click", logout);
  
   
    async function createUserCard(products) {
        let users = await getUsersFromStorage();
        let isLogined = users.find((user) => user.isLogined === true);
        let currentUser = isLogined ? isLogined : null;
  
        products.forEach((product) => {
            let card = document.createElement("div");
            card.classList.add("card");
  
            card.addEventListener("click", () => {
                window.location.href = `product_detail.html?id=${product.id}`;
            });
  
            let image = document.createElement("div");
            image.classList.add("card-image");
  
            let img = document.createElement("img");
  
            let cardContent = document.createElement("div");
            cardContent.classList.add("card-content");
  
            let cardTitle = document.createElement("h2");
            cardTitle.classList.add("card-title");
  
            let category = document.createElement("h2");
            category.classList.add("card-category");
  
            let cardFooter = document.createElement("div");
            cardFooter.classList.add("card-footer");
  
            let price = document.createElement("span");
            price.classList.add("card-price");
  
            let rating = document.createElement("div");
            rating.classList.add("card-rating");
  
            let ratingStar = document.createElement("span");
            let count = document.createElement("span");
  
            let heart = document.createElement("i");
            heart.classList.add("far", "fa-heart", "card-heart");
  
            if (currentUser && currentUser.wishlist.some((item) => item.id === product.id)) {
                heart.classList.remove("far");
                heart.classList.add("fas");
            }
  
            heart.addEventListener("click", (e) => {
                e.stopPropagation();
                toggleAddWishList(product.id, heart);
            });
  
            let addToCart = document.createElement("button");
            addToCart.classList.add("btn", "btn-primary", "add-to-cart");
            addToCart.textContent = "Add Basket";
  
            addToCart.addEventListener("click", (e) => {
                e.stopPropagation();
                addBasket(product.id);
            });
  
            rating.append(ratingStar, count);
            cardFooter.append(price, rating);
            cardContent.append(cardTitle, category, cardFooter);
            image.append(img);
            card.append(heart, image, cardContent, addToCart);
  
            let cards = document.querySelector(".cards");
            cards.append(card);
  
            img.src = product.image;
            cardTitle.textContent = product.title.slice(0, 20) + " ...";
            category.textContent = product.category;
            price.textContent = `$${product.price}`;
            ratingStar.textContent = product.rating.rate;
            count.textContent = `${product.rating.count}`;
        });
    }
  
  
    async function toggleAddWishList(productId, heartElement) {
        let users = await getUsersFromStorage();
        let isLogined = users.find((user) => user.isLogined === true);
        let currentUser = isLogined ? isLogined : null;
  
        if (!currentUser) {
            toast("Please login to add wishlist");
            setTimeout(() => {
                window.location.href = "login.html";
            }, 1000);
            return;
        }
  
        let userIndex = users.findIndex((user) => user.id === currentUser.id);
  
        if (currentUser.wishlist.some((item) => item.id === productId)) {
            let productIndex = currentUser.wishList.findIndex((product) => product.id === productId);
            currentUser.wishList.splice(productIndex, 1);
            heartElement.classList.add("far");
            heartElement.classList.remove("fas");
            toast("Product deleted from wishlist");
        } else {
            let product = products.find((product) => product.id === productId);
            currentUser.wishlist.push(product);
            heartElement.classList.remove("far");
            heartElement.classList.add("fas");
            toast("Product added to wishlist");
        }
  
        users[userIndex] = currentUser;
        await setUsersToStorage(users);
    }
  
    async function addBasket(productId) {
        let users = await getUsersFromStorage();
        let isLogined = users.find((user) => user.isLogined === true);
        let currentUser = isLogined ? isLogined : null;
  
        if (!currentUser) {
            toast("Please login to add basket");
            setTimeout(() => {
                window.location.href = "login.html";
            }, 1000);
        }
  
        let userIndex = users.findIndex((user) => user.id === currentUser.id);
  
        if (userIndex === -1) {
            toast("User not found");
            return;
        }
  
        let basket = currentUser.basket || [];
  
        let exsistProduct = basket.find((product) => product.id === productId);
  
        if (exsistProduct) {
            exsistProduct.count++;
        } else {
            let product = products.find((product) => product.id === productId);
            if (product) {
                basket.push({ ...product, count: 1 });
            }
        }
        currentUser.basket = basket;
        users[userIndex] = currentUser;
        await setUsersToStorage(users);
        updateBasketCount();
    }
  
    async function updateBasketCount() {
        let users = await getUsersFromStorage();
        let currentUser = users.find((user) => user.isLogined === true);
        let basketElement = document.querySelector(".basketIcon sup");
        let basketCount = currentUser?.basket.reduce(
            (acc, product) => acc + product.count,
            0
        );
  
        basketElement.textContent = basketCount;
    }
  
    function toast(text) {
        Toastify({
            text: `${text}`,
            duration: 700,
            gravity: "top",
            position: "right",
            style: {
                background: "linear-gradient(to right, #00b09b, #96c93d)",
            },
        }).showToast();
    }
  
    let products = await fetchProducts();
    let users = await getUsersFromStorage();
    updateUserStatus(users);
    createUserCard(products);
  });
  
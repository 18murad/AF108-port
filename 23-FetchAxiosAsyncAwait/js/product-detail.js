document.addEventListener("DOMContentLoaded", () => {
    async function fetchProducts() {
      const response = await fetch("http://localhost:3000/products");
      if (!response.ok) {
        return Promise.reject("serverden melumat alinmadi");
      }
      const data = await response.json();
      return data.products;
    }
  
    fetchProducts()
      .then((products) => {
        let users = JSON.parse(localStorage.getItem("users")) || [];
        let currentUser = users.find((user) => user.isLogined === true);
        let basket = currentUser?.basket || [];
  
        let URL = new URLSearchParams(location.search);
        let productId = URL.get("id");
  
        let findProduct = products.find(
          (product) => product.id === parseInt(productId)
        );
  
        let productContainer = document.querySelector(".product-container");
  
        if (findProduct) {
          productContainer.innerHTML = `
            <div class="product-image">
              <img class="img" src="${findProduct.image}" alt="${
            findProduct.title
          }" />
            </div>
            <div class="product-details">
              <h1 class="product-title">${findProduct.title}</h1>
              <p class="product-category">Kateqoriya: ${findProduct.category}</p>
              <p class="product-price">$${findProduct.price.toFixed(2)}</p>
              <p class="product-description">${findProduct.description}</p>
              <div class="quantity-selector">
                <button class="btn-minus">-</button>
                <input type="number" value="1" min="1" />
                <button class="btn-plus">+</button>
              </div>
              <button class="btn btn-danger add-to-cart-btn">Səbətə əlavə et</button>
            </div>`;
  
          setupProductInteraction(findProduct, basket, users, currentUser);
        } else {
          alert("mehsul tapilmadi");
        }
      })
      .catch((error) => {
        console.error("melumatlari yuklemek olmadi:", error);
      });
  });
  
  
  function setupProductInteraction(findProduct, basket, users, currentUser) {
    const btnMinus = document.querySelector(".btn-minus");
    const btnPlus = document.querySelector(".btn-plus");
    const quantityInput = document.querySelector(".quantity-selector input");
    const addToCartBtn = document.querySelector(".add-to-cart-btn");
  
    btnMinus.addEventListener("click", () => {
      let currentValue = parseInt(quantityInput.value);
      if (currentValue > 1) {
        quantityInput.value = currentValue - 1;
      }
    });
  
    btnPlus.addEventListener("click", () => {
      let currentValue = parseInt(quantityInput.value);
      quantityInput.value = currentValue + 1;
    });
  
    addToCartBtn.addEventListener("click", () => {
      let quantity = parseInt(quantityInput.value);
      let totalPrice = quantity * findProduct.price;
  
      let existingProduct = basket.find((item) => item.id === findProduct.id);
      if (existingProduct) {
        existingProduct.count += quantity;
        existingProduct.totalPrice += totalPrice;
      } else {
        basket.push({
          id: findProduct.id,
          title: findProduct.title,
          image: findProduct.image,
          price: findProduct.price,
          count: quantity,
          totalPrice: totalPrice,
          category: findProduct.category,
        });
      }
  
      currentUser.basket = basket;
      let userIndex = users.findIndex((user) => user.id === currentUser.id);
      if (userIndex !== -1) {
        users[userIndex] = currentUser;
      }
      localStorage.setItem("users", JSON.stringify(users));
  
      window.location.href = "basket.html";
    });
  }
  
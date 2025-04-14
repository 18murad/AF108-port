function toggleWishlist(productId) {
    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    if (wishlist.includes(productId)) {
      wishlist = wishlist.filter(id => id !== productId);
    } else {
      wishlist.push(productId);
    }
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }
  
  function markWishlistItems() {
    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    wishlist.forEach(id => {
      const heartIcon = document.querySelector(`[data-id ="${id}"]`);
      if (heartIcon) {
        heartIcon.classList.add("active");
      }
    });
  }
  
  window.onload = markWishlistItems;


  function checkAuthBeforeWishlist() {
    const isLoggedIn = localStorage.getItem("userLoggedIn");
    if (!isLoggedIn) {
      showToast("Evvelce daxil olun");
    } 
  }
  
  function showToast(message) {
    const toast = document.createElement("div");
    toast.className = "toast";
    toast.innerText = message;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);
  }

  function logout() {
    localStorage.removeItem("userLoggedIn");
    localStorage.removeItem("wishlist"); 
    showToast("Cixis ugurlu oldu");
    setTimeout(() => {
      window.location.href = "/login.html";
     }, 2000);
  }
    document.addEventListener("DOMContentLoaded", function () {
    let basket = document.querySelector(".basket");
    let totalPriceEl = document.querySelector(".total-price");

    let bottom = document.querySelector(".bottom");
    let clearBtn = document.createElement("button");
    clearBtn.textContent = "Clear All";
    clearBtn.className = "btn btn-warning";
    bottom.appendChild(clearBtn);

    function updateTotalPrice() {
      let items = document.querySelectorAll(".basket-item");
      let total = 0;
      items.forEach((item) => {
        let priceText = item.querySelector(".price").textContent.replace("$", "");
        let countText = item.querySelector(".count").textContent;
        let price = Number(priceText);
        let count = Number(countText);
        total += price * count;
      });
      totalPriceEl.textContent = `$${total.toFixed(2)}`;
    }

    basket.addEventListener("click", function (e) {
      let target = e.target;
      let item = target.closest(".basket-item");

      if (target.classList.contains("plus-btn")) {
        let countEl = item.querySelector(".count");
        let count = Number(countEl.textContent);
        count++;
        countEl.textContent = count;
        item.querySelector(".minus-btn").disabled = count <= 0;
        updateTotalPrice();
      }

      if (target.classList.contains("minus-btn")) {
        let countEl = item.querySelector(".count");
        let count = Number(countEl.textContent);
        if (count > 0) {
          count--;
          countEl.textContent = count;
          item.querySelector(".minus-btn").disabled = count <= 0;
          updateTotalPrice();
        }
      }
    });

    clearBtn.addEventListener("click", function () {
      basket.innerHTML = "";
      totalPriceEl.textContent = "$0.00";
      localStorage.removeItem("basketItems"); 
    });

    updateTotalPrice();
  });

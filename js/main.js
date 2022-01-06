const storeItems = [
    {
      id: 1,
      image: "img/bose.jpg",
      name: "Bose",
      price: 5,
    },
    {
      id: 1,
      image: "img/bose.png",
      name: "Bose",
      price: 5,
    },
    {
      id: 1,
      image: "img/iphone.jpg",
      name: "iphone",
      price: 5,
    },
    {
      id: 1,
      image: "img/macbook.jpg",
      name: "Macbook",
      price: 5,
    },
    {
      id: 1,
      image: "img/iphone.jpg",
      name: "Iphone",
      price: 10,
    },
    {
      id: 1,
      image: "img/bose.jpg",
      name: "Bose",
      price: 10,
    },
    {
      id: 1,
      image: "img/bose.jpg",
      name: "Bose",
      price: 10,
    },
    {
      id: 1,
      image: "img/macbook.jpg",
      name: "Macbook",
      price: 10,
    },
    {
      id: 1,
      image: "img/iphone.jpg",
      name: "Iphone",
      price: 15.5,
    },
    {
      id: 1,
      image: "img/bose.jpg",
      name: "Bose",
      price: 15,
    },
    {
      id: 1,
      image: "img/iphone.jpg",
      name: "Iphone",
      price: 15,
    },
    {
      id: 1,
      image: "img/bose.jpg",
      name: "Bose",
      price: 15,
    },
    {
      id: 1,
      image: "img/bose.jpg",
      name: "Bose",
      price: 55,
    },
    {
      id: 1,
      image: "img/bose.jpg",
      name: "Bose",
      price: 75,
    },
    {
      id: 1,
      image: "img/bose.jpg",
      name: "Bose",
      price: 95,
    },
  ];
  let checkoutCart = [];
  let cartTotal = 0;
  
  //render store items
  const renderItems = async () => {
    const itemsContainer = document.getElementById("store-items");
    for (let i = 0; i < storeItems.length - 1; i++) {
      let item = storeItems[i];
      item.id = i;
      const newItem = document.createElement("div");
      newItem.classList.add(
        "col-10",
        "col-sm-6",
        "col-lg-4",
        "mx-auto",
        "my-3",
        "store-item",
        "sweets",
      );
      newItem.innerHTML = `
      <div class="card "id=${i}>
      <div class="img-container">
        <img src="${item.image}" class="card-img-top store-img" alt="">
        <span class="store-item-icon">
          <i class="fas fa-shopping-cart"></i>
        </span>
      </div>
      <div class="card-body">
        <div class="card-text d-flex justify-content-between text-capitalize">
          <h5 id="store-item-name">${item.name}</h5>
          <h5 class="store-item-value">$ <strong id="store-item-price" class="font-weight-bold">${item.price}</strong></h5>
  
        </div>
      </div>
  
  
    </div>
            `;
      itemsContainer.appendChild(newItem);
    }
  };
  renderItems();
  
  //show cart
  
  const showCart = () => {
    const cartInfo = document.getElementById("cart-info");
    const cart = document.getElementById("cart");
  
    cartInfo.addEventListener("click", function () {
      cart.classList.toggle("show-cart");
    });
  };
  showCart();
  
  //add items to cart
  
  const addEventListenerToIcon = () => {
    document.addEventListener("click", function (event) {
      if (event.target.parentElement.classList.contains("store-item-icon")) {
        let fullPath = event.target.parentElement.previousElementSibling.src;
        let pos = fullPath.indexOf("img") + 3;
        let partPath = fullPath.slice(pos);
        const id = event.target.parentElement.parentElement.parentElement.id;
        const item = storeItems[id];
        // item.img = storeItems[id].image;
        // let name = storeItems[id].name;
        // item.name = name;
        // let price = storeItems[id].price;
  
        // let finalPrice = price;
  
        // item.price = finalPrice;
  
        const cartItem = document.createElement("div");
        cartItem.classList.add(
          "cart-item",
          "d-flex",
          "justify-content-between",
          "text-capitalize",
          "my-3",
        );
  
        cartItem.innerHTML = `
            <img src="${item.image}" class="img-fluid rounded-circle" 
            id="item-img" alt="">
            <div class="item-text">
  
              <p id="cart-item-title" class="font-weight-bold mb-0">${item.price}</p>
              <span>$</span>
              <span id="cart-item-price" class="cart-item-price" 
              class="mb-0">${item.price}</span>
            </div>
            <a href="#" id='cart-item-remove' class="cart-item-remove">
              <i class="fas fa-trash"></i>
            </a>
          </div>
          `;
      
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Product added to cart',
            showConfirmButton: false,
            timer: 1900
          })
        addToCart({ htmlItem: cartItem, item: item });
        showTotals();
      } else if (event.target.id == "clear-cart") {
        clearCart();
      }
    });
    const addToCart = (item) => {
      checkoutCart.push(item);
      const cart = document.getElementById("cart-list-items");
      cart.innerHTML = "";
      for (item of checkoutCart) {
        cart.appendChild(item.htmlItem);
      }
    };
    const cartBtn = document.querySelectorAll(".store-item-icon");
  
    //show totals
    function showTotals() {
      let totalMoney = 0;
      for (let item of checkoutCart) {
        totalMoney += item.item.price;
      }
      const finalMoney = totalMoney;
      cartTotal = finalMoney;
  
      document.getElementById("cart-total").textContent = cartTotal;
      document.querySelector(".item-total").textContent = cartTotal;
      document.getElementById("item-count").textContent = checkoutCart.length;
    }
  };
  addEventListenerToIcon();
  
  //clear cart
  const clearCart = () => {
    checkoutCart = [];
    cartTotal = 0;
    const cart = document.getElementById("cart-list-items");
    cart.innerHTML = "";
    document.getElementById("cart-total").textContent = cartTotal;
    document.querySelector(".item-total").textContent = cartTotal;
    document.getElementById("item-count").textContent = checkoutCart.length;
  };
// Retrieve cart items from localStorage
const savedCartItems = localStorage.getItem("cartItems");
const cartItems = JSON.parse(savedCartItems);
const cartItemsContainer = document.querySelector(".cart-items");

function renderCartItems() {
  cartItemsContainer.innerHTML = ""; // Clear previous content

  // Check if there are items in the cart
  if (cartItems && cartItems.length > 0) {
    cartItems.forEach((item) => {
      cartItemsContainer.innerHTML += `
        <div class="cart-item">
          <div class="item-info">
            <img src="${item.imgSrc}" alt="${item.name}" class="cart-img">
            <h4 class="cart-desc">${item.name}</h4>
          </div>
          <div class="unit-price">
            <small>LKR </small>${item.price}
          </div>
          <div class="units">
            <div class="number">${item.qty}</div>
          </div>
        </div>
      `;
    });
  } else {
    cartItemsContainer.innerHTML = "<p>Your cart is empty</p>";
  }
}


renderCartItems();


function renderTotal(){
  let totalPrice=0
  let totalItem=0
  cartItems.forEach((item)=>{
    totalPrice+=item.price*item.qty;
    totalItem+=item.qty
    
  });
  const priceElement = document.querySelector(".price");
  priceElement.textContent = `LKR ${totalPrice}`;
  console.log(totalPrice);
  
  
  }

  renderTotal();


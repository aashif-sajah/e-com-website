// All products available is added to the cart
const products = [
  {
    id: 0,
    name: "ADDIDAS WATER BOTTLE",
    price: 2500,
    imgSrc: "images/1.png",
    qty:1,
  },
  {
    id: 1,
    name: "WATER CLEAN UP KIT",
    price:10000 ,
    imgSrc: "images/2.png",
    qty:1,
  },
  {
    id: 2,
    name: "DIVING GEAR",
    price: 75000,
    imgSrc: "images/3.png",
    qty:1,
  },
  {
    id: 3,
    name: "UNDER WATER METAL DETECTOR",
    price: 32000,
    imgSrc: "images/4.png",
    qty:1,
  },
  {
    id: 4,
    name: "UNDER WATER TOURCH",
    price: 4500,
    imgSrc: "images/5.png",
    qty:1,
  },
  {
    id: 5,
    name: "UNDER WATER DRONE",
    price: 20000,
    imgSrc: "images/6.png",
    qty:1,
  },
  {
    id: 6,
    name: "QUALITY WATER BAGS",
    price: 500,
    imgSrc: "images/7.png",
    qty:1,
  },
  {
    id: 7,
    name: "HOME MADE SEA NECKLACE",
    price: 2000,
    imgSrc: "images/8.png",
    qty:1,
  }
];

const cartItem=document.querySelector(".cart-items")
const productsEl = document.querySelector(".shop");

const total = document.querySelector(".subtotal");
const items=document.querySelector(".cart-amount");
let totalDisplay=document.getElementById("total-amount")

renderProdcuts();



  function renderProdcuts() {
    products.forEach((product) => {
      productsEl.innerHTML += `
           
           <div class="item" id="item3">
                          <img src=${product.imgSrc}  width="245px" height="230px">
                          <div class="details">
                              <h3>${product.name}</h3>

                              <div class="price-qty">
                                  <h3>LKR ${product.price}</h3>
                              </div>

                              <div class="add-to-cart">
                                  <button class="cart" onclick="cart_addition(${product.id})">Add to cart</button>
                              </div>
                          </div>

                      </div> 
          `;
    });
  }


let cart_array=[]

function cart_addition(id) {
// check if prodcut already exist in cart
if (cart_array.some((item) => item.id === id)) {
  changeUnits("increament",id)
} else {
  const item = products.find((product) => product.id === id);

  cart_array.push({
    ...item,
    qty: 1,
  });
 
}
if(cart_array.length>0){
  document.getElementById("checkout").disabled=false;
}

updateCart();
}
function updateCart(){

renderItems();
renderTotal();
}

function renderItems(){
  cartItem.innerHTML="";  //to clear the cart item
  cart_array.forEach((item)=>{
      cartItem.innerHTML+=`
      <div class="cart-item">
              
              <div class="item-info">
                      <img src="${item.imgSrc}" alt="${item.name}" class="cart-img">
                      <h4 class="cart-desc">${item.name}</h4>
                  </div>
    
                    <div class="unit-price">
                      <small>LKR </small>${item.price}
                    </div>
                    <div class="units">
                    <i class="fa-solid fa-minus" onclick="changeUnits('decreament',${item.id})"></i>
                      <div class="number">${item.qty}</div>
                      <i class="fa-solid fa-plus" onclick="changeUnits('increament',${item.id})"></i>
                      <i class="fa-solid fa-trash" onclick="removeItem(${item.id})"></i>
                    </div>
                  
                </div>
      `;
  });
}



function changeUnits(action, id) {
cart_array = cart_array.map((item) => {
  let qty = item.qty;
  if (item.id === id) {
    if (action === 'decreament' && qty >1) {
     
      qty--;
    } else if (action === 'increament' && qty <15) {
      qty++;
      
    }
  }
  return {
    ...item,
    qty,
  };
});
updateCart();
}

function renderTotal(){
let totalPrice=0
let totalItem=0
cart_array.forEach((item)=>{
  totalPrice+=item.price*item.qty;
  totalItem+=item.qty
  

});
total.innerHTML=`<div class="totalPrice">TOTAL : LKR ${totalPrice} </div>`
items.innerHTML=`${totalItem}`



localStorage.setItem("subtotal", totalPrice);
const subtotal = localStorage.getItem("subtotal");



}

totalDisplay.textContent = 12;
const textt = document.querySelector('.space-value').textContent = '22323'

function removeItem(id){
cart_array=cart_array.filter((item)=> item.id!==id)
if(cart_array.length===0){
  document.getElementById("checkout").disabled=true;
}

updateCart()

}




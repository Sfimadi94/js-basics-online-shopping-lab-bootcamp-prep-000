var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 var price = Math.floor(Math.random() * 100)
 var newItem = {
   itemName: item,
   itemPrice: price,
 }
 cart.push(newItem)
 return `${newItem.itemName} has been added to your cart.`
}

function viewCart() {
  // write your code here
  var array = [];
  
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}

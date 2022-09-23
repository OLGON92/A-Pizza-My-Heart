//Business Logic
function Pizza(size, toppings) {
  this.size = size;
  this.toppings= toppings;
}
Pizza.prototype.cost = function() {
  let toppingsTotal = 0;
  const size = new Map([
    ["Small", 8],
    ["Medium", 12],
    ["Large", 16]
  ]);
  const toppings = new Map([
    ["Pepperoni", 4],
    ["Sausage", 4],
    ["Saitan", 5],
    ["Mushrooms", 3],
    ["Peppers", 3],
    ["Onions", 1]
  ]);
  
}
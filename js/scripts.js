//Business Logic
function Pizza(size, toppings) {
  this.size = size;
  this.toppings= toppings;
}

Pizza.prototype.cost = function() {
  let toppingsTotal = 0;
  const sizeArray = new Map([
    ["Small", 8.00],
    ["Medium", 12.00],
    ["Large", 16.00]
  ]);
  const toppingsArray = new Map([
    ["Pepperoni", 4.00],
    ["Sausage", 4.00],
    ["Saitan", 5.00],
    ["Mushrooms", 3.00],
    ["Peppers", 3.00],
    ["Onions", 1.00]
  ]);
  this.toppings.forEach(function(element) {
    toppingsTotal += toppingsArray.get(element)
  });
  price = sizeArray.get(this.size) + toppingsTotal;
  return price;
}

//UI Logic

function handleFormSubmission(event) {
  event.preventDefault();
  let pizzaSize = document.querySelector("input[name=pizzaSize]:checked").value;
  let pizzaToppings = [];
  document.querySelectorAll("input[name=Toppings]:checked").forEach(function(element) {
    let toppings = element['value'];
    pizzaToppings.push(toppings);
  }); 
  let newPizza = new Pizza(pizzaSize, pizzaToppings);
  document.querySelector("span.size-pizza").innerText = (pizzaSize + " " + "Pizza");
  document.querySelector("span.toppings-pizza").innerText = (pizzaToppings.join(", "));
  document.querySelector("span.cost").innerText = newPizza.cost();
}
window.addEventListener("load", function() {
  document.querySelector("form#new-za").addEventListener("submit", handleFormSubmission);
});

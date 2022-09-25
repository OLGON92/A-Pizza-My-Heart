//Business Logic
function Pizza(size, toppings) {
  this.size = size;
  this.toppings= toppings;
}

Pizza.prototype.cost = function() {
  let toppingsTotal = 0;
  const size = new Map([
    ["Small", 8.00],
    ["Medium", 12.00],
    ["Large", 16.00]
  ]);
  const toppings = new Map([
    ["Pepperoni", 4.00],
    ["Sausage", 4.00],
    ["Saitan", 5.00],
    ["Mushrooms", 3.00],
    ["Peppers", 3.00],
    ["Onions", 1.00]
  ]);
  this.toppings.forEach(function(element) {
    toppingsTotal += toppings.get(element)
  });
  price = size.get(this.size) + toppingsTotal;
  return price;
}

//UI Logic
function handleFormSubmission(event) {
  event.preventDefault();
  let pizzaSize = document.querySelector("input:radio[name=pizzaSize]:checked").value;
  let pizzaToppings = [];
  document.querySelector("input:checkbox[name=Toppings]:checked").each(function(){
    pizzaToppings.push(this)
  });
  newPizza = new Pizza(pizzaSize, pizzaToppings);
  ("#cost").text(newPizza.cost());
  ("#pizzaOrder").text(pizzaSize + " " + "pizza");
  ("#pizzaDetails").text(pizzaToppings.join(", "));
}
window.addEventListener("load", function() {
  this.document.querySelector("form#new-za"),this.addEventListener("submit", handleFormSubmission);
});
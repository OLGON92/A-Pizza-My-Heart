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
let pizza = new Pizza(size, toppings);

function displayPizzaDetails(event) {
  let pizzaDetails = pizza.cost(event.target.id);
  document.querySelector(".cost").innerText(newPizza.cost()) = pizzaDetails.cost;
  document.querySelector(".size-pizza").innerText(pizzaSize + " " + "pizza") = pizzaDetails.sizePizza;
  document.querySelector(".toppings-pizza").innerText(pizzaToppings.join(", ")) = pizzaDetails.toppingsPizza;
}
function handleFormSubmission(event) {
  event.preventDefault();
  let pizzaSize = document.querySelector("input:radio[name=pizzaSize]:checked").value;
  let pizzaToppings = [];
  pizzaToppings = document.querySelector("input:checkbox[name=Toppings]:checked").each(function(){
    pizzaToppings.push(this.toppings)
  });
  let newPizza = new Pizza(pizzaSize, pizzaToppings);
  pizza.cost(newPizza);
}
window.addEventListener("load", function() {
  document.querySelector("form#new-za").addEventListener("submit", handleFormSubmission);
  document.querySelector("div#seePizza").addEventListener("click", displayPizzaDetails);
});

/*
document.querySelector("#cost").text(newPizza.cost());
  document.querySelector("#pizzaOrder").text(pizzaSize + " " + "pizza");
  document.querySelector("#pizzaDetails").text(pizzaToppings.join(", "));
  let pizzaToppings = [];
  document.querySelector(".cost").innerText(newPizza.cost());
  document.querySelector(".size-pizza").innerText(pizzaSize + " " + "pizza");
  document.querySelector(".toppings-pizza").innerText(pizzaToppings.join(", "));
*/
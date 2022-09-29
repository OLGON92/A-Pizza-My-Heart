//Business Logic
function Pizza(size, toppings) {
  this.size = size;
  this.toppings= toppings;
}
//Re-factor this. Have cost proto set this.price equal to what ever the number is. have the price be a property of your pizza.
Pizza.prototype.cost = function() {
  let toppingsTotal = 0;
  const size = new Map([
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
  let price = size.get(this.size) + toppingsTotal;
  return price;
}

//UI Logic

function handleFormSubmission(event) {
  event.preventDefault();
  let pizzaSize = document.querySelector("input[name=pizzaSize]:checked").value;
  let pizzaToppings = [];
  /*let selectedToppings = document.querySelectorAll("input[name=Toppings]:checked").forEach(function(){
  pizzaToppings.push(document.querySelector(this).value);
  });*/
  //Work here 
  let selectedToppings = document.querySelectorAll("input[name=Toppings]:checked").forEach(function(element) {
    let toppings = element['value'];
    pizzaToppings.push(toppings);
  });
  console.log(selectedToppings)
  // .forEach(function(){
  //   pizzaToppings.push(document.querySelector(this).value);
  //   });
  newPizza = new Pizza(pizzaSize, pizzaToppings);
  document.querySelector("span.cost").innerText = (newPizza.cost());
  document.querySelector("span.size-pizza").innerText = (pizzaSize + " " + "pizza");
  document.querySelector("span.toppings-pizza").innerText = (pizzaToppings.join(", "));
}
window.addEventListener("load", function() {
  document.querySelector("form#new-za").addEventListener("submit", handleFormSubmission);
});
/*
document.querySelector("#cost").text(newPizza.cost());
  document.querySelector("#pizzaOrder").text(pizzaSize + " " + "pizza");
  document.querySelector("#pizzaDetails").text(pizzaToppings.join(", "));
  let pizzaToppings = [];
  document.querySelector(".cost").innerText(newPizza.cost());
  document.querySelector(".size-pizza").innerText(pizzaSize + " " + "pizza");
  document.querySelector(".toppings-pizza").innerText(pizzaToppings.join(", "));
  $(document).ready(function() {
  $("#new-pizza").submit(function(event){
  event.preventDefault();
  let pizzaSize = $("input:radio[name=pizzaSize]:checked").val();
  let pizzaToppings = [];
  $("input:checkbox[name=Toppings]:checked").each(function(){
  pizzaToppings.push($(this).val());
  });
  newPizza = new Pizza(pizzaSize, pizzaToppings);
  $("#cost").text(newPizza.cost());
  $("#pizzaOrder").text(pizzaSize + " " + "pizza");
  $("#pizzaDetails").text(pizzaToppings.join(", "));
  });
});
*/
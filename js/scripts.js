// Business Logic for pizzas

function Pizza(topping, size)  {
  this.toppings = topping;
  this.size = size;
  this.currentPrice = 0;
}

Pizza.prototype.addTopping = function(newTopping) {
  this.toppings.push(newTopping);
}

Pizza.prototype.checkPrice = function() {
  let numberOfToppings = this.toppings.length;
  console.log(numberOfToppings);
  this.currentPrice += (numberOfToppings*1.25);
  console.log(this.currentPrice);
  if (this.size === "small")  {
    this.currentPrice += 5.00;
    return this.currentPrice;
  } else if (this.size === "medium")  {
    this.currentPrice += 9.00;
    return this.currentPrice;
  } else if (this.size === "large") {
    this.currentPrice += 13.00;
    return this.currentPrice;
  } else  {
    console.log("no pizza size has been selected");
  }
}

// UI Logic

function handleFormSubmission(event) {
  event.preventDefault();
  const inputtedFirstName = document.querySelector("input#first-name").value;
  const inputtedPizzaSize = document.getElementById("pizza-size-input").value;
  const inputtedToppings = document.querySelectorAll("input[name=topping-option]:checked").values;
  const inputtedToppingsArr = Array.from(inputtedToppings);
  console.log(inputtedFirstName);
  console.log(inputtedPizzaSize);
  console.log(inputtedToppingsArr);
}

function handleResetButton(event)  {
  // event.preventDefault();
  // window.location.reload();
}

window.addEventListener("load", function (){
  document.querySelector("form#user-input").addEventListener("submit", handleFormSubmission);
  document.getElementById("reset").addEventListener("onclick", handleResetButton);
});
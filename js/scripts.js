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


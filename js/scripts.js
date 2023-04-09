// Business Logic for pizzas

function Pizza(topping, size)  {
  this.toppings = topping;
  this.size = size;
}

Pizza.prototype.addTopping = function(newTopping) {
  this.toppings.push(newTopping);
}

Pizza.prototype.checkPrice = function() {
  if (this.size === "small")  {
    return 5.00;
  } else if (this.size === "medium")  {
    return 9.00;
  } else  {
    return 13.00;
  }
}

// UI Logic
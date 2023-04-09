// Business Logic for pizzas

function Pizza(topping, size)  {
  this.toppings = topping;
  this.size = size;
}

Pizza.prototype.addTopping = function(newTopping) {
  this.toppings.push(newTopping);
}

// UI Logic
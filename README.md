```
Describe: Pizza()

Test: "The pizza constructor should return a Pizza object with two properties for topping and size."
Code: const myPizza = new Pizza (["pepperoni", "olives"], "medium");
myPizza;
Expected Output: Pizza { toppings: ["pepperoni", "olives"], size: "medium" }

Describe: Pizza.prototype.addTopping()

Test: "It should add additional toppings to the topping property of the pizza object."
Code: 
const myPizza = new Pizza (["pepperoni", "olives"], "medium");
myPizza.addTopping("onions");
myPizza;
Expected Output: Pizza { toppings: ["pepperoni", "olives", "onions"], size: "medium" }

```
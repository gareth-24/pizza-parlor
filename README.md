```
Describe: Pizza()

Test: "The pizza constructor should return a Pizza object with two properties for topping and size."
Code: const myPizza = new Pizza (["pepperoni", "olives"], "medium");
myPizza;
Expected Output: Pizza { toppings: ["pepperoni", "olives"], size: "medium" }

Test: "It should also give the pizza object a property called 'currentPrice' that is initially set to 0."
Code: const myPizza = new Pizza (["pepperoni", "olives"], "medium");
myPizza;
Expected Output: Pizza { toppings: ["pepperoni", "olives"], size: "medium", currentPrice: 0 }

Describe: Pizza.prototype.addTopping()

Test: "It should add additional toppings to the topping property of the pizza object."
Code: 
const myPizza = new Pizza (["pepperoni", "olives"], "medium");
myPizza.addTopping("onions");
myPizza;
Expected Output: Pizza { toppings: ["pepperoni", "olives", "onions"], size: "medium" }

Describe: Pizza.prototype.checkPrice()

Test: "It will initially determine the price of the pizza based on size."
Code:
const smallPizza = new Pizza (["pepperoni"], "small");
const mediumPizza = new Pizza (["pepperoni"], "medium");
smallPizza.checkPrice();
mediumPizza.checkPrice();
Expected Output:
5.00;
9.00;

Test: "It will determine the price of the pizza based on size and number of toppings."
Code:
const smallPizza = new Pizza (["pepperoni"], "small");
const mediumPizza = new Pizza (["pepperoni", "olives"], "medium");
smallPizza.checkPrice();
mediumPizza.checkPrice();
Expected Output:
6.25;
11.50;

Test: "If no toppings are selected, it should correctly price the pizza as $5 for a small, $9 for a medium, or $13 for a large."
Code:
const smallPizza = new Pizza ([], "small");
const mediumPizza = new Pizza ([], "medium");
const largePizza = new Pizza ([], "large");
smallPizza.checkPrice();
mediumPizza.checkPrice();
largePizza.checkPrice();
Expected Output:
5;
9;
13;

```
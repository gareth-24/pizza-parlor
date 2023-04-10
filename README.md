# _Pizza Parlor_

#### By _**Gareth Grindeland**_

#### _A student web application built with JavaScript, HTML, and CSS._

## Technologies Used

* Git
* HTML
* CSS
* JavaScript
* Bootstrap version 5.2.3
* Dillinger online markdown editor

## Description

_This is a student project built from scratch using JavaScript, HTML, and CSS in order to demonstrate an understanding of constructor functions, prototype methods, and test-driven development. On the webpage the user can enter the name of the person that the order is for, choose a pizza size, and select any number of toppings from the checkbox form. Once the form is submitted, the application will calculate the cost of their custom pizza based off of its size and toppings and display the results. Each time the form is submitted, the results will update. This was submitted as an independent coding project for week 4 of the full-time Epicodus C# and React course._

## Setup/Installation Requirements

* _Clone this repository to your desktop._
* _Navigate to the top level of the directory._
* _Open index.html in your browser._
* _Enter your name and choose a pizza size and toppings from the form._
* _Click 'Submit' to see the price of your pizza._

## Tests
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

## Known Bugs

* _No known bugs_

## License

_MIT_
_Copyright (c) 2023 Gareth Grindeland_

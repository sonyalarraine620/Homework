//Create an array of pizzaToppings with at least four different toppings

let pizzaToppings = ["Pepperoni","Cheese", "olives", "mushrooms"];

//Create a greetCustomer function that prints a message that welcomes a guest, then informs them of the available toppings by looping over pizzaToppings (don't worry about perfect grammar here yet, i.e. "a, b, and c", see Bonus Challenge #9)

function greetCustomer() {
    for (let topping of pizzaToppings)
    console.log(`Welcome valued customer, we have ${toppings} available.`);
};


function getPizzaOrder(size, crust, ...toppings) {
    console.log(`One ${size}, ${crust}, with ${toppings} hitting the oven! `)

};


function preparePizza(size, crust, topping){
  console.log("...Preparing Pizza")
  return pizzaObj = {
    size: "large",
    crust: "thin",
    Topping: pizzaToppings[0],
  };
};
//outputs a pizza Object with appropriate key-value pairs for size, crust, and toppings
//Create a servePizza function that

function servePizza() {
  pizzaType = {
   pizzaSize: "Large",
   crustType: "deep dish",
   toppingList: pizzaToppings,
 };
 console.log(`Order up! Here's your ${pizzaSize}, ${crustType}, ${toppingList}...enjoy!`)
 return pizza;
};
servePizza()
//has a parameter of a pizza Object
//logs a message that the pizza is ready and repeats the order, i.e. "Order up! Here's your large thick crust pizza with x, y, z, ... Enjoy!"
//outputs the same pizza Object that was passed in
//Call each function and (starting with preparePizza) use the returned value from the previous function as its input

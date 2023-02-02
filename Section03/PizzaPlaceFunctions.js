let pizzaToppings = ["Pepperoni", "sasuage", "mushrooms", "olives"];

function greetCustomer(){
    console.log(`Welcome guest! Our toppings available are: `)
    for(let topping of pizzaToppings)
    console.log(`${topping}`)
  };

 function getPizzaOrder(size, crust, ...toppings){
   console.log(`One ${size} ${crust} crust pizza with ${toppings}... coming up!`)

 return [size, crust, toppings];
};


function preparePizza([size, crust, ...toppings]) {
  console.log("...Cooking pizza...");
  const pizzaObj = {
    size: size,
    crust: crust,
    topping: toppings,
  }
  return pizzaObj
}

function servePizza(pizzaObj){
  console.log(`Order up! Here's your ${pizzaObj.size} ${pizzaObj.crust} with ${pizzaObj.topping}`)
  return pizzaObj
};
greetCustomer();
servePizza(preparePizza(getPizzaOrder("Large", "Deep-Dish", "Mushrooms", "olives")));

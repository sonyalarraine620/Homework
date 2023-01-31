let pizzaPlace = "Robertos";
let numOfToppings = 3;
console.log(typeof pizzaPlace);
console.log(typeof numOfToppings);

console.log(`Here at ${pizzaPlace}, The right number of toppings is ${numOfToppings}!`);

if (numOfToppings < 10) {
  console.log("Quality, not quantity.")
} else {
  console.log("A whole lot of pizza.")
};

// Bonus Challenge
for (let i = 2; i <= 10 ; i+=2) {
  console.log(`At ${pizzaPlace} We have ${i} toppings. `)
};
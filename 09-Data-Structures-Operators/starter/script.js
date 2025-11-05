'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const italianFoods = new Set([
  'pasta',
  'gnocchi',
  'tomatoes',
  'olive oil',
  'garlic',
  'basil',
]);

const mexicanFoods = new Set([
  'tortillas',
  'beans',
  'rice',
  'tomatoes',
  'avocado',
  'garlic',
]);

// Data needed for first part of the section
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDeliver({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza(mainIng, ...otherIngs) {
    console.log(mainIng, otherIngs);
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

const rest1 = {
  name: 'Capri',
  numGuests: 0,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
};

//////////////////////////////////
//////ENHANCED OBJECCT LITERALS///////

/*
//////////////////////////////////
//////FOR-OF LOOP///////
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
for (const item of menu) {
  console.log(item);
}

for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}

// console.log(...menu.entries());
//////////////////////////////////
//////LOGICAL ASSIGNMENT OPERATORS///////

// OR assignment operator
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// Nullish Coalescing assignment operator (null or undefined)
// rest1.numGuests = rest1.numGuests ?? 10;
// rest2.numGuests = rest1.numGuests ?? 10;

// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;

// AND assignment operator
// rest1.owner = rest1.owner && '<ANONYMOUS>'; //adds owner: undefined to rest1 object
// rest2.owner = rest2.owner && '<ANONYMOUS>';

rest1.owner &&= '<ANONYMOUS>'; // doesnt add the owner key/value because its changing anything thats already truthy. owner in rest1 doesnt exist its not truthy
rest2.owner &&= '<ANONYMOUS>';

console.log(rest1);
console.log(rest2);

//////////////////////////////////
//////SHORT CIRCUITING///////
// || operator
console.log(3 || 'ricky');
console.log('' || 'ricky');
console.log(true || 0);
console.log(undefined || null);
console.log(undefined || 0 || '' || 'Hello' || 11 || null);

restaurant.numGuests = 11;
const guest1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guest1);

const guest2 = restaurant.numGuests || 10;
console.log(guest2);

// && operator
console.log(0 && 'ricky');
console.log(2 && 'ricky');
console.log(2 && 'ricky' && null && 'hello');

if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'pepperoni');
}
restaurant.orderPasta && restaurant.orderPizza('mushrooms', 'pepperoni');

// nullish coalescing (??)
restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
// console.log(guests);

// const guestCorrect = null ?? restaurant.numGuests;
const guestCorrect = restaurant.numGuests ?? null;
console.log(guestCorrect);

//////////////////////////////////
//////REST OPERATOR///////

////////Destructuring////////
// SPREAD, because on the right side of =
const arr = [1, 2, ...[3, 4]];
// console.log(arr);

// REST, because on the left side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);

//arrays
const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);
console.log(...restaurant.starterMenu);

//objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(sat, weekdays);

//////////Functions////
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};

add(2, 3);
add(2, 3, 4, 5);
add(2, 3, 4, 5, 6, 7);

const x = [23, 5, 7];
add(...x);

restaurant.orderPizza('mushrooms', 'pepporoni', 'jalapenos', 'bacon');
restaurant.orderPizza('mushrooms');

//////////////////////////////////
//////SPREAD OPERATOR///////
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const goodNewArr = [1, 2, ...arr];
console.log(goodNewArr);
console.log(...goodNewArr);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

//shallow copy array
const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);

//merge arrays
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);

//strings
const str = 'Ricky';
const letters = [...str, ' ', 'A.'];
console.log(letters);

//with functions
const ingredients = [
  prompt("Let's make pasta! Ingredient 1?"),
  prompt('Ingredient 2?'),
  prompt('Ingredient 3?'),
];
console.log(ingredients);
restaurant.orderPasta(...ingredients);

//objects
const newRestaurant = { ...restaurant, founder: 'Guiseppe', foundedIn: 1996 };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Risorante Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);
*/

//////////////////////////////////
//////DESTRUCTURING OBJECTS///////

/*
//basic
const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

//renaming variables
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
// console.log(restaurantName, hours, tags);

//setting default value for new key
const { starterMenu: starters = [] } = restaurant;
// console.log(starters);

//mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b);

//nested objects
const {
  fri: { open, close },
} = hours;
console.log(hours, open, close);

restaurant.orderDeliver({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDeliver({
  address: 'Via del Sole, 21',
  starterIndex: 1,
});

/////////////////////////////////
//////DESTRUCTURING ARRAYS///////
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);

// skipping variables
let [main, , secondary] = restaurant.categories;
console.log(main, secondary); // Italian, Vegetarian

// switching values

// old way
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary); // Vegetarian, Italian

// with destructuring
[secondary, main] = [main, secondary];
console.log(main, secondary);

// creating variables through function calls
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// nested destructuring
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j); // 2 [5, 6]
const [i, , [j, k]] = nested;
console.log(i, j, k);

// default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
*/

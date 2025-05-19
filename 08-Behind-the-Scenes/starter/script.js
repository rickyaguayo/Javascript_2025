'use strict';

///////////SCOPING//////////////
/*
const a = 'ricky';
first();

function first() {
  const b = 'hello';
  second();

  function second() {
    const c = 'Hi';
    third();
  }
}

function third() {
  const d = 'hey!';
  console.log(d + a);
}

let a = true;

if (a) {
  var b = 'ricky';
} else {
  var c = 'not ricky';
}
console.log(a, b, c);

function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}.`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;

      // new variable for with same name as outer scope
      const firstName = 'Bibi';

      // reassigning outerscope variable
      output = 'new output';

      const str = `Oh and you're a millenial, ${firstName}`;
      console.log(str);

      console.log(add(1, 3));
      function add(a, b) {
        return a + b;
      }
      console.log(millenial);
      console.log(output);
      console.log(add(2, 3));
    }
  }
  printAge();
  return age;
}

const firstName = 'Ricky';
calcAge(1992);

///////////HOISTING//////////////
// variables
console.log(me);
// console.log(job);
// console.log(year);

var me = 'Ricky';
let job = 'engineer';
const year = 1992;

// functions
console.log(addDecl(2, 3));
console.log(addExpr(2, 3));
console.log(addArr(2, 3));

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

const addArr = (a, b) => {
  return a + b;
};

if (!numProducts) deleteShoppingCart();
console.log(numProducts);

var numProducts = 10;

function deleteShoppingCart() {
  console.log('Shopping cart emptied!');
}

var x = 1;
let y = 2;
const z = 3;
*/

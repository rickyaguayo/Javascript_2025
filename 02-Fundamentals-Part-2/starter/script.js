"use strict";

/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriverLicense = true;

if (hasDriversLicense) console.log("I can drive");

function logger() {
  console.log("My name is Ricky");
}

logger();

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges`;
  return juice;
}

const appleJucie = fruitProcessor(5, 0);
console.log(appleJucie);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

//Function Declaration
function calcAge1(birthYear) {
  return 2037 - birthYear;
}

const age1 = calcAge1(1992);

//Function Expression
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};

const age2 = calcAge2(1992);
console.log(age1, age2);

const calcAge3 = (birthYear) => 2037 - birthYear;
const age3 = calcAge3(1992);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  // return retirement;
  return `${firstName} retires in ${retirement} years`;
  
  console.log(yearsUntilRetirement(1992, "Ricky"));
  };
  
  function cutFruitPieces(fruit) {
    return fruit * 4;
  }
  
  function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    
    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange`;
    return juice;
  }
  
  console.log(fruitProcessor(2, 3));
  
  const calcAge = function (birthYear) {
    return 2037 - birthYear;
  };
  
  const yearsUntilRetirement = (birthYear, firstName) => {
    const age = calcAge(birthYear);
    const retirement = 65 - age;
    
    if (retirement > 0) {
      console.log(`${firstName} retires in ${retirement} years`);
      return retirement;
    } else {
      console.log(`${firstName} is already retired!`);
    return -1;
  }
  
  // return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(1992, "Ricky"));
console.log(yearsUntilRetirement(1970, "Bob"));

const friends = ["Michael", "Steven", "Peter"];
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "Jay";
console.log(friends);

const firstName = "Ricky";
const ricky = [firstName, "Aguayo", 2037 - 1992, "idk", friends];
console.log(ricky);

const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1]),
];
console.log(ages);

const friends = ["Michael", "Steven", "Peter"];
const newLength = friends.push("Jay");
console.log(friends);
console.log(newLength);

friends.unshift("John");
console.log(friends);

friends.pop();
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift();
console.log(friends);

console.log(friends.indexOf("Steven"));
console.log(friends.indexOf("Bob"));

friends.push(23);
console.log(friends.includes("Steven"));
console.log(friends.includes("Bob"));
console.log(friends.includes("23"));

const rickyArray = [
  "Ricky",
  "Aguayo",
  2037 - 1992,
  "idk",
  ["Michael", "Peter", "Steven"],
];

const ricky = {
  firstName: "Ricky",
  lastName: "Aguayo",
  age: 2037 - 1992,
  job: "idk",
  friends: ["Michael", "Peter", "Steven"],
};

console.log(ricky);
console.log(ricky.lastName);
console.log(ricky["lastName"]);

const interestedIn = prompt("firstName, lastName, age, job or friends");
console.log(ricky[interestedIn]);

if (ricky[interestedIn]) {
  console.log(ricky[interestedIn]);
} else {
  console.log("Wrong request");
}

ricky.location = "Colorado";
ricky["insta"] = "@p1ckle_r1cky";
console.log(ricky);

const challenge = `${ricky.firstName} has ${ricky.friends.length} friends, and his best friend's name is ${ricky.friends[0]}.`;
console.log(challenge);

const ricky = {
  firstName: "Ricky",
  lastName: "Aguayo",
  birthYear: 1992,
  job: "idk",
  friends: ["Michael", "Peter", "Steven"],
  hasDriversLicense: true,
  
  // calcAge: function (birthYear) {
    //   return 2037 - birthYear;
    // },
    
    // calcAge: function () {
      //   return 2037 - this.birthYear;
      // },
      
      calcAge: function () {
        this.age = 2037 - this.birthYear;
        return this.age;
      },
      
      getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()}-year old ${
          ricky.job
        }, and he has ${this.hasDriversLicense ? "a" : "no"} drivers license.`;
      },
    };
    
    console.log(ricky.calcAge());
    console.log(ricky.age);
    console.log(ricky.age);
    console.log(ricky.age);
    console.log(ricky.age);
    // console.log(ricky["calcAge"](1992));
    
    console.log(ricky.getSummary());
    
    for (let i = 1; i <= 10; i++) {
      console.log(`Lifting weights rep ${i}`);
    }
    
    const ricky = [
      "Ricky",
      "Aguayo",
      2037 - 1992,
      "idk",
      ["Michael", "Peter", "Steven"],
    ];
    
    let types = [];
    
    for (let i = 0; i < ricky.length; i++) {
      // console.log(ricky[i], typeof ricky[i]);
      // newArray.push(typeof ricky[i]);
      types[i] = typeof ricky[i];
    }
    console.log(types);
    
    const years = [1992, 2007, 1967, 2020];
    const ages = [];
    
    for (let i = 0; i < years.length; i++) {
      ages.push(2037 - years[i]);
    }
    
    console.log(ages);
    
    const ricky = [
      "Ricky",
      "Aguayo",
      2037 - 1992,
      "idk",
      ["Michael", "Peter", "Steven"],
    ];
    
    for (let i = 0; i < ricky.length; i++) {
      // if (typeof ricky[i] !== "string") continue;
      if (typeof ricky[i] === "number") break;
      console.log(ricky[i], typeof ricky[i]);
    }
    
    const ricky = [
      "Ricky",
      "Aguayo",
      2037 - 1992,
      "idk",
      ["Michael", "Peter", "Steven"],
    ];
    
    for (let i = ricky.length - 1; i >= 0; i--) {
      console.log(ricky[i]);
    }
    
    for (let exercise = 1; exercise <= 3; exercise++) {
      console.log(`---Starting Exercise ${exercise}---`);
      for (let rep = 1; rep <= 5; rep++) {
        console.log(`Rep ${rep}`);
      }
    }
    
    // for (let i = 1; i <= 10; i++) {
      //   console.log(`Lifting weights rep ${i}`);
      // }
      
      let rep = 1;
      while (rep <= 10) {
        console.log(`Rep ${rep}`);
        rep++;
      }
*/

let dice = Math.trunc(Math.random() * 6) + 1;
// console.log(dice);

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;

  if (dice === 6) console.log("Loop is ending");
}

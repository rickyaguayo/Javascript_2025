/*
// let ricky = "bored";

// console.log(40 + 8 + 23 - 10);
// console.log("Ricky");
// console.log(23);

// let firstName = "Ricky";
// console.log(firstName);

// // Variables
// let ricky_ricardo = "RR";
// let $function = 27;

// let person = "ricky";
// let PI = 3.1415;

// let myFirstJob = "referee";
// let myCurrentJob = "idk bro";

// let job1 = "IHOP";
// let job2 = "Chilis";

// console.log(myFirstJob);

let jsIsFun = true;
console.log(jsIsFun);

// console.log(typeof true);
console.log(typeof jsIsFun);
// console.log(typeof 23);
// console.log(typeof "ricky");

jsIsFun = "i guess";
console.log(typeof jsIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1992;
console.log(typeof year);

console.log(typeof null);

let age = 32;
age = 33;

const birthYear = 1992;
console.log(birthYear);

var job = "idk bro";
job = "stil dk bro";

// Math operators
const now = 2025;
const ageRicky = now - 1992;
const ageMonica = now - 1991;
console.log(ageRicky, ageMonica);

console.log(ageRicky * 2, ageRicky / 10, 2 ** 3);

const firstName = "Ricky";
const lastName = "Aguayo";
console.log(firstName + " " + lastName);

// Assignement operators
let x = 10 + 5;
x += 10;
x *= 4;
x++;
x--;
x--;
console.log(x);

//Comparison operators
console.log(ageMonica > ageRicky);
console.log(ageMonica >= 18);

const isFullAge = ageMonica >= 18;
console.log(now - 1992 > now - 2016);

const now = 2037;
const ageRicky = now - 1992;
const ageRandom = now - 2018;
console.log(ageRicky, ageRandom);

console.log(now - 1992 > now - 2018);

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y); // 10 10

const ageAverage = (ageRicky + ageRandom) / 2;
console.log(ageRicky, ageRandom, ageAverage);

const firstName = "Ricky";
const job = "idk";
const birthYear = 1992;
const year = 2025;

const ricky =
"I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + "!";
console.log(ricky);

const rickyNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(rickyNew);

const age = 15;
const isOldEnough = age >= 18;

if (isOldEnough) {
  console.log("Sarah can start drivers license!");
} else {
  const yearsLeft = 18 - age;
console.log(`Sarah is too young. Wait another ${yearsLeft} years`);
}

const birthYear = 2012;
let century;

if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}

console.log(century);

//type conversion
console.log("1992" + 18);
console.log(Number("1992") + 18);

//type coercion
console.log("Im " + 25 + " years old");
console.log("23" - "10" - 3);
console.log("23" * "2");
console.log("24" / 2);
let n = "1" + 1;
n = n - 1;
console.log(n);

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Ricky"));
console.log(Boolean({}));
console.log(Boolean(""));

const money = 0;
if (money) {
  console.log("Dont spend it all");
} else {
  console.log("get a job son");
}
*/

const age = "18";
if (age === 18) console.log("You just became an adult (strict)");
if (age == 18) console.log("You just became an adult (loose)");

const favorite = Number(prompt("favorite number?"));
console.log(favorite);
console.log(typeof favorite); //string

if (favorite === 11) {
  console.log("11 is a great number");
} else if (favorite === 7) {
  console.log("7 is a great number");
} else {
  console.log("Number is not 11 or 7");
}

if (favorite !== 11) console.log("why not 11?");

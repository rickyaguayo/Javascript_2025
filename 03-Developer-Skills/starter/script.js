// Remember, we're gonna use strict mode in all scripts now!
"use strict";

const calcAge = (birthYear) => 2037 - birthYear;
// console.log(calcAge(1992));

// PROBLEM 1
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array temps in one day, calculate the temp amplitude. Keep in mind that sometimes there might be a sensor error."

const temps = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

// 1. Understanding the problem
// - Whats is temp amplitude?
//     - difference between highest and lowest temp
// - How to calculate max and min temps
// - whats a sensor error and what to do?

// 2. Breaking up into sub pieces
// - How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array
// - Subtract min from max (amplitue) and return it

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 1; i < temps.length; i++) {
    if (typeof temps[i] !== "number") continue;

    if (temps[i] > max) {
      max = temps[i];
    }

    if (temps[i] < min) {
      min = temps[i];
    }
  }
  console.log(max, min);
  return max - min;
};

// const amplitude = calcTempAmplitude(temps);
// console.log(amplitude);

// PROBLEM 2
// Function should now receive 2 arrays of temps

// 1. Understanding the problem
//  - With 2 arrays, should we implement functionality twice? No, just merge the two arrays
// 2. Breaking up into sub-problems
// - Merge 2 arrays

const calcTempAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = temps[0];
  let min = temps[0];

  for (let i = 1; i < temps.length; i++) {
    if (typeof temps[i] !== "number") continue;

    if (temps[i] > max) {
      max = temps[i];
    }

    if (temps[i] < min) {
      min = temps[i];
    }
  }
  console.log(max, min);
  return max - min;
};

const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
console.log(amplitudeNew);

// Remember, we're gonna use strict mode in all scripts now!
"use strict";
/*
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

const measureKelvin = () => {
  const measurement = {
    type: "temp",
    unit: "celsius",
    // value: Number(prompt("Degress celsius:")),
    value: 10,
  };
  
  console.table(measurement);
  
  const kelvin = measurement.value + 273;
  return kelvin;
};

console.log(measureKelvin());

const calcTempAmplitudeBug = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);
  
  // introducing bug
  let max = 0;
  let min = 0;
  
  for (let i = 1; i < temps.length; i++) {
    if (typeof temps[i] !== "number") continue;
    
    // debugger;
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

const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 0, 5]);
console.log(amplitudeBug);
*/

// CHALLENGE

let str = "... ";
const printForecast = (arr) => {
  // console.log(arr);
  for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i]);
    str = str.concat(`${arr[i]}C in ${i + 1} ${i === 0 ? "day" : "days"} ... `);
    // console.log(str.concat(`${arr}`));
    // console.log(str);
  }
  return str;
};

// console.log(printForecast([17, 21, 23]));
// printForecast([12 ,5 ,-5, 0, 4])

// const a = () => {
//   const b = 2;
//   return { b };
// };

// console.log(a());

function analyzeWorkWeek(workHours) {
  // Ensure the input array has exactly 7 days
  if (workHours.length !== 7) {
    throw new Error("Input array must have exactly 7 days.");
  }

  // Array to map the index to actual weekday names
  const weekdays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  // Calculate total hours worked
  const totalHours = workHours.reduce((acc, hours) => acc + hours, 0);

  // Calculate average daily hours, rounding to one decimal place
  const averageDailyHours = (totalHours / workHours.length).toFixed(1);

  // Find the day with the most hours worked
  const mostHoursIndex = workHours.indexOf(Math.max(...workHours));
  const mostHoursDay = weekdays[mostHoursIndex]; // Get the weekday name corresponding to the index

  // Calculate the number of days worked (days with more than 0 hours)
  const daysWorked = workHours.filter((hours) => hours > 0).length;

  // Check if the week was full-time (worked 35 hours or more)
  const isFullTime = totalHours >= 35;

  // Return the result as an object
  return {
    totalHours,
    averageDailyHours: parseFloat(averageDailyHours), // Convert string back to float
    mostHoursDay,
    daysWorked,
    isFullTime,
  };
}

// Example usage
const workHours = [8, 7.5, 9, 6, 8, 0, 5]; // Example array of hours worked per day (Mon to Sun)
try {
  const result = analyzeWorkWeek(workHours);
  console.log(result);
} catch (error) {
  console.log(error.message);
}

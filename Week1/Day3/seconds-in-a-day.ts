let currentHours: number = 14;
let currentMinutes: number = 34;
let currentSeconds: number = 42;

// Write a program that prints the remaining seconds (as an integer) from a
// day if the current time is represented by these variables

let currentCurrentSeconds: number = currentSeconds + (currentMinutes * 60) + (currentHours * 60) * 60;
console.log(currentCurrentSeconds);
let secondsInaDay: number = 60 * 60 * 24;
console.log(secondsInaDay);
let remainingSeconds: number = secondsInaDay - currentCurrentSeconds;
console.log(remainingSeconds);
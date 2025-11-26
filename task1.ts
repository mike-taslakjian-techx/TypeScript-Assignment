// Create a TypeScript program that calculates the area of a rectangle using type annotations

function getArea(length: number, width: number): number {
    return length * width;
};
// Write a function that takes a variable number of arguments 
// (using rest parameters) and returns their sum

function getSum(...nums: number[]): number {
    return nums.reduce((acc, num) => acc + num, 0);
};

// Create an enum for days of the week and print the current day

enum daysOfWeek {
    Monday = 1,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
};

console.log(daysOfWeek[new Date().getDay()]);


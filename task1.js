// Create a TypeScript program that calculates the area of a rectangle using type annotations
function getArea(length, width) {
    return length * width;
}
;
// Write a function that takes a variable number of arguments 
// (using rest parameters) and returns their sum
function getSum() {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    return nums.reduce(function (acc, num) { return acc + num; }, 0);
}
;
console.log(getSum(1, 2, 3, 4));
// Create an enum for days of the week and print the current day
var daysOfWeek;
(function (daysOfWeek) {
    daysOfWeek[daysOfWeek["Monday"] = 1] = "Monday";
    daysOfWeek[daysOfWeek["Tuesday"] = 2] = "Tuesday";
    daysOfWeek[daysOfWeek["Wednesday"] = 3] = "Wednesday";
    daysOfWeek[daysOfWeek["Thursday"] = 4] = "Thursday";
    daysOfWeek[daysOfWeek["Friday"] = 5] = "Friday";
    daysOfWeek[daysOfWeek["Saturday"] = 6] = "Saturday";
    daysOfWeek[daysOfWeek["Sunday"] = 7] = "Sunday";
})(daysOfWeek || (daysOfWeek = {}));
;
console.log(daysOfWeek[new Date().getDay()]);

// Task
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
;
var Employee = /** @class */ (function () {
    function Employee(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;
    }
    ;
    Employee.prototype.displayInfo = function () {
        return ({
            name: this.name,
            age: this.age,
            email: this.email
        });
    };
    return Employee;
}());
;
var emp = new Employee("John Doe", 30, "john.doe@example.com");
console.log(emp.displayInfo());
// 2. 
// Write a program that uses union types to handle different types of inputs (e.g., string or number)
// You will hava a handleInput function that will take both string and number input, do something based on input type
function handleInput(parameter) {
    if (typeof parameter === "string") {
        return "The parameter is of type string: ".concat(parameter);
    }
    else {
        return "The parameter is of type number: ".concat(parameter);
    }
}
;
console.log(handleInput("Hello World"));
console.log(handleInput(42));
// 3. 
// Create an abstract class Shape with an abstract method calculateArea()
// Extend it with classes like Circle and Rectangle
// Implement calculateArea in child classes
var Shape = /** @class */ (function () {
    function Shape() {
    }
    return Shape;
}());
;
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle(radius) {
        var _this = _super.call(this) || this;
        _this.radius = radius;
        return _this;
    }
    Circle.prototype.calculateArea = function () {
        return Math.PI * Math.pow(this.radius, 2);
    };
    return Circle;
}(Shape));
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(length, height) {
        var _this = _super.call(this) || this;
        _this.length = length;
        _this.height = height;
        return _this;
    }
    ;
    Rectangle.prototype.calculateArea = function () {
        return this.length * this.height;
    };
    ;
    return Rectangle;
}(Shape));
var circle = new Circle(5);
console.log("Circle Area: ".concat(circle.calculateArea()));
var rectangle = new Rectangle(10, 20);
console.log("Rectangle Area: ".concat(rectangle.calculateArea()));
// Testing the functionality
// Test the Employee class
// const emp = new Employee("John Doe", 30, "john.doe@example.com");
// emp.displayInfo();
// Test the union type function
// handleInput("Hello World");
// handleInput(42);
// Test the shape classes
// const circle = new Circle(5);
// console.log(`Circle Area: ${circle.calculateArea()}`);
// const rectangle = new Rectangle(10, 20);
// console.log(`Rectangle Area: ${rectangle.calculateArea()}`);

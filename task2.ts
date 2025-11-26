// Task

// 1. 
    // Create an interface Person with properties like name, age, and email.
    // Implement this interface in a class Employee and add a method to display employee info

interface Person {
    name: string,
    age: number,
    email: String
};

class Employee implements Person {
    name: string;
    age: number;
    email: string;

    constructor(name: string, age: number, email: string) {
        this.name = name;
        this.age = age;
        this.email = email;
    };

    displayInfo() {
        return ({
            name: this.name,
            age: this.age,
            email: this.email
        });
    }
};

const emp = new Employee("John Doe", 30, "john.doe@example.com");
console.log(emp.displayInfo());

// 2. 
    // Write a program that uses union types to handle different types of inputs (e.g., string or number)
    // You will hava a handleInput function that will take both string and number input, do something based on input type

function handleInput(parameter: (number | string)) {
    if (typeof parameter === "string") {
        return `The parameter is of type string: ${parameter}`;
    } else {
        return `The parameter is of type number: ${parameter}`;
    }
};

console.log(handleInput("Hello World"));
console.log(handleInput(42));

// 3. 
    // Create an abstract class Shape with an abstract method calculateArea()
    // Extend it with classes like Circle and Rectangle
    // Implement calculateArea in child classes

abstract class Shape {
    abstract calculateArea(): number;
};

class Circle extends Shape {
    radius: number;

    constructor(radius: number) {
        super();
        this.radius = radius;
    }

    calculateArea(): number {
        return Math.PI * Math.pow(this.radius, 2);
    }
}

class Rectangle extends Shape {
    length: number;
    height: number;

    constructor(length: number, height: number) {
        super();
        this.length = length;
        this.height = height;
    };

    calculateArea() {
      return this.length * this.height;  
    };
}

const circle = new Circle(5);
console.log(`Circle Area: ${circle.calculateArea()}`);

const rectangle = new Rectangle(10, 20);
console.log(`Rectangle Area: ${rectangle.calculateArea()}`);

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
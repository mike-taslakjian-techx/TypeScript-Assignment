// Exercise Tasks:
// 1. Create a Generic Function reverseArray to Reverse an Array of Any Type:
// Write a function reverseArray that accepts an array of any type and returns the array reversed.
// Use TypeScript generics to allow the function to work with any array type.

function reverseArray<T>(arr: T[]): T[] {
    const copyArr = arr.slice();
    return copyArr.reverse();
};

// 2. Use the Pick Utility Type to Create a New Type with Only Specific Properties:
// Define an interface (e.g., User with properties id, name, and email).
// Use the Pick utility type to create a new type that only includes the id and name properties from the User interface.

interface User {
    id: (number | string),
    name: string,
    email: string
}

type userSummary = Pick<User, "id" | "name">;

// 3. Build a Small TypeScript Project with Multiple Modules:
// Step 1: Create a math.ts module with some basic math functions (e.g., add, subtract).
// Step 2: Create a utils.ts module with a utility function (e.g., capitalize, logMessage).
// Step 3: Create a main.ts file where you import and use the functions from math.ts and utils.ts.

// Hint: Make sure to organize your functions properly and use appropriate module syntax with export and import.
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


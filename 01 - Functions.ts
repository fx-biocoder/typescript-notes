// Function expression
const myFunc = function(name: string): void {
    console.log(`Hello, ${name}!`);
}

// Function declaration
function myFunc2(name: string): void {
    console.log(`Hello, ${name}!`);
}

// Arrow function
const myFunc3 = (name: string): void => {
    console.log(`Hello, ${name}!`);
}

// Optional parameters
const myFunc4 = (name: string, age?: number): void => {
    console.log(`Name: ${name}. Age: ${age || 'Not provided'}`);
}

// Default parameters
const myFunc5 = (name: string, age: number = 18): void => {
    console.log(`Name: ${name}. Age: ${age}`);
}

// Rest parameters
const myFunc6 = (name: string, ...hobbies: string[]): void => {
    console.log(`Name: ${name}. Hobbies: ${hobbies.join(', ')}`);
}
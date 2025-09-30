// Define an interface
export interface User {
    id: number;
    name: string;
    email?: string; // Optional property
}

const greetUser = function (user: User): void {
    console.log(`Hello, ${user.name}!`);
}

// Use function
greetUser({id: 0, name: 'Alice', email: "alice@example.com"});

// Incorrect usage - missing required property 'id'
//greetUser({name: "Alice"});

// Classes
// Contains access modifiers besides typing
export class Person {
    private name: string;
    public age: number;
    protected readonly birthYear: number;

    constructor(
        name: string,
        age: number
    )
    {
        this.name = name;
        this.age = age;
        this.birthYear = new Date().getFullYear() - age;
    }

    public greet(): void {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`)
    }
}

const person = new Person("John", 30);
person.greet();


// Implement an interface in a class
export interface Greetable {
    greet(): void;
}

class Developer implements Greetable {

    constructor(public username: string) {
        this.username = username;
    }

    // It is mandatory to implement the method from the interface
    greet(): void {
        console.log(`Hello, I am ${this.username}`);
    }
}
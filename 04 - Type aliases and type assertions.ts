// Type alias
type UserID = string | number;
let userId: UserID;

// Creating complex types with type aliases 
type Point = {
    x: number;
    y: number;
}

type Circle = {
    center: Point; 
    radius: number;
}

const circle: Circle = {
    center: {x: 0, y: 0},
    radius: 5
}

// Type assertions
let someValue: any = "This is a string";
let strLength: number = (someValue as string).length; // The 'as' keyword casts the variable to a specified type
// Alternatively but not recommended in JSX contexts
let strLength2: number = (<string>someValue).length;
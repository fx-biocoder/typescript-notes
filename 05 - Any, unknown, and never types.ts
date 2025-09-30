let dynamicValue: any = 42;
dynamicValue = "Now I'm a string";
dynamicValue = true;

// Safer alternative: unknown
// You must perform type checks before using it
let unknownValue: unknown = 42;

if (typeof unknownValue === "number") {
    let unknownValueSquared = unknownValue * unknownValue;
    console.log(`Squared value: ${unknownValueSquared}`);
}   

// Never type
// Used for functions that never return
function throwError(message: string): never {
    throw new Error(message);
}

function exhaustiveCheck(x: never): never {
    throw new Error(`Unexpected value: ${x}`);
}

// Exhaustive checking in a union type
type Square = { kind: "square"; size: number };
type Triangle = { kind: "triangle"; base: number; height: number };
type NewCircle = { kind: "circle"; radius: number };

type Shape = NewCircle | Square | Triangle;

function getShapeArea(shape: Shape): number {
    switch (shape.kind) {
        case "square":
            return shape.size * shape.size;
        case "triangle":
            return 0.5 * shape.base * shape.height;
        case "circle":
            return Math.PI * shape.radius * shape.radius;
        default:
            return exhaustiveCheck(shape);
    }
}
// Union types
function formatId(id: number | string) {
    if (typeof id === 'string') {
        return id.toUpperCase();
    }
    return id;
}

// Intersection types
interface BusinessPartner {
    name: string;
    credit: number;
}

interface Identity {
    id: number;
    email: string;
}

// An employee must be both a BusinessPartner and have an Identity
type Employee = BusinessPartner & Identity;

function signContract(employee: Employee): void {
    console.log(`Signed a contract with ${employee.name} (${employee.email}) having credit ${employee.credit}.`);
}

const newEmployee: Employee = {
    id: 1,
    name: "Alice",
    email: "alice@example.com",
    credit: 1000
}
signContract(newEmployee);
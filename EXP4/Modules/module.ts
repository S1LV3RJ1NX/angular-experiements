export class Employee {
    private name;
    private salary;

    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }

    displayInfo() {
        console.log("My name is "+this.name+" and my salary is "+this.salary);
    }
}
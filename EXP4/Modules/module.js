"use strict";
exports.__esModule = true;
var Employee = /** @class */ (function () {
    function Employee(name, salary) {
        this.name = name;
        this.salary = salary;
    }
    Employee.prototype.displayInfo = function () {
        console.log("My name is " + this.name + " and my salary is " + this.salary);
    };
    return Employee;
}());
exports.Employee = Employee;

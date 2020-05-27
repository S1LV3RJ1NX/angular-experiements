// Demonstrating classes and interfaces...
var Student = /** @class */ (function () {
    function Student(name, roll) {
        this.name = name;
        this.roll = roll;
    }
    Student.prototype.aboutMe = function () {
        console.log("My name is: " + this.name);
        console.log("My roll no is: " + this.roll);
    };
    return Student;
}());
var s1 = new Student("abc", 1);
var s2 = new Student("PQR", "12");
s1.aboutMe();
s2.aboutMe();

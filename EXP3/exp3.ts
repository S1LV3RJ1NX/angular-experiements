// Demonstrating classes and interfaces...

interface Person {
    aboutMe();
}

class Student implements Person {

    private name;
    private roll;

    constructor(name, roll) {
        this.name = name;
        this.roll = roll;
    }

    aboutMe() {
        console.log("My name is: "+ this.name);
        console.log("My roll no is: "+this.roll);
    }

}

let s1 = new Student("abc", 1);
let s2 = new Student("PQR", "12");

s1.aboutMe();
s2.aboutMe();



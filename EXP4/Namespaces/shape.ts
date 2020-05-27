/// <reference path = "shapeNamespace.ts" />

namespace Drawing {
    export class Circle implements Shape {

        draw() {
            console.log("I am Circle...");
        }
    }

    export class Triangle implements Shape {
        draw() {
            console.log("I am Triangle...");
        }
    }
}
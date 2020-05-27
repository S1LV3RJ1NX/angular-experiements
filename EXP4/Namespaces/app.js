/// <reference path = "shapeNamespace.ts" />
var Drawing;
(function (Drawing) {
    var Circle = /** @class */ (function () {
        function Circle() {
        }
        Circle.prototype.draw = function () {
            console.log("I am Circle...");
        };
        return Circle;
    }());
    Drawing.Circle = Circle;
    var Triangle = /** @class */ (function () {
        function Triangle() {
        }
        Triangle.prototype.draw = function () {
            console.log("I am Triangle...");
        };
        return Triangle;
    }());
    Drawing.Triangle = Triangle;
})(Drawing || (Drawing = {}));
/// <reference path = "shapeNamespace.ts" />
/// <reference path = "shape.ts" />
// RUN as:- tsc --out app.js main.ts
new Drawing.Circle().draw();
new Drawing.Triangle().draw();

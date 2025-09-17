//level 3.1
// class Shape {
//     constructor(l, b) {
//         this.l = l;
//         this.b = b;
//     }

//     getArea() {
//         return this.l * this.b;
//     }
// }

// class Rectangle extends Shape {
//     constructor(l, b) {
//         super(l, b);
//     }

//     getRecArea() {
//         console.log("Area of Rectangle:", this.getArea());
//     }
// }

// class Square extends Rectangle {
//     constructor(sides) {
//         super(sides, sides); // Calling parent's constructor with same value for length and breadth
//     }

//     getSqArea() {
//         console.log("Area of Square:", this.getArea());
//     }
// }

// const mySquare = new Square(5);
// mySquare.getSqArea(); 
// const myRectangle = new Rectangle(4, 6);
// myRectangle.getRecArea(); 

class Shape{
    getArea(){
        console.log("area of different shapes")
    }
}
class Circle extends Shape{
    constructor(radius){
        super();
        this.radius=radius;
    }
    getArea(){
        const area= Math.PI* this.radius*this.radius;
        return (`Area of Circle :`,area);
    }
}
class Square extends Circle{
    constructor(side){
        super();
        this.side=side;
    }
    getArea(){
        const area= this.side*this.side;
        return(`Area of Square :`, area)
    }
}
class Triangle extends Square{
    constructor(base,height){
        super();
        this.base= base;
        this.height= height;
    }
    getArea(){
        const area= 1/2 * this.base * this.height;
        return (`Area of Triangle :`,area)
    }
}
// const circle =new Circle(4.5);
// circle.getArea();
// const sq= new Square(5);
// sq.getArea();
// const tri= new Triangle(4,5);
// tri.getArea();
const shapes = [
    new Circle(5.1), 
    new Square(5.5),
    new Triangle(4,5.67)
]
shapes.forEach(shape=> {
    console.log(shape.getArea())
});
//level 3.2
class Employee {
    getRole(){
        console.log("Generic Employee")
    }
}
class Developer extends Employee {
    constructor(name){
        super();
        this.name= name;
    }
    getRole(){
        console.log(`${this.name} Writes Code`)
    }
}
class Designer extends Developer{
    constructor(name){
        super(name)
        this.name=name;
    }
    getRole(){
        console.log(`${this.name} Desgins UI`)
    }
}
const dev = new Developer("Ragini Roy");
dev.getRole();
const desg= new Designer("Smriti Sharma");
desg.getRole();

//level 3.3
class LibraryItem {
    constructor(title, author) {
       this.title = title;
       this.author = author;
    }
    getInfo() {
        console.log(`Book title: ${this.title}, Author: ${this.author}`);
    }
}

class Book extends LibraryItem {
    constructor(title, author, numPg) {
        super(title, author);  // pass title and author to parent
        this.numPg = numPg;
    }
    getInfo() {
        super.getInfo(); // include parent details
        console.log(`Pages: ${this.numPg}`);
    }
}

class EBook extends Book {
    constructor(title, author, numPg, size) {
        super(title, author, numPg); // pass everything up the chain
        this.size = size;
    }
    getInfo() {
        super.getInfo(); // include Book + LibraryItem details
        console.log(`File Size: ${this.size}`);
    }
}

const library = new LibraryItem("Rich Dad Poor Dad", "Robert Kiyosaki");
library.getInfo();

const book = new Book("Atomic Habits", "James Clear", 320);
book.getInfo();

const e_book = new EBook("Deep Work", "Cal Newport", 250, "4.5MB");
e_book.getInfo();

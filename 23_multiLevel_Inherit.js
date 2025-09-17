//multilevel inheritance-> parent->child->grand child inherits using super keyword, parent constructor gets called , pass constructors and make custom methods
// class Shape {
//   constructor(shape_name) {
//     this.shape_name = shape_name;
//   }

//   getArea(l, b) {
//     console.log(`Area of ${this.shape_name}: ${l * b}`);
//   }
// }

// class Cuboid extends Shape {
//   constructor(l, b, h) {
//     super("Cuboid");   
//     this.l = l;
//     this.b = b;
//     this.h = h;
//   }

//   getVolume_Cuboid() {
//     console.log(`Volume of Cuboid: ${this.l * this.b * this.h}`);
//   }
// }

// class Cube extends Cuboid {
//   constructor(side) {
//     super(side, side, side);  
//     this.side = side;
//   }

//   getVolume_Cube() {
//     console.log(`Volume of Cube: ${this.side ** 3}`);
//   }
// }
// const shape = new Shape("Rectangle");
// shape.getArea(5, 6);  
// // Area of Rectangle: 30

// const cuboid = new Cuboid(3, 4, 5);
// cuboid.getVolume_Cuboid();  
// // Volume of Cuboid: 60

// const cube = new Cube(6);
// cube.getVolume_Cube();  
// Volume of Cube: 216


//beginner level-1
class Animal{
    constructor(name){
        this.name=name;
    }
    makeSound(){
        console.log(`${this.name} makes sound`)
    }
}
class Dog extends Animal{
   constructor(name, breed){
    super(name)
    this.breed=breed;
   }
   makeSound(){
    console.log(`${this.name} of  breed ${this.breed} makes woof sound` )
   } 
}
const myLily = new Dog("Lily", "German Shepherd")
myLily.makeSound();

//over-riding means same method name, method signature can be different or same 

//level-1.2
class Vehicle{
    constructor(brand){
        this.brand=brand;
    }
}
class Car extends Vehicle{
    constructor(brand,model){
        super(brand)
        this.model= model
    }
    getDetails(){
        console.log(`Brand ${this.brand} Model ${this.model}` )
    }
}
const car = new Car("Mahindra", "XUV")
car.getDetails();

//level 1.3
class Shape{
    constructor(l,b){
        this.l=l;
        this.b=b;
    }
}
class Rectangle extends Shape{
    constructor(l,b){
        super(l,b)
    } 
    getPerimeter(){
        const perimeter= 2* (this.l + this.b);
        console.log(perimeter)
    }
    }
const rectangle = new Rectangle(5,6);
rectangle.getPerimeter();


//level-2.1
class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
}
class Employee extends  Person {
    constructor(name,age,salary){
        super(name,age)
        this.salary=salary;
    }
    getEmployeeDetails(){
        console.log(`Employee Name ${this.name} Age ${this.age}  Salary ${this.salary}`)
    }
}
//extending child class ->grand child class
class Manager extends Person{
    constructor(name,age,salary, department){
        super(name,age,salary)
        this.department=department;
    }
    getDepartment(){
        console.log(`${this.name} has ${this.department} department`)
    }
}
const employee= new Employee("Hricha Sharma",21, 34560, "Management");
employee.getEmployeeDetails()
const manager = new Manager ("Hricha Sharma", 35, 95000, "IT")
manager.getDepartment();

//level-2.2
class Appliance {
    constructor(brand,power){
        this.brand=brand;
        this.power=power;
    }
    showDetails(){
    console.log(`Brand ${this.brand} Power ${this.power}`)
}
}
class WashingMachine extends Appliance{
    constructor(brand,power,capacity){
        super(brand,power)
        this.capacity=capacity;
    }
    showDetails(){
            super.showDetails(`Capacity ${this.capacity}`);
        }
}
const appliance = new Appliance("LG", "3400 Wt","3400 power")
appliance.showDetails()
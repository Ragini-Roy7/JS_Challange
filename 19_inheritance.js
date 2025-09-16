// inheritance-> allows object or class inherit properties & methods from each other 
//parent/base-> child/subclass /derived class
//before es6, js ke andar prototypes use kiya jaata tha for inheritance

//prototype-based inheritance 

// const Student={
//     // type:"unknown",
//     write(){
//     console.log(`${this.name} has written thesis`)
//     }
// };
// //object.create used to create method
// const s1= Object.create(Student);
// // s1.name= "Raagini";
// // s1.age=21;
// s1.read= function (){
//     s1.name= "Raagini";
// s1.age=21;
//     return `${this.name} is passed in selection process. Her age is ${this.age}`;
// };
// // console.log(s1.age)
// s1.write();
// s1.read();


//prototype stores shared prop n methods allowing all instances of obj to access it
// class one {
//     constructor(name) {
//         this.name = name
//     }
//     speaks() {
//         return `my name is ${this.name}`
//     }
// }
// class two extends one {
//     constructor(name) {
//         super(name)
//     }
// }
// const o = new two('rhea')
// console.log(o.speaks());

//parent class
// class Rectangle{
//     constructor(length){
//         this.length=length;
        
//     }
//     area(){
//        return this.length*this.length;

//     }
// }
// class Square extends Rectangle {
//     constructor(length){
//         super(length)
//     }
// }
//create instance
// const rect= new Square(6)
// console.log(rect.area());

class Employees{
    constructor(name,age,designation){
        this.name=name;
        this.age=age;
        this.designation=designation;
    }
    //create methods
    getEmployeeDetails(){
        return this.name, this.age,this.designation
    }
}
class Engineers extends Employees{
    constructor(name,age ,designation){
        super(name,age,designation)
    }
}
//create instances
const employees= new Employees("Rhea Rhea", 21, "SWE Intern");
console.log(employees);

//using prototype
//parent class
function Rectangle(length,breadth){
    this.length=length;
    this.breadth=breadth;
}
Rectangle.prototype.area= function(){
    return this.length*this.breadth;
}
function Square(length){
    Rectangle.call(this, length)
    
}
Square.prototype=Object.create(Rectangle.prototype)
Square.prototype.constructor=Square;

const sq= new Square(5)
console.log(sq.area());
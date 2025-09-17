//parent 
//child relationship 
// function Student(name, cgpa, stream){
//     this.name= name;
//     this.cgpa=cgpa;
//     this.stream=stream;
// }
// //creating function
// Student.prototype.getStdInfo= function(){
//     return `Student name is ${name} has scored ${cgpa} from ${stream}`;
// }
// //creating child constructor 
// function Professor(depart){
//     Student.assignedProject(this, depart);
    
// }
// //inheritance from Student (parent) class
// Professor.prototype= Object.create(Student.prototype);
// Student.prototype.getStdInfo = function(){
//     console.log(this.name , this.cgpa, this.stream )
// }
// const s1= new Student("Shahni",8.9,"MBA");
// s1.getStdInfo()


class PetAnimal{
    constructor(name){
        this.name= name;
    }
    //creating methods
    bark(){
        console.log(this.name + "barks")
    }
}
//inheriting
class Dog extends PetAnimal{
    constructor(name, breed){
        super(name); //calls parent constructor 
        //inheriting name from parent 
        this.breed= breed;
    }
    eats(){
        console.log(this.name + " eats chicken")
    }
}
//creating objects based on class 
// const dog= new Dog("Lily", "German Sphered");
// dog.eats();

//1
class Shape{
    constructor(length,breadth){
        this.length=length;
        this.breadth=breadth;
    }
    //creating methods to calc area
   calcArea(){
    
      console.log("Area :",this.length*this.breadth);
        
    }   
}
class Rectangle extends Shape{
    constructor(length,breadth){
        super(length,breadth); //calls parent constructor
    }
    calcPerimeter(){
        console.log("Perimeter :",2*(this.length+this.breadth));
    }
}
const r1= new Rectangle(4,5);
r1.calcPerimeter();
r1.calcArea();

//2
// class Employee{
//     constructor(name, salary, exp){
//         this.name= name;
//         this.salary=salary;
//         this.exp=exp;
//     }
//     getEmployeeInfo(){
//         console.log(`Name of Employee : ${this.name} salary : ${this.salary} exp ${this.exp}`)
//     }
// }
// class Manager extends Employee{
//     constructor(name,salary,exp, dept){
//         super(name, salary, exp)
//         this.dept=dept
//     }
//     getDepartment(){
//         console.log(`Has department ${this.dept}`)
//     }
// }
// const e1= new Employee("Kajol Kri", 56789, 3);
// e1.getEmployeeInfo();
// const m1= new Manager("Kajol Kri", 56789, 3,"Finance")
// m1.getDepartment();


//3
class Person{
    constructor(name, age){
        this.name= name;
        this.age=age;
      
    }
    //custom class
    info(){
        console.log(`Name ${this.name} Age ${this.age}`)
    }
}
class Employee extends Person{
    constructor(name, age, salary,exp){
        super(name,age)
        this.salary=salary;
        this.exp=exp;
    }
    getEmpInfo(){
        console.log(`Salary ${this.salary} Experience ${this.exp} `)
    }
}
class Manager extends Employee{
    constructor(name,age,salary,exp,dept){
        super(name,age,salary,exp)
        this.dept=dept;
    }
    getManagerInfo(){
        console.log(`Department ${this.dept}`)
    }
}
// const p1= new Person ("Shyam", 26);
// p1.info();
// const emp1= new Employee("Shyam", 26,89000,4);
// emp1.getEmpInfo();
const manager1= new Manager("Shyam", 26,89000,4,"HR");
manager1.info();
manager1.getEmpInfo();
manager1.getManagerInfo();

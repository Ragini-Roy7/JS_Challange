//basic classes based problems 
class Employee{
    constructor(name,age){
        this.name= name;
        this.age=age;
    }
    getDetails() {
        return `Name ${this.name} is ${this.age} years old. `
 }
 greet(){
    return `Hi my name is ${this.name} and I am ${this.age} years old.`
 }
}
const emp= new Employee("Shyam Khatri",19);
const emp2= new Employee("Puja Sharma",22)
console.log(emp.getDetails());
console.log(emp.greet());
console.log(emp2.getDetails());
console.log(emp2.greet());



 
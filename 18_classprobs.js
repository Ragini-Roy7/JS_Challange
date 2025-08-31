//prob 5
class Student{
    constructor(name,age){
        //constructor overloading isn`t supported
        if(typeof name==="object") {
            this.name=name.name || "Unknown";
            this.age=name.age ||0;
        }else {
           this.name = name || "Unknown";
      this.age = age || 0; 
        }
    }
    detailsOfStd(){
        console.log( `Name ${this.name} , Age: ${this.age}`)
    }
}
const s1= new Student({ name: "Riya", age: 25 })
s1.detailsOfStd();
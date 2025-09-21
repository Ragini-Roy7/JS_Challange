// oop- based problems for practice & understanding
//encapsulation
class User {
  #password;
  //private field to be used in getter ,setter
  constructor(userName, password) {
    this.userName = userName;
    this.password = password;
  }
  get password() {
    //return masked password
    return "******";
  }
  set password(pass) {
    this.#password = pass;
    if (pass.length > 6) {
      console.log(`Password :${pass}`);
    } else {
      console.log(`password must be atleast 6 characters`);
    }
  }
}

const pass_manager = new User("Ragini", "ragini123");
pass_manager.password = "12345"; //invalid
console.log(pass_manager.password);

//counter
// class Counter {
//   #count = 0;
//   //private field
//   constructor(buttonId) {
//     this.button = document.getElementById(buttonId);
//     this.setUpListener();
//   }
//   setUpListener() {
//     this.button.addEventListener("click", () => {
//       this.#count++;
//       console.log(`Current Count :`, this.#count);
//       this.button.textContent = `Count : ${this.#count}`;
//     });
//   }
// }
// const counter = new Counter("myButton");
// console.log(counter);

class Student {
  #name;
  #marks;

  constructor(name, marks) {
    this.#name = name;
    this.#marks = marks;
  }

  // Getter for name
  get name() {
    return this.#name;
  }

  // Setter for name
  set name(std_name) {
    this.#name = std_name;
    console.log(`Student name updated to: ${std_name}`);
  }

  // Getter for marks
  get marks() {
    return this.#marks;
  }

  // Setter for marks
  set marks(std_marks) {
    if (std_marks >= 0 && std_marks <= 100) {
      this.#marks = std_marks;
      console.log(`Student marks updated to: ${std_marks}`);
    } else {
      console.log(`Invalid marks: ${std_marks}. Marks must be between 0 and 100.`);
    }
  }
}

const std = new Student("siya", 30);
console.log('other std:', std);

std.name = "priya";
std.marks = 56;

console.log('another std:', std);


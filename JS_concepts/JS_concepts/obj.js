//objects store key value pair
const employee = {
  firstName: ["Ragini", "Shalini", "Medha", "Naha", "Soha"],
  lastName: ["Roy", "Radha", "Srijan", "Pramar", "Dimple"],
  details: {
    city: ["Gurgaon", "Pune", "Chandigarh"],
    country: "India",
  },
  project: {
    proj_name: ["Fullstack Java", "Machine Learining Model", "AI based bot"],
  },
};
// console.log(employee.firstName);
// console.log(employee.lastName);
console.log(employee.details.city);

const projects = employee.project.proj_name.map((name) => ({
  projectName: name,
  country: employee.details.city,
}));
console.log(projects);
const person = {
  100: "stipend",
};
console.log(person["100"]);

const car = {
  type: "xuv",
  model: "xuv 700",
  color: "navy blue",
};
car.type = "toyota";
console.log(car);
console.log(typeof car); //obj
car.wheels = 4;
console.log(car);

function myFunction(n, m) {
  return n * m;
}
console.log(myFunction(10, 2));

//this is called hoisting (js functions are allowed to call before function declaration)
sayHi("shyam");
function sayHi(username) {
  console.log(`Hello ${username} nice to have you`);
}
// sayHi("ragini")
//this is function declaration
//function declaration and function expression are both different terms. function expression mein var ke andar function ko store karate hain

//function expression
const isBoolean = function (n) {
  return typeof n === "boolean";
};
console.log(isBoolean(true));

//callback function:providing a function to another function as an argument
function someFunction(anotherFunc) {
  const name = "ram";
  anotherFunc(name);
}
someFunction(function (name) {
  console.log(name);
});

function helloUser(username, callback) {
  console.log(`Hi ${username} love to see you again`);
  callback();
}
helloUser("shyam", function callback() {
  console.log(` callback`);
});
//ex
// function hi(name, callback){
//   console.log(`Hi i am ${name}`)
//   callback()
// }
// function secFunction(){
//   console.log(`Thanks`);
// }
// hi("ragini",secFunction);
//another way
function kuchhKaam(naam, dusraKaam) {
  console.log(`nothing to display ${naam}`);
  dusraKaam(); //callback func
}
function dusraKaam() {
  console.log(`nothing to show again `);
}
//calling the main function
kuchhKaam("alex", dusraKaam);

//exe-callback
// function showCallFunc(fn){
//   let value=10;
//  fn(value); //passing a function as parameter to showCallFunc
// }
// showCallFunc(function(value){ //passing fn() as argument to showCallFunc
//   console.log(value)
// })
// function cubeRoot(n, squareRoot){
//   squareRoot();
//   return n*n*n;

// }
// function squareRoot(n){
//   return n*n;
// }
// console.log(cubeRoot(6,squareRoot))
// console.log(squareRoot(6))
//scopes
// textMessage= "hello right there"; //local so can`t be accessed globally
// console.log(textMessage)

function sayingHello() {
  let textMessage = "hi javascript"; //local to this scope
  console.log(textMessage);
}
sayingHello();

//functions inside objects
// function greetings() {
//   return `Hi I am ${persons.name} and currently learning ${persons.technology} by myself`;
// }
// let persons = {
//   name: "Riya",
//   technology: "Javascript event handling",
//   greetings,
// };
// console.log(persons.greetings());

const employees = {
  name: ["Radhika", "Geeta", "Rida", "Prakriti"],
  lname: ["Kumari", "Khpra", "Shaha", "Singh"],
  city: ["Patna", "Mumbai", "Bangalore", "Pune"],
  skills: {
    tech: ["Javascript", "Java", "Backend", "SQL"],
  },
  salary: [28000, 32000, 34000, 30000],
  experience: {
    yoe: [0, 1, 2, 2],
  },
  designation: {
    job_profile: ["developer", "architect", "project lead", "developer"],
  },
};
console.log(employees.name);
console.log(employees.skills);
console.log(employees.designation);
console.log(employees.experience.yoe);
//short those who have yoe more than 1 year
// let oneyoe= employees.experience.yoe.filter(year=>year>1)
let oneyoe = employees.experience.yoe
  .map((year, index) => ({
    name: employees.name[index], //each index emp name
    yoe: year, //placeholder year
  }))
  .filter((emp) => emp.yoe > 1);
console.log(oneyoe);
//filter based on salary
// let salaryData = employees.salary
//   .map((sal, index) => ({
//     name: employees.name[index],
//     sal:sal,
//   }))
//   .filter(employee => employee.salary >= 20000);
//   console.log(salaryData)
let salaryData = employees.salary
  .map((sal, index) => ({
    name: employees.name[index],
    sal: sal // use the current salary value, not the whole array
  }))
  .filter(employee => employee.sal >= 20000);

console.log(salaryData);

//city
let emp_city= employees.city
 .map((region,index)=> ({
  name: employees.name[index],
  region:region
 })) 
 .filter(emp=> emp.region=="Pune")
 console.log(emp_city)

//designation
let jobs= employees.designation.job_profile
  .map((jb, index)=> ({
  name:employees.name[index] , //go to each index of employees.name array inside obj
  jb:jb
  }))
  .filter(emp=>emp.jb=="developer")
  console.log(jobs)

//arrow functions shorter way of writing functions
const sum = (a, b) => {
  const res = a + b;
  return res;
};
// console.log(sum(56,78));

const namaste = (Name) => {
  console.log("Namaste " + Name);
};
// namaste("James");

const report = (Name, Majors, Grade) => {
  console.log(`Enter Your Name ${Name}`);
  console.log(`Enter Your Majors ${Majors}`);
  console.log(`Grade achieved ${Grade}`);
};
// report("shalini","business administration",8.9);
// report("Ragini","Computer Applications", 8.99);
// report("Radhe Shyam", "Maths",8.933);

//arrow functions don`t have their own "this" context meaning they refers to nearest global vars or non-arrow objs
// function myCount() {
//     console.log(144);

//     setInterval(function() {
//         this.Count++; //nan ,here this refers to global object kyunki yeh normal func hai arrow func nhi
//         console.log(this.myCount);
//     },1000);
// }
// new myCount();

//exe-vars
let name = "Ragini";
let goal = "developer";
let gender = "female";
let twitterHandle = "RAGINI";
// console.log(name,goal,gender,twitterHandle);

//exe-math
// let firstFavNum= 99;
// let secondFavNum=3;
// console.log(firstFavNum + secondFavNum);
// console.log(firstFavNum*secondFavNum);
// console.log(firstFavNum % secondFavNum);
// console.log(firstFavNum**secondFavNum);
// console.log(firstFavNum/secondFavNum);

//booleans
// let completedTask=true;
// console.log(completedTask);

// let num=22;
// console.log(num + undefined);

// let myString= "javascript development";
// console.log(myString+undefined);

//false,
//  null,
// undefined,
//  0,
// -0,
// nan,
// '', "", ``, (empty quotes)falsy values others truthy val

// function removeFalsy() {
//     let array=[12, 13, null, undefined, NaN, 0, -0, '', "", ``];
//     let res=array.filter(Boolean);
//     console.log(res);
// }
// removeFalsy();

//falsy truthy exe-3
// let isJsProgrammingLang= true;
// console.log(isJsProgrammingLang);
// let isJSHard= false;
// console.log(isJSHard)
let favNumb = 87;
console.log(favNumb + undefined); //NaN

//=== strict equality operator (checks val n type)
//== loose equality op
//!== strict inequality op
let myNum = 564;
let anotherNum = 564;
console.log(myNum === anotherNum); //true

let userScore = "567";
let score = 567;
console.log(userScore === score); //false
//types are diff

userScore == score;
console.log(userScore == score); //true
console.log(userScore !== score); //false

//exe operators-4
// let firstNum= 784;
// let secNum=674;
// console.log(firstNum > secNum);
// console.log(firstNum<secNum);
// console.log(firstNum>= secNum);
// console.log(firstNum===secNum); //false
// console.log(firstNum!==secNum);
// console.log(secNum >firstNum);

//strings
let myName = "Ragini";
let title = "Roy";
console.log(`Hi I am ${myName}`);
console.log(typeof myName); //string
let yourName = new String("Shalini");
console.log(typeof yourName);

//split and join
console.log(myName.split("").join("-"));
//slice
console.log(myName.slice(0, 6));
console.log(myName.slice(-1));
let fruits = ["oragne", "banana", "grapes", "apple"];
console.log(fruits.slice(2));

//exe strings-5
let actorName = "ShahRukh";
let lastName = "Khan";
let fullName = `${actorName} + ${lastName}`;
console.log(fullName);
let uppercase = actorName.toUpperCase();
console.log(uppercase);
let msg = `my fav actor is ${uppercase} and no one else`;
msg += `  his movies are superhits`;
console.log(msg);

//type conversion: explicit conversion by programmer
//coercion is implicit conversion by compiler
let rupees = "1000";
// console.log(typeof rupees); //string
//using parseInt
// let rupees_2=parseInt(rupees);
// console.log(typeof rupees);  //int
// console.log(rupees===rupees_2); //false

//using + op
rupees = +rupees;
console.log(typeof rupees);

//using  constructor
rupees = Number(rupees);
console.log(typeof rupees); //number

//num to string using toString(),toFloat()
rupees = rupees.toString();
console.log(typeof rupees); //num

//conditionals exe-6
// const readline=("readline/promises");
// const rl=readline.createInterface({
//     input:process.stdin,
//     output:process.stdout
// });
// import readline from  "node:readline/promises";
// const rl=readline.createInterface({
//     input:process.stdin,
//     output:process.stdout
// });
// let password= await rl.question("password:");
// if(password.length>8){
//     console.log("welcome to our web app");
// }else if(password.length>=8){
//     console.log("Password is too short.");
// }else if(password.length<=8){
//     console.log("Too long password");
// }else {
//     console.log("Please provide a password");
// }

//switch statement
let userAccName = "rag@1909";
let yourAccName = "rag@1909";
switch (yourAccName) {
  case "rag@1904":
    console.log(`${userAccName} not found here`);
    break;
  case "rag@1909":
    console.log(`${userAccName} found here`);
    break;
  default:
    console.log(`${userAccName} does  not exist`);
}
//exe-7
// import readline from "node:readline/promises";
// let rl=readline.createInterface({
//     input:process.stdin,
//     output:process.stdout
// });
// let fruit= await rl.question("fruit name:");
// switch (fruit) {
//   case "banana":
//     console.log(`${fruit} is good`);
//     break;
//   case "orange":
//     console.log(`i am not fan of orange`);
//     break;
//   case "Apple":
//     console.log("how you like them?");
//     break;
//   default:
//     console.log("never heard of that fruit");
// }
//loops: for ,while,do-while loop
let i = 1;
do {
  let name = "ragini";
  console.log(`my name is ${name} `, i);
  i++;
} while (i <= 10);

//game score
// let totalScore=100;
// do {
//   let userName= "Chandini";
//   console.log(`${userName} your score is ${totalScore}`,i);
//   i++;
// } while (i<=200);
//200 is the wining score

//for nested loop
for (let index = 1; index <= 10; index++) {
  for (let jindex = 1; jindex <= 5; jindex++) {
    console.log(`val is `, index);
    console.log(`number of times loop continues ${index * jindex}`);
  }
}

//star pattern
// for(let i=1;i<=10;i++) {  //rows
//   let rows= "";
//   for(let j=1;j<=i;j++) { //cols
//   rows+="*";
//   }
//    console.log(rows);
// }
// for(let i=1;i<=5;i++){
//   let rows="";
//   for(let j=1;j>=i;j--){
//     rows+="*";
//   }
//   console.log(rows);
// }
// for(let i=5;i>=1;i--) { //row kitna hoga
//   let r="";
//   for(let j=5;j>=i;j--) { //star kitna print hoga
//     r+="*"; //star++
//   }
//   console.log(r);
// }
for (let i = 5; i >= 1; i--) {
  let r = "";
  for (let j = 1; j <= i; j++) {
    r += "&";
  }
  console.log(r);
}
//     *
//    * *
//   * * *
//  * * * *
// * * * * *
//no of spaces , at n=1 , star=*
//5-1=4 spaces
// let n = 5;
// for (let i = 1; i <= 5; i++) {
//   let row = "";
//   for (let s = 1; s < n - i; s++) {
//     row += " ";
//   }
//   for (let j = 1; j <= i; j++) {
//     row += "* "; //row
//   }
//   console.log(row);
// }

let N=5;
for(let i=5;i>=1;i--){
  let row="";
  //no of spaces
  for(let s=1;s<N-i;s++){
    row+=" ";
  }
  for(let j=1;j<=i;j++){
    row+="  *";
  }
  console.log(row);
}
//logical op
let consumerName="Radhika"
let spent=1200;
console.log(`Total price ${spent}`);
let isMember=true;
let discountedPrice=(spent/100*20);
console.log(discountedPrice);
if(spent>=1000 && isMember){
  console.log(`${consumerName}, Your Discounted price is ${discountedPrice}`);
  console.log(`Price to pay ${spent-discountedPrice}`);
}

//A college decides eligibility for a scholarship based on these rules:
// A student must have at least 80% marks OR have won a national-level competition.
// The student must not have any pending disciplinary action.
let studentAttendance=80;
let wonNationalAwards=true;
let pendingBacklog=false;
if((studentAttendance>=80 || pendingBacklog) && wonNationalAwards){
  console.log(`student is eligible for scholarship`);
}else {
  console.log("try next time");
}
//due to operator precedence, uses (), && is evaluated firstly
let password="ragini_webapps";
if(password.length>=9 && password.includes("rani")){
  console.log("Loggeed in successfull");
}else {
  console.log("invalid password");
}
//array is list-like object
let studentEnrolled= ["ragini","shalini","megha", "prakriti"];
console.log(studentEnrolled[1]); 
console.log(studentEnrolled.length)
console.log(studentEnrolled.indexOf("meha"))
console.log(studentEnrolled.includes("shalini")) //true
//using new keyword to create arrays
let arr=[900,244,567,466,583]; //5
let arr2= new Array(563,535,678,789)  //js is treating arr2 elements as single arr so // 5+1= 6 array elements
console.log(arr.push(arr2));
//push method returns new length of array

let js_version=["es4","es5"];
let js_new_version=["es6"];
console.log(js_version.push(js_new_version));
//es4,es5,es6 , push adds at end so len=3
// let num=[2,4,6];
// num.forEach(num=>console.log(num*2));
//learn about arr methods (map,filter,reduce)
//The map() method is used for creating a new array from an existing one, applying a function to each one of the elements of the first array.
const n=[10,20,30,40,50,60];
const doubled= n.map(item=> item*2);
console.log(doubled)
let fruit=["banana", "apple","cherry"];
if(fruit.includes("banana")){
  // return true;
  console.log("found")
}else {
  // return false;
  console.log("not found");
}
//filter is like map method except callback function , return true to keep else false kisi condition ke basis par filter karna
// const userNum=49;
// for(let i=2;i<=Math.sqrt(userNum);i++){
//   if(userNum % i ===0) {
//     console.log(`prime `);
//   }
//   else {
//     console.log(`not prime`)
//   }
// }
function isPrime(userNum){
 if(userNum<=1) return false;
for(let i=2;i<=Math.sqrt(userNum);i++){
  //2 se given num tk ka square root tk iteration chalega kyunki iss bich bahut num hai agar bahuto se divide ho gya toh prime nhi ho sakta 
  if(userNum % i===0)
    return false;
}
  return true;

}
console.log(isPrime(49))
console.log(isPrime(56))
console.log(isPrime(78))
console.log(isPrime(3))

// function findFact(n){
//   if(n===0 || n===1){ //base case
//     return false;
//   }
//   for(let i=2;i<=n;i++){
//     let fact= n*n-i;
//     //if n=5; 5*5-i=1-> 5*4, 5*5-i=2-> 5*3, 5*5-i=3-> 5*2 and so on
//     console.log(fact);
//   }
// }
// console.log(findFact(4));
let num=4;
let fact=1;
if(num===0 || num===1){
 fact=1;
}
else{ 
for(let i=2;i<=num;i++){
    fact *=i;
}
}
console.log(`${fact}`);
//tricky -imp
const person={
  name:"prakash",
  greet:function(){
    console.log(this.name);
  },
}; 
const anotherPerson= {
  name:"kumar",
  greet: person.greet
}; 
const greetFunction=anotherPerson.greet;

person.greet();
anotherPerson.greet();
// greetFunction();
//filter method -01
let Num=[12,14,45,75,35,57,54,67]
const evenNum=Num.filter(item=>item % 2===0);
console.log(evenNum); //12,14,54

//filter method-02
let words=["anonymous", "javascript","callback","hoisting","currying","callback_hell", "dom","bom","ecmascript","coercion","explicit_conversion","ragini"];
let small_words= words.filter(item=> item.length<5);
console.log(`words with smaller length ${small_words}`);

//filter methods-03
let givenNum= [4,12,8,24,28,32,36,40];
const numbs= givenNum.filter(item=> item>10);
console.log(numbs);

//filter method-04
// let val=[undefined,0,-0,null,"javascript",NaN]
// let falsy= [undefined,-0,null,NaN]
//  falsy= val.filter(item => item===falsy)
// console.log(val);
// function isFalsy(){
//   let val=[undefined,0,-0,null,NaN,"123",true,false,'',""]
//   let falsy=[undefined,0,-0,null,NaN,false,'',""]
//   let res= val.filter(item => item ===falsy);
// //  let res=val.filter(val=> val===falsy);
//   console.log(res);
// }
// console.log(isFalsy());
//this is evaluating to :It compares each item in val to the entire array falsy using ===.
// Since item is a primitive (like 0, null, etc.) and falsy is an array, the comparison always returns false.

// So .filter() returns an empty array [].-

const val= [undefined,true,false,"",'',0,-0,NaN,null,undefined,[],{}];
const truthyVal= val.filter(Boolean);
console.log(truthyVal)
//in-built logic for evaluating truthy falsy val

//filter method-5
function isPrimeNum(n){
  if(n>2){
    return false;
  }
  for(let i=2;i<= Math.sqrt(n);i++){
    if(n %2==0)
      return false;
  }
  return true;
}
console.log(isPrime(5))

//convert it into filter method style
function isPrimeNumber(n){
  if(n<2) return false;
  for(let i=2;i<=Math.sqrt(n);i++){
    if(n % i ==0)
      return false; //if div bahuto se ho then woh prime nhi ho sakta that`s composite
  }
  return true;
}
function primeNum(n){
   let num = [56, 45, 12, 13, 17, 19, 23, 26, 28];
  let prime= num.filter(item=>isPrimeNumber(item));
  return prime;
}
console.log(primeNum());
//-6
let student= [{name:"alia", age:13},
  {name:"shalia",age:12},
  {name: "shama",age:13},
  {name:"prakriti",age:15},
  {name:"riya",age:18},
  {name:"pratiksha",age:19}
]
//array of objects
const adults= student.filter((item)=>item.age>=18);
console.log(adults);

//-7
let numbers=[1,2,2,3,4,4,5]
const uniqueNumbers = numbers.filter((value, index, self) => {
  return self.indexOf(value) === index;
});

console.log(uniqueNumbers);
//self.indexOf(value) gives the first index of that value .If the current index matches the first index, it's the first occurrence.Later duplicates get filtered out.
//map() method:- iterates through each element of the original array and creates new array by applying callback to each element of original array.result of callback is added to array.
let movies=[
  {title: "Avengers",year:2019},
  {title:"Intersteller",year:2014},
  {title:"Mary Kom", year:2015},
  {title:"Taarien zameen par", year:2012}
]
//array of objects
let updatedMovies= movies.map(val=>val.year>2012)
console.log(updatedMovies);

//practice probs on higher order functions
const employees=[
  {name:"Amit", salary:25000, performance: "excellent"},
  {name:"Ravi", salary:30000, performance:"good"},
  {name:"Priya", salary:20000, performance:"poor"},
  {name:"Neha", salary:28000,performance:"good"}
];
// const excellentEmp= employees.map(item=> item.performance== "excellent" )
let excellentPerformers=[];
let updatedSalary=[];
let totalPayout=[];
// employees.forEach((employees=> {
//   if(employees.performance==="excellent" ||  employees.performance==="good"){
//     excellentPerformers.push(employees);
//   }

employees.forEach(employee => {
  if (employee.performance === "excellent" || employee.performance === "good") {
    excellentPerformers.push(employee);
    updatedSalary.push({
      name: employee.name,
      oldSalary: employee.salary,
      newSalary: employee.salary + (employee.salary * 0.10),
      totalPayout: employee.salary + (employee.salary + (employee.salary * 0.10))
    });
  }
});
console.log(excellentPerformers)
console.log(updatedSalary)
console.log(totalPayout)
//prob 2
let students= [
  {name:"Rahul", age:20,score:85},
  {name:"Anita", age:22,score:92},
  {name:"Karan", age:19, score:78},
  {name:"Pooja", age:21,score:95},
  {name:"Meena", age:20,score:88}
];
let new_students= students.filter(item=>item.score>85)
console.log(new_students);
let their_ages= new_students.map(item=>item.age)
console.log(their_ages);
// Using reduce to calculate average age
let avg_age = their_ages.reduce((acc, age) => {
  return acc + age;
}, 0) / their_ages.length;

console.log(avg_age); 
//prob 3
const nestedNumbers=[[4,6,8], [3,5], [9,10,2]];
const nums= nestedNumbers.reduce((acc,val)=> {
  return acc.concat(val);
  //each [] initial val + acc(total) is getting concatenated to single array element
},[]); 
console.log(nums)
//reduce-> accumulator=total running , val=current value and [] is initial value 

const orders=[
  {id:1, items:[{price:200}, {price:150}]},
  {id:2,items:[{price:300},{price:120}]},
  {id:3,items:[{price:50}]}
];
//use flat map
// const total=orders.flatMap(orders=>orders.items.map(item=>item.price))
// console.log(total)
// orders.forEach(item=>{
//   console.log(item.price);
// });

let array = ["stri@ng", "some@thing", "java@script", "fun@ction"];

array.forEach((str, index) => {
  arr[index] = str.replace(/@/g, "");
});

console.log(array); 

//to transform array element, map is used
// let updatedScore= totalScores.filter(item=> item.isFloat(totalScores))
//  updatedScore= slice()
// console.log(totalScores)
function isFloat(n){
 return Number(n) === n && n % 1 !== 0;
}
let totalScores= [146.16,234,122.3,124.56,255]
let intScores=totalScores.filter(n=> !isFloat(n))
console.log(intScores)


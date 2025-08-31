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
// console.log(emp.getDetails());
// console.log(emp.greet());
// console.log(emp2.getDetails());
// console.log(emp2.greet());

//prob 3
class Car{
    //default color set
    constructor(brand,color="black"){
        this.brand=brand;
        this.color= color;
    }
    //set methods
    getProperties(){
        return `Car ${this.brand} is having ${this.color} color`
    }
}
//create instances
const car= new Car("Sizuki", "Red")
const car2= new Car("Mahindra")
// console.log(car.getProperties());
// console.log(car2.getProperties());


//prob 4
const readline= require("readline");
class BankAccount{
    constructor(owner,balance=0.0){
        this.owner=owner;
        this.balance=balance;
    }
    //set methods
deposit(amount) {
    if (amount>0){
        this.balance+= amount;
        console.log(`Deposited amount is ${amount}. New Account balance is ${this.balance}`)
    }
}
withdraw(amount){
    if(amount<= this.balance){
        this.balance-= amount;
        console.log( `Withdawl amount is ${amount}. Updated balance is ${this.balance}`)
    }
    else {
        console.log(`Insufficient balance.`)
    }
}
//show
showTransactions(){

}
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question("Enter owner name :", (name)=> {
    //create instances
    const account= new BankAccount(name);
    rl.question("Enter amount to deposit:", (input)=> {
        const amount= parseFloat(input);
        account.deposit(amount);

    rl.question("Enter amount for withdrawl:", (input)=> {
        const amount= parseFloat(input);
        account.withdraw(amount);
        rl.close();
    })
    })
});

// encapsulation->wrapping data & methods together
// #-> to define private fields 
//getters->allow controlled access to private fields
//get-> to read private property
//setters-> to update with validations

class Student{
    #marks; //private property
    constructor(name, marks){
        this.name= name;
        this.marks=marks;
    }
    //getter
    get marks(){
        return this.#marks;
    }
    //setter
    set marks(newMarks){
        if(newMarks>=0 && newMarks<=100){
            this.#marks = newMarks;
        }else {
            console.log("Invalid marks.!")
        }
    }
}
//create instances based on class
const student = new Student("Shalini",78)
console.log(student.marks); //78
student.marks=98;
console.log(student.marks) //updates

class Bank{
    #balance; //private field 
    constructor(accNum, balance){
        this.accNum= accNum;
        this.#balance= balance;
    }
    //getter
    // get deposit(){
    //   return  this.#deposit;
    // }
    get balance(){
        return this.#balance;
    }
    set deposit(amount){
     if (amount>0){
        this.#balance+= amount;
        console.log(`Deposited balance:${amount} `)
     }else {
        console.log(`Invalid Deposit Amount`)
     }
    }
}
const bank = new Bank (1234567, 56000)
bank.balance= 57000;
console.log(`Initial Balance:`,bank.balance);
bank.deposit= 1000;
console.log(`Updated Balance:`,bank.balance); //updates the value by +1000 

class ATM{
    // private fields
    #balance;
    constructor(account_num, account_type, user_name,balance){
        this.account_num=account_num;
        this.account_type= account_type;
        this.user_name= user_name;
        this.#balance= balance;
    }
    //getter 
    get balance(){
        return this.#balance;
    }
    //only positive amounts to be added
    set deposit(amount){
        if(amount>0){
            this.#balance += amount;
            //accessing private field , balance
            console.log(`Amount Deposited ${amount}`)
        }else {
            console.log(`Invalid Amount Deposited`)
        }
    }
    set withdraw(amount){
        if(amount>0 && amount<= this.#balance){
            this.#balance-= amount;
            console.log(`Amount Withdrawn ${amount}`)
        }else {
          //no withdrawl 
            console.log(`Current Balance ${this.#balance} Insufficient`)
        }
    }
}
//create objects 
const atm_user = new ATM(456789,"Savings","Shyam Kanouj" )
atm_user.balance= 67890;

console.log(atm_user.balance);
atm_user.deposit= 10000;

console.log(atm_user.deposit);
atm_user.withdraw=8000;
console.log(atm_user.withdraw);

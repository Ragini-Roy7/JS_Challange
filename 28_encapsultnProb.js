class ATM {
    #balance;
    #history;
    constructor(acc_num, acc_type, balance) {
        this.acc_num = acc_num;
        this.acc_type = acc_type;
        this.#balance = balance; //will be using this field for getter and setter
        this.#history = []; //to track transaction record
    }
    get acc_balance() {
        return this.#balance;
    }
    set acc_balance(amount) {
        if (this.#balance > 0) {
            this.#balance += amount;
            console.log(`Amount Deposited: ${amount}`);
            this.#history.push({
                type: "Deposit",
                amount: amount,
                date: new Date().toLocaleString(),
            });
        } else if (amount <= 0) {
            console.log(`Invalid Deposit Amount `);
        } else {
            console.log(`Deposit Positive Balance`);
        }
    }
    get acc_deduction() {
        return this.#balance;
    }
    set acc_deduction(amount) {
        if (amount >= 0 && amount <= this.#balance) {
            this.#balance -= amount;
            console.log(`Balance Deducted : ${amount}`);
            this.#history.push({
                type: "Withdrawn",
                amount: amount,
                date: new Date().toLocaleString(),
            });
        }
    }
    get history() {
        // if(this.#history.length>0){
        //     return this.#history;
        // }else {
        //     return "nothing in history"
        // }
        return this.#history.length > 0 ? this.#history : "Nothing in history";
    }
}
const atm = new ATM(1222455, "Fixed Deposit", 12000);
console.log("Current Balance:", atm.acc_balance);

atm.acc_balance = 22000;
atm.acc_deduction = 12000;

console.log("Final Balance:", atm.acc_balance);
console.log("Account History:", atm.history);

class Bank {
    #balance;
    constructor(accNum, accType, holderName, balance) {
        this.accNum = accNum;
        this.accType = accType;
        this.holderName = holderName;
        this.#balance = balance;
    }
    get balance() {
        return this.#balance;
    }

    set deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
            console.log(`Deposited: ${amount}`);
        } else {
            console.log("Please enter a positive amount");
        }
    }
    set withdraw(amount) {
        if (amount > 0 && amount <= this.#balance) {
            this.#balance -= amount;
            console.log(`Withdrawn: ${amount}`);
        } else {
            console.log("Insufficient funds or invalid amount");
        }
    }
}

const ragini = new Bank(1235666, "Savings", "Ragini Roy", 5000);
//balance is private field, we need to use private field with objects
console.log("Initial Balance:", ragini.balance);

ragini.deposit = 2000;
console.log("After Deposit:", ragini.balance);

ragini.withdraw = 1000;
console.log("After Withdraw:", ragini.balance);

//level-1.2
class Student {
    #marks;
    constructor(name, marks) {
        this.name = name;
        this.#marks = marks;
    }
    get marks() {
        return this.#marks;
    }
    set marks(newMarks) {
        this.#marks = newMarks;
        if (newMarks > 0 && newMarks<= 100) {
            console.log(`${newMarks}`);
        } else {
            console.log(`Invalid`);
        }
    }
}
const student1= new Student("Kajal Chuadhary", 78);
console.log(`Marks Obtained`, student1.marks);
student1.marks=98;
console.log(`Marks obtained:`, student1.marks);

class ATM{
    #balance;
    #history;
    constructor(acc_num, acc_type, balance){
        this.acc_num=acc_num;
        this.acc_type= acc_type;
        this.#balance= balance; //will be using this field for getter and setter 
        this.#history=[] ; //to track transaction record
    }
    get acc_balance(){
        return this.#balance;
    }
    set acc_balance(amount){
        if(this.#balance>0 ){
            this.#balance+= amount;
            console.log(`Amount Deposited: ${amount}`);
            this.#history.push({
            type:"Deposit", 
            amount :amount, 
            date: new Date().toLocaleString()
        })
        } 
        else if(amount<=0){
           console.log(`Invalid Deposit Amount `)
        }else {
            console.log(`Deposit Positive Balance`)
        }
    }
    get acc_deduction(){
        return this.#balance;
    }
    set acc_deduction(amount){
        if(amount>=0 && amount<=this.#balance){
            this.#balance-= amount;
            console.log(`Balance Deducted : ${amount}`);
            this.#history.push({
                type:"Withdrawn",
                amount:amount,
                date: new Date().toLocaleString()
            })
        }

    }
    get history(){
        // if(this.#history.length>0){
        //     return this.#history;
        // }else {
        //     return "nothing in history"
        // }
        return this.#history.length > 0 ? this.#history : "Nothing in history";
    }
}
const atm= new ATM(1222455,"Fixed Deposit",12000);
console.log("Current Balance:", atm.acc_balance);

atm.acc_balance = 22000;
atm.acc_deduction = 12000;

console.log("Final Balance:", atm.acc_balance);
console.log("Account History:", atm.history);
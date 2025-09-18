class ATM{
    #balance;
    #transactionHistory;
    constructor(account_num,account_type, user_name,balance){
        this.account_num=account_num;
        this.account_type= account_type;
        this.user_name= user_name;
        this.#balance= balance;
        this.#transactionHistory= [];
    }
    get balance(){
        return this.#balance;
    }
    set deposit(amount){
        if(amount>0){
            this.#balance+=amount;
            console.log(`Deposited : ${amount}`)

        }else {
            console.log(`Invalid Deposit`)
        }
         this.#transactionHistory.push(`Deposited: ${amount}`); 
    }
    set withdraw(amount){
        if(amount>0 && amount<=this.#balance){ //accessing private field 
            this.#balance-= amount;
            console.log(`Balance: ${amount}`)
        }else {
            console.log(`${this.#balance} Insufficient For Withdrawl`)
        }
        this.#transactionHistory.push(`Withdrawn: ${amount}`)
    }
    //getter for history
    get transactionHistory(){
        if(this.#transactionHistory.length >0){
            return this.#transactionHistory;
        }else {
        return "nothing in history"
        }
    }

}
const atm= new ATM(45677,"Savings", "Ragini Roy", 45000)
console.log(`Current Balance :`,atm.balance);

atm.deposit= 22000;
atm.withdraw= 12000;
console.log(`Amount Deposited :`,atm.balance);
console.log(`After Withdrawn :`, atm.balance);
console.log(`Balance after Deposit & Withdraw :`, atm.balance)
console.log(`Account History:`, atm.transactionHistory);


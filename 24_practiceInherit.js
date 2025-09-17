class  BankAccount{
    constructor(accNum, balance){
        this.accNum=accNum;
        this.balance=balance;
    }
}
class SavingsAccount extends BankAccount{
    constructor(accNum, balance,interest){
        super(accNum,balance)
        this.interest= interest;
    }
    getInterest(){
        const interstEarned = (this.balance * this.interest)/100;
        console.log (`Interest leived is ${this.interest} Account Number ${this.accNum} Balance ${this.balance}  `);
        console.log(`Interest earned`,interstEarned);
        // console.log(`Interest leived is ${this.interest}* ${this.balance}/100`);
        
    }
}
class CurrentAccount extends SavingsAccount{
     constructor(accNum, balance, interest,overDraft){
        super(accNum,balance,interest)
            this.overDraft= overDraft;
     }
     getOverDraftLimit(){
        console.log(`Overdraft Limit ${this.overDraft}`)
     }
}
const savingAcc= new SavingsAccount(456788, 30000,3)
savingAcc.getInterest();
const currAcc = new CurrentAccount (456788, 30000,3,28000);
currAcc.getOverDraftLimit();

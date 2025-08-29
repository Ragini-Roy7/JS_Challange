class BankAccount {
    constructor(owner, balance, accType) {
        this.owner = owner;
        this.balance = balance;
        this.accType = accType;
    }

    // Deposit money into account
    depositBalance(amount) {
        this.balance += amount;
        console.log(` ${this.owner} deposited ₹${amount}. Updated Balance: ₹${this.balance}`);
    }

    // Withdraw money from account
    withDrawBalance(amount) {
        if (amount > this.balance) {
            console.log(` Insufficient Funds for ${this.owner}!`);
        } else {
            this.balance -= amount;
            console.log(` ${this.owner} withdrew ₹${amount}. Remaining Balance: ₹${this.balance}`);
        }
    }

    // Show account details for one user
    showDetails() {
        console.log(`👤 Owner: ${this.owner} | 💰 Balance: ₹${this.balance} | 🏦 Account Type: ${this.accType}`);
    }

    // Static method to return bank name
    static bankName() {
        return "Axis Bank";
    }
}

// Customer data
const customer = [
    { name: "Ragini Roy", balance: 56000, accType: "Saving Account" },
    { name: "Shyam Krishna", balance: 67000, accType: "Joint Account" },
    { name: "Tripti Chhaya", balance: 678900, accType: "Saving Account" },
    { name: "Balaji Thakur", balance: 120000, accType: "Joint Account" },
    { name: "Diana Dixit", balance: 230000, accType: "Saving Account" },
    { name: "Arthav Jha", balance: 5678900, accType: "Joint Account" },
    { name: "Aaarti Kriti", balance: 340000, accType: "Saving Account" }
];

// Dynamically creating BankAccount objects
const accounts = customer.map(cust => new BankAccount(cust.name, cust.balance, cust.accType));

// Show bank name
console.log(`🏦 Welcome to ${BankAccount.bankName()}`);
console.log("-------------------------------------------------");

// Perform some transactions
accounts[0].depositBalance(10000);   // Ragini deposits ₹10,000
accounts[1].withDrawBalance(2000);   // Shyam withdraws ₹2,000
accounts[2].withDrawBalance(500000); // Tripti withdraws ₹5,00,000
accounts[4].depositBalance(50000);   // Diana deposits ₹50,000

console.log("-------------------------------------------------");

// Show all account details
console.log("📌 ALL CUSTOMER ACCOUNT DETAILS:");
accounts.forEach(acc => acc.showDetails());

// defining bank object with basic bank details and an empty customers array
let bank = {
    bankName: "Axis Bank",
    IFSCcode: "AXIS0123456",
    branch: "Koramangala",
    city: "Bangalore",
    state: "Karnataka",
    customers: []
};

// defining a customer object with account details and transaction methods
let customer1 = {
    transactionHistory: [], // stores all transaction records
    accountNumber: 101,
    custName: "Laila",
    balance: 55000,
    accountType: "savings",

    // method to deposit money and record the transaction
    deposit: function(amount) {
        this.balance += amount;
        let transaction = createTransaction("deposit", amount, this.balance); // create deposit record
        this.transactionHistory.push(transaction); // save it to history
        return amount;
    },

    // method to withdraw money and record the transaction
    withdraw: function(amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
            let transaction = createTransaction("Withdraw", amount, this.balance); // create successful withdrawal
            this.transactionHistory.push(transaction);
            return this.balance;
        } else {
            console.log("No sufficient balance"); // insufficient balance message
            let transaction = createTransaction("Failed withdrawal", amount, this.balance); // create failed transaction
            this.transactionHistory.push(transaction);
            return null;
        }
    },

    // method to display account details
    showDetails: function() {
        console.log(`Account: ${this.accountNumber}, Name: ${this.custName}, Balance: ₹${this.balance}`);
    }
};

// creating a new date instance for transaction timestamp
let date = new Date();

// helper function to create a transaction record
function createTransaction(typeFunc, amount, balanceAfter) {
    return {
        type: typeFunc, // transaction type (deposit, withdraw, failed)
        amount: amount, // amount involved in the transaction
        balance: balanceAfter, // balance after transaction
        timeTransacion: date.toLocaleTimeString(), // time of transaction
        dateTransaction: date.toLocaleDateString('en-GB') // date of transaction
    };
}

function createTransaction(typeFunc, amount, balanceAfter) {
    let date = new Date(); // get current time for each transaction
    return {
        type: typeFunc,
        amount: amount,
        balance: balanceAfter,
        timeTransacion: date.toLocaleTimeString(),
        dateTransaction: date.toLocaleDateString('en-GB')
    };
}


// adding the customer to the bank's customer list
bank.customers.push(customer1);

// accessing the customer from the bank for testing
let cust1 = bank.customers[0];

// performing a deposit and withdrawal
cust1.deposit(1000);
cust1.withdraw(10000);

// showing the transaction history in console
console.log(cust1.transactionHistory);

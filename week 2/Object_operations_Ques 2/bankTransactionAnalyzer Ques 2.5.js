/* ASSIGNMENT 2.5: Bank Transaction Analyzer */

// Test data
const transactions = [
  { id: 1, type: "credit", amount: 5000 },
  { id: 2, type: "debit", amount: 2000 },
  { id: 3, type: "credit", amount: 10000 },
  { id: 4, type: "debit", amount: 3000 }
]

//filter() all credit transactions
const creditTransactions=transactions.filter(transaction=>transaction.type==="credit")
console.log("Credit Transactions: ",creditTransactions)//Credit transactions details

//map() extract only transaction amounts
const transactionAmounts=transactions.map(transaction=>transaction.amount)
console.log("Transaction Amounts: ",transactionAmounts)//Amounts

//reduce() calculate final account balance
const finalBalance=transactions.reduce((balance,transaction)=>{
  if(transaction.type==="credit")
    return balance+transaction.amount
  else
    return balance-transaction.amount
}, 0)
console.log("Final Account Balance: ",finalBalance)//Final balance after credits and debits

//find() first debit transaction
const firstDebit=transactions.find(transaction=>transaction.type==="debit")
console.log("First Debit Transaction: ",firstDebit)//First debit

//findIndex() transaction with amount 10000
const indexOf10000=transactions.findIndex(transaction=>transaction.amount===10000)
console.log("Index of transaction with amount 10000: ",indexOf10000)//10000 index
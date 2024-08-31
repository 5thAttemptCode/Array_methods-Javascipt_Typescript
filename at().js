// at() - Returns the element at a specified index, allowing for negative indexing.
// Scenario: Fx in  a banking system where users can view their transaction history. To quickly
// access the most recent transaction or a specific transaction from the end of the list, the at() method
// can be used. This is especially useful if users want to check transactions relative to the end of the
// history, such as their last transaction or the second-to-last transaction.


// Array representing a user's transaction history
let transactions = [
  { id: 1, amount: -50, type: 'Debit', description: 'Grocery Shopping' },
  { id: 2, amount: 1000, type: 'Credit', description: 'Salary Deposit' },
  { id: 3, amount: -200, type: 'Debit', description: 'Online Shopping' },
  { id: 4, amount: -150, type: 'Debit', description: 'Restaurant Bill' },
  { id: 5, amount: -75, type: 'Debit', description: 'Gas Station' }
]

// Function to get a transaction from the end of the list using at()
function getRecentTransaction(positionFromEnd) {
  let transaction = transactions.at(-positionFromEnd)
  if (transaction) {
    console.log(`Recent Transaction: ${transaction.description}, Amount: ${transaction.amount}, Type: ${transaction.type}`)
  } else {
    console.log("Invalid transaction position")
  }
}

// Access the most recent transaction
getRecentTransaction(1) // Should return the last transaction

// Access the second-to-last transaction
getRecentTransaction(2) // Should return the second-to-last transaction
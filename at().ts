// at() - Returns the element at a specified index, allowing for negative indexing.
// Scenario: Fx in  a banking system where users can view their transaction history. To quickly
// access the most recent transaction or a specific transaction from the end of the list, the at() method
// can be used. This is especially useful if users want to check transactions relative to the end of the
// history, such as their last transaction or the second-to-last transaction.


// Define an interface for a transaction
interface Transaction {
  id: number
  amount: number
  type: 'Debit' | 'Credit'
  description: string
}

// Array representing a user's transaction history
const transactions: Transaction[] = [
  { id: 1, amount: -50, type: 'Debit', description: 'Grocery Shopping' },
  { id: 2, amount: 1000, type: 'Credit', description: 'Salary Deposit' },
  { id: 3, amount: -200, type: 'Debit', description: 'Online Shopping' },
  { id: 4, amount: -150, type: 'Debit', description: 'Restaurant Bill' },
  { id: 5, amount: -75, type: 'Debit', description: 'Gas Station' }
]

// Function to get a transaction from the end of the list using at()
function getRecentTransaction(positionFromEnd: number): void {
  const transaction = transactions.at(-positionFromEnd)
  if (transaction) {
    console.log(`Recent Transaction: ${transaction.description}, Amount: ${transaction.amount}, Type: ${transaction.type}`)
  } else {
    console.log("Invalid transaction position")
  }
}

// Example usage:
getRecentTransaction(1) // Get the last transaction
getRecentTransaction(2) // Get the second-to-last transaction

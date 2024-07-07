// shift() - Removes the first element and returns it.
// Scenario: Its good to handle customers in a first-come, first-served manner by processing the first customer in the queue.
// Fx in customer support system, calling at town hall where they put you on hold etc etc

let customerQueue = [
  "Customer 1: Inquiry about shipping",
  "Customer 2: Issue with payment",
  "Customer 3: Technical support for MatePad T 10s",
  "Customer 4: Request for return",
  "Customer 5: General inquiry"
]

const firstCustomer = customerQueue.shift()

if (firstCustomer) {
  console.log(`Processing: ${firstCustomer}`)
  // Example action: Assign to support agent, log the inquiry, etc.
} else {
  console.log("The customer queue is empty.")
}

console.log("Updated customer queue:", customerQueue)

// Result:
// Processing: Customer 1: Inquiry about shipping
// Updated customer queue: [
  // "Customer 2: Issue with payment",
  // "Customer 3: Technical support for MatePad T 10s",
  // "Customer 4: Request for return",
  // "Customer 5: General inquiry"
// ]
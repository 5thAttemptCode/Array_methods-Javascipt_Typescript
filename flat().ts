// flat() - Flattens nested arrays into a single array.
// Scenario: An e-commerce manages its online orders. Orders are recorded in nested arrays by day, 
// and arrays need to be flatten to get a single list of all orders.


const ordersByDay: string[][] = [
  ['order1', 'order2', 'order3'], // Day 1
  ['order4', 'order5'],           // Day 2
  ['order6', 'order7', 'order8']  // Day 3
]

const allOrders: string[] = ordersByDay.flat()

console.log("All orders:", allOrders)

// Result
// "All orders: ['order1', 'order2', 'order3', 'order4', 'order5', 'order6', 'order7', 'order8']"
// sort() - Sorts the array in place.
// Scenario: Sort the customer orders by date, from the most recent to the oldest, to process the newest orders first.


type Order = {
  id: number;
  customer: string;
  date: string;
}

const orders: Order[] = [
  { id: 1, customer: "Mia", date: "2023-06-21" },
  { id: 2, customer: "Henry", date: "2023-06-19" },
  { id: 3, customer: "Elias", date: "2023-06-23" },
  { id: 4, customer: "Dorte", date: "2023-06-20" },
  { id: 5, customer: "Dilek", date: "2023-06-22" }
]

const sortedOrders: Order[] = orders.slice().sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

console.log("Orders sorted by date (from most recent to oldest):")
sortedOrders.forEach((order: Order, index: number) => {
  console.log(`${index + 1}. Order ID: ${order.id}, Customer: ${order.customer}, Date: ${order.date}`)
})

// Result:
// Orders sorted by date (from most recent to oldest)
// 1. Order ID: 3, Customer: Elias, Date: 2023-06-23
// 2. Order ID: 5, Customer: Dilek, Date: 2023-06-22
// 3. Order ID: 1, Customer: Mia, Date: 2023-06-21
// 4. Order ID: 4, Customer: Dorte, Date: 2023-06-20
// 5. Order ID: 2, Customer: Henry, Date: 2023-06-19
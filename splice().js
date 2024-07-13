// splice() - Adds/removes elements from an array.
// Scenario: Order 3 in an array of order happens to be faulty. It has to be removed.


const orders = [
  { id: 1, customer: "Mia", date: "2023-06-21" },
  { id: 2, customer: "Henry", date: "2023-06-19" },
  { id: 3, customer: "Elias", date: "2023-06-23" },
  { id: 4, customer: "Dorte", date: "2023-06-20" },
  { id: 5, customer: "Dilek", date: "2023-06-22" }
]

const faultyOrderIndex = orders.findIndex(order => order.id === 3)

if (faultyOrderIndex !== -1) {
  const removedOrders = orders.splice(faultyOrderIndex, 1, { id: 6, customer: "Elias", date: "2023-06-24" })
  console.log("Removed order:", removedOrders[0])
} else {
  console.log("Order not found.")
}

console.log("Updated orders list:")
orders.forEach(order => {
  console.log(`Order ID: ${order.id}, Customer: ${order.customer}, Date: ${order.date}`)
})

// Result:
// Removed order: { id: 3, customer: "Elias", date: "2023-06-23" }
// Updated orders list:
// Order ID: 1, Customer: Mia, Date: 2023-06-21
// Order ID: 2, Customer: Henry, Date: 2023-06-19
// Order ID: 6, Customer: Elias, Date: 2023-06-24
// Order ID: 4, Customer: Dorte, Date: 2023-06-20
// Order ID: 5, Customer: Dilek, Date: 2023-06-22
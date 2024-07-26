// forEach() - Executes a function on each element.
// Scenario: An e-commerce manages its online orders using an order system.
// The systems iterates through an array of orders to process each one and log its details.


type Order = {
  id: string
  status: string
}

const orders: Order[] = [
  { id: 'order1', status: 'pending' },
  { id: 'order2', status: 'shipped' },
  { id: 'order3', status: 'delivered' },
  { id: 'order4', status: 'pending' }
]

orders.forEach(order => {
  // Process the order (e.g., update status, send notification, etc.)
  console.log(`Processing order ID: ${order.id}, current status: ${order.status}`)
  
  // Example action: Check if order is pending and update status
  if (order.status === 'pending') {
    order.status = 'processing'
    console.log(`Order ID: ${order.id} status updated to: ${order.status}`)
  }
})

// Result:
// Processing order ID: order1, current status: pending
// Order ID: order1 status updated to: processing
// Processing order ID: order2, current status: shipped
// Processing order ID: order3, current status: delivered
// Processing order ID: order4, current status: pending
// Order ID: order4 status updated to: processing
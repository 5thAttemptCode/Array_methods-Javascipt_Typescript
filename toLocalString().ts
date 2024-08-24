// toLocaleString() - Returns a string representing the elements using locale-specific formatting.
// Scenario: display the order dates of an array of orders in a format that's appropriate for the user's locale.


type Order = {
  id: number
  customer: string
  date: Date
}

const orders: Order[] = [
  { id: 1, customer: "Mia", date: new Date("2023-06-21T10:30:00Z") },
  { id: 2, customer: "Henry", date: new Date("2023-06-19T14:45:00Z") },
  { id: 3, customer: "Elias", date: new Date("2023-06-23T08:15:00Z") },
  { id: 4, customer: "Dorte", date: new Date("2023-06-20T12:00:00Z") },
  { id: 5, customer: "Dilek", date: new Date("2023-06-22T09:30:00Z") }
]

const userLocale: string = 'en-US'

console.log("Order dates in local format:")
orders.forEach((order: Order) => {
  console.log(`Order ID: ${order.id}, Customer: ${order.customer}, Date: ${order.date.toLocaleString(userLocale)}`)
})

// Result:
// Order dates in local format:
// Order ID: 1, Customer: Mia, Date: 6/21/2023, 3:30:00 PM
// Order ID: 2, Customer: Henry, Date: 6/19/2023, 7:45:00 AM
// Order ID: 3, Customer: Elias, Date: 6/23/2023, 1:15:00 AM
// Order ID: 4, Customer: Dorte, Date: 6/20/2023, 5:00:00 AM
// Order ID: 5, Customer: Dilek, Date: 6/22/2023, 2:30:00 AM
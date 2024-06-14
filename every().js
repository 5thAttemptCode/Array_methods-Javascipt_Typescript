// every() - checks if all elements pass a test.
// An e-commerce checks if all the items in a customer order are in stock 

const cart = [
  { product: "Breitling Chronomat", inStock: true },
  { product: "Breitling Navtimer", inStock: true },
  { product: "Breitling Avenger", inStock: false },
  { product: "Breitling Top Time", inStock: true }
]

const allInStock = cart.every(item => item.inStock)

if (allInStock) {
  console.log("All watches are in stock!")
} else {
  const outOfStockItems = cart.filter(item => !item.inStock).map(item => item.product)
  console.log("The following watches are out of stock: " + outOfStockItems.join(', '))
}
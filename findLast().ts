// findLast() - Returns the last element that passes a test.
// Scenario: Continuing with the e-commerce inventory check scenario.
// It wants to quickly find the last product that is out of stock to prioritize restocking efforts.


interface Product {
  product: string
  inStock: boolean
}

const inventory: Product[] = [
  { product: "Breitling Chronomat", inStock: true },
  { product: "Breitling Navtimer", inStock: true },
  { product: "Breitling Avenger", inStock: false },
  { product: "Breitling Top Time", inStock: false },
  { product: "Breitling Superocean", inStock: true }
]

const outOfStockProduct = inventory.findLast(item => !item.inStock)

if (outOfStockProduct) {
  console.log(`The last out-of-stock product is: ${outOfStockProduct.product}`)
} else {
  console.log("All products are in stock.")
}

// Result
// "The last out-of-stock product is: Breitling Top Time"
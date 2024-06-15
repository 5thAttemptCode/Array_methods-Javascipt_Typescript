// find() -  Returns the first element that passes a test.
// Scenario: Continuing with the e-commerce inventory check scenario.
// It wants to quickly find the first product that is out of stock to 
// prioritize restocking efforts.


const inventory = [
  { product: "Breitling Chronomat", inStock: true },
  { product: "Breitling Navtimer", inStock: true },
  { product: "Breitling Avenger", inStock: false },
  { product: "Breitling Top Time", inStock: false },
  { product: "Breitling Superocean", inStock: true }
]

const outOfStockProduct = inventory.find(item => !item.inStock)

if (outOfStockProduct) {
  console.log(`The first out-of-stock product is: ${outOfStockProduct.product}`)
} else {
  console.log("All products are in stock.")
}

// Result
// "The first out-of-stock product is: Breitling Avenger"
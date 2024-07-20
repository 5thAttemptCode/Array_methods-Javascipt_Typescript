// findIndex() - Returns the index of the first element that passes a test.
// Scenario: Continuing with the e-commerce inventory check scenario.
// It wants to quickly find the index of the first product that is out of stock.


type InventoryItem = {
  product: string
  inStock: boolean
}

const inventory: InventoryItem[] = [
  { product: "Breitling Chronomat", inStock: true },
  { product: "Breitling Navtimer", inStock: true },
  { product: "Breitling Avenger", inStock: false },
  { product: "Breitling Top Time", inStock: false },
  { product: "Breitling Superocean", inStock: true }
]

const outOfStockIndex: number = inventory.findIndex(item => !item.inStock)

if (outOfStockIndex !== -1) {
  // +1 to avoid ".. at index 0"
  console.log(`The first out-of-stock product is at index: ${outOfStockIndex + 1} - ${inventory[outOfStockIndex].product}`)
} else {
  console.log("All products are in stock.")
}

// Result
// "The first out-of-stock product is: Breitling Avenger"
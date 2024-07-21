// findLastIndex() - Returns the index of the last element that passes a test.
// Scenario: Continuing with the e-commerce inventory check scenario.
// It wants to quickly find the index of the last product that is out of stock to prioritize restocking efforts


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

const lastOutOfStockIndex: number = inventory.findLastIndex(item => !item.inStock)

if (lastOutOfStockIndex !== -1) {
  console.log(`The last out-of-stock product is at index: ${lastOutOfStockIndex}, which is: ${inventory[lastOutOfStockIndex].product}`)
} else {
  console.log("All products are in stock.")
}


// Result
// "The last out-of-stock product is at index: 3, which is: Breitling Top Time"
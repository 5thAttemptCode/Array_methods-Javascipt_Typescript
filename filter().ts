// filter() -  Creates a new array with elements that pass a test.
// Scenario: An e-commerce makes an inventory check. It wants to filter
// out all the products which havent been sold last month.


type InventoryItem = {
  product: string
  soldLastMonth: boolean
}

const inventory: InventoryItem[] = [
  { product: "Breitling Chronomat", soldLastMonth: true },
  { product: "Breitling Navtimer", soldLastMonth: true },
  { product: "Breitling Avenger", soldLastMonth: false },
  { product: "Breitling Top Time", soldLastMonth: false },
  { product: "Breitling Superocean", soldLastMonth: true }
]

const unsoldProducts: InventoryItem[] = inventory.filter(item => !item.soldLastMonth)

console.log("These products were not sold in the last month:")
unsoldProducts.forEach(item => console.log(item.product))

  
  // Result
  // "Breitling Avenger", "Breitling Top Time"
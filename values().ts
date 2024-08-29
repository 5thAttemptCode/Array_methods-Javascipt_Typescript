// values() - Returns an iterator with the values of an array.
// Scenario: Letzs develop an inventory management system for a warehouse. The system stores
// an array of objects representing different items. When conducting a routine check, the employee wants to
// iterate over the list of items and process each one to check stock levels or perform other operations.


type InventoryItem = {
  id: number
  name: string
  quantity: number
}

let productInventory: InventoryItem[] = [
  { id: 1, name: 'Laptop', quantity: 50 },
  { id: 2, name: 'Monitor', quantity: 30 },
  { id: 3, name: 'Keyboard', quantity: 100 },
  { id: 4, name: 'Mouse', quantity: 5 }
]

// Function to process inventory items
function processProductInventory(): void {
  let iterator: IterableIterator<InventoryItem> = productInventory.values()
  
  for (let item of iterator) {
    console.log(`Processing item: ${item.name}, Quantity: ${item.quantity}`);
    
    // Perform operations like checking stock levels, updating quantities etc.
    if (item.quantity < 20) {
      console.log(`Warning: Low stock on ${item.name}`)
    }
  }
}

// Processing the inventory
processProductInventory()

// Result:
// Processing item: Laptop, Quantity: 50
// Processing item: Monitor, Quantity: 30
// Processing item: Keyboard, Quantity: 100
// Warning: Low stock on Mouse
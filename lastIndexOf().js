// keys() - Returns the last index of a specified element.
// Scenario: Imagine you are managing a shopping history system for an online store. A user wants to find the  
// last time they purchased a specific product to track their buying habits.


const shoppingHistory = ["Laptop", "Mouse", "Keyboard", "Monitor", "Mouse", "Laptop", "Mouse"]

const productToFind = "Mouse"

const lastPurchaseIndex = shoppingHistory.lastIndexOf(productToFind)

if (lastPurchaseIndex !== -1) {
  console.log(`The last purchase of ${productToFind} was at index ${lastPurchaseIndex}.`)
} else {
  console.log(`The product ${productToFind} was not found in the shopping history.`)
}

// Result:
// "The last purchase of Mouse was at index 6."

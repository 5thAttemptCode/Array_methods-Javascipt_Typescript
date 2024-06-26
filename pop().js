// pop() - Removes the last element and returns it.
// Scenario: Sometimes, users decide to remove the most recent item they added to their shopping cart.   


let shoppingCart = ["Laptop", "Mouse", "Keyboard", "Monitor"]

const removedItem = shoppingCart.pop()

if (removedItem) {
  console.log(`Removed the most recent item: "${removedItem}" from the shopping cart.`)
} else {
  console.log("The shopping cart is empty.")
}
// Result:
// "Removed the most recent item: "Monitor" from the shopping cart."

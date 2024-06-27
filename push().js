// push() - Adds one or more elements to the end.
// Scenario: Useful for a shopping cart system in e-commerce.
// Users can add items to their cart, and you want to handle this action using the push() method.


let shoppingCart = ["Laptop", "Mouse", "Keyboard"]

const newItem ="Monitor"

shoppingCart.push(newItem)

console.log(`Added "${newItem}" to the shopping cart.`)
console.log("Updated shopping cart:", shoppingCart)

// Result:
// "Added "Monitor" to the shopping cart."
// Updated shopping cart: ['Laptop', 'Mouse', 'Keyboard', 'Monitor']


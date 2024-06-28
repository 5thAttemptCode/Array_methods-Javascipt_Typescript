// reduce() - Applies a function against an accumulator and each element to reduce it to a single value.
// Scenario: Useful for a shopping cart system in e-commerce
// to calculate the cart total cost.

const itemPrices = [ 29.99, 49.99, 19.99, 99.99 ]

const totalCost = itemPrices.reduce((accumulator, currentValue) => accumulator + currentValue, 0)

console.log(`Total price to pay: $${totalCost.toFixed(2)}`)

// Result:
// "Total cost of items in the shopping cart: $199.96"
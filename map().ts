// map() - Creates a new array with the results of calling a function on every element.
// Scenario: An e-commerce store wants to apply a discount to all items in the user's shopping cart and display the new prices.


const itemPrices: number[] = [29.99, 49.99, 19.99, 99.99]

const discountRate: number = 0.10

const discountedPrices: number[] = itemPrices.map(price => price * (1 - discountRate))

console.log("Original prices:", itemPrices)
console.log("Discounted prices:", discountedPrices.map(price => price.toFixed(2)))

// Result:
// "Original prices: [29.99, 49.99, 19.99, 99.99]""
// "Discounted prices: ["26.99", "44.99", "17.99", "89.99"]"
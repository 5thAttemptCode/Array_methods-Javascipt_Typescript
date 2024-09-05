// toSorted - Creates a new array with the elements sorted.

// The difference between sort() and toSorted() is that sort() modifies the original array 
// and returns the sorted array.The toSorted() method returns a new array with the elements sorted
// but does not modify the original array - non-desctructive.

// Scenario: In an online shop can sort the product array by price (either ascending or descending), 
// but the original product list should remain unchanged to allow for other sorting options or filters.


// Define the Product interface
interface Product {
  id: number
  name: string
  price: number
  rating: number
}

// Original list of products
const products: Product[] = [
  { id: 1, name: "Product A", price: 30, rating: 4.5 },
  { id: 2, name: "Product B", price: 20, rating: 4.0 },
  { id: 3, name: "Product C", price: 50, rating: 4.8 },
  { id: 4, name: "Product D", price: 10, rating: 3.5 }
]

// Custom toSorted() function that returns a sorted copy of the array
function toSorted<T>(arr: T[], compareFn: (a: T, b: T) => number): T[] {
  return arr.slice().sort(compareFn) // slice() creates a copy, sort() sorts that copy
}

// Function to display product names and prices (simulated here with console.log)
function displayProducts(productList: Product[]): void {
  productList.forEach(product => console.log(`${product.name}: $${product.price}`))
}

// User chooses to sort products by price in ascending order
const productsByPriceAsc: Product[] = toSorted(products, (a, b) => a.price - b.price)
console.log("Products sorted by price (ascending):")
displayProducts(productsByPriceAsc)

// Later, the user decides to sort products by rating in descending order
const productsByRatingDesc: Product[] = toSorted(products, (a, b) => b.rating - a.rating)
console.log("Products sorted by rating (descending):")
displayProducts(productsByRatingDesc)

// Original product list remains unchanged
console.log("Original product list:")
displayProducts(products)

// Result

// Products sorted by price (ascending):
// Product D: $10
// Product B: $20
// Product A: $30
// Product C: $50

// Products sorted by rating (descending):
// Product C: $50
// Product A: $30
// Product B: $20
// Product D: $10

// Original product list:
// Product A: $30
// Product B: $20
// Product C: $50
// Product D: $10
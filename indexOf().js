// indexOf() - Returns the first index of a specified element.
// Scenario: An e-commerce wants to manage its wish-list system. There is a list of product IDs that a user has added to their wishlist.
// now it is to find the index of a specific product in that list to determine its position or remove it.


const wishlist = ["prod1", "prod2", "prod3", "prod4"]

const productToFind = "prod3"

const productIndex = wishlist.indexOf(productToFind)

if (productIndex !== -1) {
  console.log(`Product ${productToFind} is at index ${productIndex} in the wishlist.`)
} else {
  console.log(`Product ${productToFind} is not in the wishlist.`)
}

// Result:
// "Product prod3 is at index 2 in the wishlist."
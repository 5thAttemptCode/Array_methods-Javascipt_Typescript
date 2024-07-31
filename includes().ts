// includes() - Executes a function on each element.
// Scenario: Imagine you are managing a promotion system for an online store. You have a list of products that 
// are currently on promotion, and you want to check if a specific product is included in that list.


const promotionList: string[] = ["prod1", "prod2", "prod3", "prod4"]

const productToCheck: string = "prod3"

if (promotionList.includes(productToCheck)) {
  console.log(`Product ${productToCheck} is on promotion`)
} else {
  console.log(`Product ${productToCheck} is not on promotion`)
}

// Result:
// "Product prod3 is on promotion"
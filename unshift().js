// unshift() - Adds one or more elements to the beginning.
// Scenario: An online store wants to add new products to the beginning of 
// their products array to present them to customers.


let featuredProducts = [
  "Apple iPad Pro",
  "Samsung Galaxy Tab S7",
  "Amazon Fire HD 10",
  "Microsoft Surface Pro 7"
]

const newProducts = [
  "HUAWEI MatePad T 10s",
  "Lenovo Tab P11"
]

newProducts.reverse().forEach(product => {
  featuredProducts.unshift(product)
})

console.log("Updated featured products list:");
featuredProducts.forEach((product, index) => {
  console.log(`${index + 1}. ${product}`)
})

// Result:
// Updated featured products list:
// 1. HUAWEI MatePad T 10s
// 2. Lenovo Tab P11
// 3. Apple iPad Pro
// 4. Samsung Galaxy Tab S7
// 5. Amazon Fire HD 10
// 6. Microsoft Surface Pro 7

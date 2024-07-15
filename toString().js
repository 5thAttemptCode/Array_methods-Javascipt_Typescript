// toLocaleString() - Returns a string representing the array.
// Scenario: An online store wants to send a marketing email that includes a list of popular product names, all in a single string.


const popularProducts = [
  "HUAWEI MatePad T 10s",
  "Apple iPad Pro",
  "Samsung Galaxy Tab S7",
  "Amazon Fire HD 10",
  "Microsoft Surface Pro 7"
]

const productNamesString = popularProducts.toString()

console.log("Popular products for the marketing email:", productNamesString)

// Result:
// Popular products for the marketing email: HUAWEI MatePad T 10s,Apple iPad Pro,Samsung Galaxy Tab S7,Amazon Fire HD 10,Microsoft Surface Pro 7
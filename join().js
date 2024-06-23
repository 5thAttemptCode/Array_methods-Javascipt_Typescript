// join() - Joins all elements into a string.
// Scenario: An e-commerce wants to manage its user profile system. Each user has an address stored 
// as an array of its components (e.g., street, city, state, postal code). For display or printing
// a formatted address string has to be generated.


const addressComponents = ["187 Grove Str", "Apt. 69", "Los Santos", "CAL", "187685"]

const formattedAddress = addressComponents.join(", ")

console.log("User's Address:", formattedAddress)

// Result:
// "User's Address: 187 Grove Str, Apt. 69, Los Santos, CAL, 187685"
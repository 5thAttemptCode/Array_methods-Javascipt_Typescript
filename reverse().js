// reverse() - Reverses the array in place.
// Scenario: When managing a product review section for an online store, specifically for a product like 
// the HUAWEI MatePad T 10s, you want to display the most recent reviews first.

const reviews = [
  "Great tablet for the price!",
  "Battery life could be better.",
  "Excellent display quality.",
  "Very responsive and fast.",
  "Highly recommend this product."
]

const reversedReviews = reviews.reverse()

console.log("Reviews from most recent to oldest:")
reversedReviews.forEach((review, index) => {
  console.log(`${index + 1}. ${review}`)
})

// Result:
// Reviews from most recent to oldest:
// 1. Highly recommend this product.
// 2. Very responsive and fast.
// 3. Excellent display quality.
// 4. Battery life could be better.
// 5. Great tablet for the price!
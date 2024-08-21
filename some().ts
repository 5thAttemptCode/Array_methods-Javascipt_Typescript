// some() - Checks if at least one element passes a test.
// Scenario: Check for certain words in product reviews, like "battery" for a laptop.


const allReviews: string[] = [
  "Great laptop for the price!",
  "Battery life could be better.",
  "Excellent display quality.",
  "Very responsive and fast.",
  "Highly recommend this laptop."
]

const mentionsKeyword: boolean = allReviews.some((review: string) => review.toLowerCase().includes("battery"))

if (mentionsKeyword) {
  console.log("Reviews mentioning 'battery':")
  allReviews.forEach((review: string, index: number) => {
    if (review.toLowerCase().includes("battery")) {
      console.log(`${index + 1}. ${review}`)
    }
  })
} else {
  console.log("No reviews mention 'battery'.")
}

// Result:
// Reviews mentioning "battery":
// 2. Battery life could be better.
// slice() - Returns a shallow copy of a portion of an array.
// Scenario: A restaurant wants to display the latest three customer reviews on their website.


const allReviews: string[] = [
  "Great quality and price!",
  "Service could be better.",
  "Excellent food and service.",
  "Very fast and friendly staff.",
  "The potatoes were raw."
]

const recentReviews: string[] = allReviews.slice(-3)

console.log("Most recent three reviews:")
recentReviews.forEach((review: string, index: number) => {
  console.log(`${index + 1}. ${review}`)
})

// Result:
// Most recent three reviews:
// "Excellent food and service.",
// "Very fast and friendly staff.",
// "The potatos were raw.",
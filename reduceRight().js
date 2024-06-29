// reduceRight() - Applies a function against an accumulator and each element (from right to left) to reduce it to a single value.
// Scenario: In a text processing app a user can reverse the order of words in a given sentence.

const sentence = "Javascript is the best thing that happend to me ever"

const words = sentence.split(' ')

const reversedSentence = words.reduceRight((accumulator, currentValue) => {
    return accumulator + ' ' + currentValue
}, '').trim()

console.log(`Original sentence: "${sentence}"`)
console.log(`Reversed sentence: "${reversedSentence}"`)

// Result:
// Original sentence: "Javascript is the best thing that happend to me ever"
// Reversed sentence: "ever me to happend that thing best the is Javascript"
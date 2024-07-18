// fill() - Fills elements with a static value.
// Scenario: You need to reset the sourvey responses from an app.
// Each response is represented as an array of scores, initially 
// set to a placeholder value indicating no response.

let surveyResponses: (number | null)[] = [1, 8, 7, 6, 8, 5]

surveyResponses.fill(null)

console.log(surveyResponses)

// Result
// [ null, null, null, null, null ]
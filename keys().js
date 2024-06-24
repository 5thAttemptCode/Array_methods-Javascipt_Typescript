// keys() - Returns an iterator with the keys of an array.
// Scenario: Imagine you are managing a to-do list application. You want to track the completion status of tasks, 
// which are stored in an array. You can use the indices to update and display the status of each task.


const tasks = ["Do 100 burpees", "Clean new Nike's", "Feed sourdough starter", "Run final Jest-test on React app"]

const completedTasks = [true, false, true, false]

const taskIndices = tasks.keys()

for (let index of taskIndices) {
  const status = completedTasks[index] ? 'completed' : 'not completed'
  console.log(`Task: "${tasks[index]}" is ${status}.`)
}

// Result:
// Task: "Do 100 burpees" is completed.
// Task: "Clean new Nike's" is not completed.
// Task: "Feed sourdough starter" is completed.
// Task: "Run final Jest-test on React app" is not completed.
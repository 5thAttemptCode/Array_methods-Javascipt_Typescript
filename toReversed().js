// toReversed - Creates a new array with the elements in reverse order.

// The difference between reverse() and toReverse() is that reverse() modifies the original array 
// and returns the reversed array.The toReverse() method returns a new array with the elements reversed 
// but does not modify the original array - non-desctructive.

// Scenario: In a task management app, the user has a list of tasks that he/she wants to display in different 
// orders based on the their preferences. The user can toggle between "most recent tasks first" (reversed order) 
// and "oldest tasks first" (original order). The original task list shouldn't be modified because other parts of 
// the app might rely on the order of tasks remaining unchanged.



// Original list of tasks, ordered by creation date (oldest first)
const tasks = [
  { id: 1, title: "Write code", createdAt: "2024-01-01" },
  { id: 2, title: "Job interview", createdAt: "2024-01-02" },
  { id: 3, title: "Code review", createdAt: "2024-01-03" }
]

// Function to display tasks in the UI (simulated here with console.log)
function displayTasks(taskList) {
  taskList.forEach(task => console.log(task.title))
}

// User chooses to display the most recent tasks first (reverse order)
const recentTasks = tasks.toReversed() // Hypothetical toReverse() method
console.log("Most Recent Tasks First:")
displayTasks(recentTasks)

// Later, the user decides to view tasks in the original order (oldest first)
console.log("Oldest Tasks First:")
displayTasks(tasks)

// Result

// Most Recent Tasks First:
// Code review
// Job interview
// Write code

// Oldest Tasks First:
// Write code
// Job interview
// Code review
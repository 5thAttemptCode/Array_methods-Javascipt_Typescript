// toReversed - Creates a new array with the elements in reverse order.

// The difference between reverse() and toReverse() is that reverse() modifies the original array 
// and returns the reversed array.The toReverse() method returns a new array with the elements reversed 
// but does not modify the original array - non-desctructive.

// Scenario: In a task management app, the user has a list of tasks that he/she wants to display in different 
// orders based on the their preferences. The user can toggle between "most recent tasks first" (reversed order) 
// and "oldest tasks first" (original order). The original task list shouldn't be modified because other parts of 
// the app might rely on the order of tasks remaining unchanged.


// Define the Task interface
interface Task {
  id: number
  title: string
  createdAt: string
}

// Original list of tasks, ordered by creation date (oldest first)
const tasks: Task[] = [
  { id: 1, title: "Task 1", createdAt: "2023-01-01" },
  { id: 2, title: "Task 2", createdAt: "2023-01-02" },
  { id: 3, title: "Task 3", createdAt: "2023-01-03" }
]

// Function to create a reversed copy of the array without mutating the original
function toReverse<T>(arr: T[]): T[] {
  return arr.slice().reverse() // slice() creates a shallow copy, reverse() reverses it
}

// Function to display tasks in the UI (simulated here with console.log)
function displayTasks(taskList: Task[]): void {
  taskList.forEach(task => console.log(task.title))
}

// User chooses to display the most recent tasks first (reverse order)
const recentTasks: Task[] = toReverse(tasks)
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
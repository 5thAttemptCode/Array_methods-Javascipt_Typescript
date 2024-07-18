// entries() - returns an iterator with key/value pairs.
// A teacher has an array of student grades for a recent exam. 
// He wants to review each student's grade along with their position in the list, 
// and make corrections if necessary.

const studentGrades: number[] = [ 81, 99, 68, 91, 87, 76 ]

const gradeEntries = studentGrades.entries()

for (const [index, grade] of gradeEntries) {
  console.log(`Student ${index + 1}: Grade = ${grade}`)

  if (grade < 80) {
    studentGrades[index] = grade + 5
  }
}

console.log('Updated grades:', studentGrades)

// Result
// Student 1: Grade = 81
// Student 2: Grade = 99
// Student 3: Grade = 68
// Student 4: Grade = 91
// Student 5: Grade = 87
// Student 6: Grade = 76

// Updated grades: [ 81, 99, 73, 91, 87, 81 ]
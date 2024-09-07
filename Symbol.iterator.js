// Symbol.iterator - Returns the default iterator for an array.

// We'll create a Library class that stores books in an internal array. By implementing
// Symbol.iterator, we'll make it possible to iterate over the library's books using a for...of loop or
// other iterable mechanisms.


// Define the Library class
class Library {
    constructor() {
      this.books = [] // Internal array to store books
    }
  
    // Method to add a book to the library
    addBook(book) {
      this.books.push(book)
    }
  
    // Implement Symbol.iterator to make the Library class iterable
    [Symbol.iterator]() {
      let index = 0
      const books = this.books // Capture the current context
  
      // Return an iterator object
      return {
        next() {
          if (index < books.length) {
            return { value: books[index++], done: false }
          } else {
            return { value: undefined, done: true }
          }
        }
      }
    }
  }
  
  // Example usage
  const library = new Library()
  
  // Add some books to the library
  library.addBook({ title: "Eloquent Javascript", author: "Marijn Haverbeke" })
  library.addBook({ title: "Python Crash Course", author: "Eric Matthes" })
  library.addBook({ title: "Atomic Design", author: "Brad Frost" })
  
  // Now you can iterate over the library using a for...of loop
  for (const book of library) {
    console.log(`${book.title} by ${book.author}`)
  }
  
  // You can also use the spread operator to get an array of books
  const booksArray = [...library]
  console.log(booksArray)


// Result

// Eloquent Javascript by Marijn Haverbeke
// Pathon Crash Course by Eric Matthes
// Atomic Design by Brad Frost
// [
//   { title: 'Eloquent Javascript', author: 'Marijn Haverbeke' },
//   { title: 'Python Crash Course', author: 'Eric Matthes' },
//   { title: 'Atomic Design', author: 'Brad Frost' }
// ]
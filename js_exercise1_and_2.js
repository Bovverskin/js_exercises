// js exercise 1

// Create an array and add three numbers to it.
// Use your array to return the second number.

let number = [1, 2, 3]
console.log(number[1])

// What data type is 123/12? "Things in quotes!"? undefined?
//1. Float
//2. String
//3. A primitive value automatically assigned to variables that have just been declared or to formal arguments for which there are no actual arguments.

//Write an if statement that returns true

const dinnerTime= function(evening){
    if (evening === 'Dinner time'){
     return true; 
    }
    else {
      return false;
    }
  };
  dinnerTime('Dinner time')

// Consider these two arrays: myArray = ['Thomas', 'Amber', 'Raoul'] and emptyArray = []. Use a for loop to add our names to emptyArray

let myArray = ['Thomas', 'Amber', 'Raoul']
let emptyArray = []
for(let i = 0; i < myArray.length; i++) {
    console.log(myArray.push('Thomas'));
// expected output: 4
}

// Q: Google a helper method for finding the length of an array in Javascript. Is it the same as Ruby?
// A: Although there is no equivalent to this in naked Javascript, there is a way to collect object properties (but not method results).

// js exercise 2

// Q: What is 'this'? Does it have an equivalent in Ruby?
// A: 'this' does not refer to an object like in Ruby.
// A: 'this' can have any value. The value of 'this' within any given function call is determined by how the function is called.
// A: The 'this' equivalent in Ruby is 'self'.

class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName
        this.lastName = lastName
    }

  greet() {
    console.log(`Hello, I am ${this.first} ${this.last}`)
  }
}

thomas = new Person("Thomas", "Ochman")
thomas.greet()
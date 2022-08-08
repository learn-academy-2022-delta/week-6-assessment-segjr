// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.

const people = [
  { name: "ford prefect", occupation: "a hitchhiker" },
  { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
  { name: "arthur dent", occupation: "a radio employee" }
]
// Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]

describe("sentence", () => {
  it("takes in an array of objects and returns an array with a sentence about each person with their name capitalized.", () => {
    expect(sentence(people)).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."])
  })
})

// b) Create the function that makes the test pass.

// Pseudo Code:
// Create a function that takes an array as a parameter. (sentence)
// Create a variable of an empty array. (newArr)
// Create a variable for the first key value of the 0 index of the array. (name1)
// Create a variable for the first key value of the 1 index of the array. (name2)
// Create a variable for the first key value of the 2 index of the array. (name3)
// Use a method, with string interpolation, to add the variables to the empty array variable (.push)
  // Within push, use built in methods to capitalize the first letter of each name and add them to a substring of the remainder of the name. (charAt, toUpperCase, substring)
  // Within push, use string interpolation to represent the occupation key of the given index of the array. 
// Have the function return the new array variable
// Run the function with the provided variables

function sentence(arr) {
  let newArr = [];
  let name1 = Object.values(arr[0])[0];
  let name2 = Object.values(arr[1])[0];
  let name3 = Object.values(arr[2])[0];
  newArr.push(`${name1.charAt(0).toUpperCase() + name1.substring(1, 5) + name1.charAt(5).toUpperCase() + name1.substring(6)} is ${Object.values(arr[0])[1]}`)
  newArr.push(`${name2.charAt(0).toUpperCase() + name2.substring(1, 7) + name2.charAt(7).toUpperCase() + name2.substring(8)} is ${Object.values(arr[0])[1]}`)
  newArr.push(`${name3.charAt(0).toUpperCase() + name3.substring(1, 7) + name3.charAt(7).toUpperCase() + name3.substring(8)} is ${Object.values(arr[0])[1]}`)
  return newArr
}

console.log(sentence(people))

// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.

const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
// Expected output: [ 2, 0, -1, 0 ]
const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
// Expected output: [ 2, 1, -1 ]

describe("modulo", () => {
  it("takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.", () => {
    expect(modulo(hodgepodge1)).toEqual([ 2, 0, -1, 0 ])
    expect(modulo(hodgepodge2)).toEqual([ 2, 1, -1 ])
  })
})

// b) Create the function that makes the test pass.

// Pseudo Code:
// Create a function that takes an array as a parameter. (modulo)
// Create a variable of array with a method applied, that returns the value if it is equivalent to a number. [filter] (numbersArr)
// Create a variable of the filtered array with a method applied, that returns an array of the value modulo 3. [map] (remaindersArr)
// Have the function return the mapped array variable.
// Run the function with the provided variables.

function modulo(arr) {
  let numbersArr = arr.filter(value => typeof value == 'number')
  let remaindersArr = numbers.map(value => value % 3)
  return remaindersArr
}

console.log(modulo(hodgepodge1))

console.log(modulo(hodgepodge2))

// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.

const cubeAndSum1 = [2, 3, 4]
// Expected output: 99
const cubeAndSum2 = [0, 5, 10]
// Expected output: 1125

describe("function", () => {
  it("function description", () => {
    expect(cubeSum(cubeAndSum1)).toEqual(99)
    expect(cubeSum(cubeAndSum2)).toEqual(1125)
  })
})

// b) Create the function that makes the test pass.

// Pseudo Code:
// Create a function that takes an array as a parameter. (cubeSum)
// Create a variable of the array with a method applied that returns an array of the given value cubed. [map] (cubedArr)
// Create a variable for the mapped array with a method applied that adds each index value of the given array. [reduce] (sumArr)
// Have the function return the new array variable.
// Run the function with the provided variables.

function cubeSum(array) {
  let cubedArr = array.map(value => value ** 3)
  let sumArr = cubedArr.reduce((a, b) => a + b)
  return sumArr
}

console.log(cubeSum(cubeAndSum1))

console.log(cubeSum(cubeAndSum2))

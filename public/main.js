// Practice Creating Variables

// Create a variable that stores the numberOfCupsOfCoffee that you drink every day.

const numberOfCupsOfCoffee = 0

// Create a variable called fullName and set it equal to your full name.

const fullName = 'Colter Lena'

// Use console.log and your variables, numberOfCupsOfCoffee and fullName to output all three on one line.

console.log(
  `My full name is ${fullName} and I drink ${numberOfCupsOfCoffee} cups of coffee per day.`
)

// Practice Getting Input From the User

// Ask the user for their name and store it in a variable named userName.

const userName = window.prompt('What Is Your User Name?')

// Console log a greeting to the user, using their name.
console.log(`'Welcome to our website ${userName}!'`)

// Converting String Input Into Numbers

// Input two numbers from the user. Use window.prompt twice, once for each prompt/number. Convert each resulting string from window.prompt to a float using parseFloat. Save the first value in a variable named firstOperand and the second value in a variable named secondOperand.

const firstOperandAsString = window.prompt('Please Enter a Number Below')

const secondOperandAsString = window.prompt('Please Enter Another Number Below')

const firstOperand = parseFloat(firstOperandAsString)

const secondOperand = parseFloat(secondOperandAsString)

console.log(
  `The first number you inputted was ${firstOperand} and the second was ${secondOperand}.`
)

// Doing Math

// Add the operand variables from above and save the results in a variable named sum.
const sum = firstOperand + secondOperand

// Subtract the secondOperand variable from the firstOperand variable and save the results in a variable named difference.
const difference = firstOperand - secondOperand

// Multiply the operand variables and save the results in a variable named product.
const product = firstOperand * secondOperand

// Divide the firstOperand by the secondOperand and save the results in a variable named quotient.
const quotient = firstOperand / secondOperand

// Find the remainder when one operand is divided by the other and save the results in a variable named remainder.
const remainder = firstOperand % secondOperand

// Use console.log to present the user, in a meaningful way, each of the values for the sum, difference, quotient, product, and remainder variables. (e.g. perhaps one of your outputs is similar to If you add 4 and 5 you get 9 if 4 and 5 were the input)
console.log(
  `If you add ${firstOperand} to ${secondOperand} then the result will be ${sum}.`
)
console.log(
  `If you subtract ${firstOperand} by ${secondOperand} then the result will be ${difference}.`
)
console.log(
  `If you multiply ${firstOperand} by ${secondOperand} the result will be ${product}.`
)
console.log(
  `If you divide ${firstOperand} by ${secondOperand} the result will be ${quotient}.`
)
console.log(
  `If you divide ${firstOperand} by ${secondOperand} the remainder will be ${remainder}.`
)

// Using Arrays

// Place these numbers into a properly formatted array named numbers.

const numbers = [
  36,
  86,
  91,
  88,
  63,
  87,
  7,
  53,
  77,
  96,
  61,
  50,
  80,
  45,
  86,
  80,
  37,
  31,
  46,
  63,
  74,
  44,
  63,
  19,
  34,
  68,
  50,
]

// In a variable named smallest, find the smallest value in the array.
const orderedNumbers = numbers.sort((a, b) => a - b)

const smallest = orderedNumbers[0]

console.log(smallest)

// In a variable named largest, find the largest value in the array.

const listItems = orderedNumbers.length

const largest = orderedNumbers[listItems - 1]

console.log(largest)

// In a variable named sum, find the sum of all the values in the array.
const sumOfArrayEntries = orderedNumbers.reduce(function (a, b) {
  return a + b
}, 0)

console.log(sumOfArrayEntries)

// In a variable named average, find the average of all the values in the array.
const average =
  orderedNumbers.reduce(function (a, b) {
    return a + b
  }, 0) / orderedNumbers.length

console.log(average)

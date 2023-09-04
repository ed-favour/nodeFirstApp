const numbers =[2,4,6,8,10,12]

const squared = x => x**x // pure function to get 

// Get the square of all numbers in the array
const squaredNumbers = numbers.map(squared)
console.log(`Squared numbers: ${squaredNumbers} `)
// console.table(squaredNumbers)

// // Use reduce HOF to get the sum of all squared values
// const sumOfSquares = squaredNumbers.reduce((previous, current) => previous + current, 0)
// console.log(`Sum of squares: ${sumOfSquares}`)

// // Use built-in Math library function to get square root of value
// const rootedSumOfSquares = Math.sqrt(sumOfSquares)
// console.log(`Square rooted sum of squares: ${rootedSumOfSquares}`)
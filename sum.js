// - Write a node program that takes in an unlimited number of command line arguments, goes through each and prints out the sum of them. If any argument is not a whole number, skip it. Do support negative numbers though. If any argument is not a number, output an error message. We need at least 2 arguments.


// function?
// for loop 


// Extract the command line arguments
const args = process.argv.slice(2);
console.log("args:", args);

// Edge case: We need at least 2 arguments.
if (args.length < 2) {
  console.log("Please enter at least 2 arguments!")
  process.exit();
}


// iterate through the arguments
// c-style loop 
// for of <= more readable

// accumulator
let total = 0;

for (let nb of args) {
  // add them up
  // Edge case: If any argument is not a number, output an error message
  // isNaN?
  // typeof?

  if (isNaN(Number(nb))) {
    console.log("Please enter only numbers!")
    // break or continue
    // return?
    process.exit()
  }
  // Edge case: If any argument is not a whole number, skip it
  // modulo => nb % 1 === 0 => whole number
  // Number.isInteger()

  if (Number.isInteger(Number(nb))) {
    total += Number(nb);
  }

  console.log("total:", total, typeof Number(nb))
}




// print out the sum
console.log("Sum:", total)
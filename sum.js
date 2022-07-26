// - Write a node program that takes in an unlimited number of command line arguments, goes through each and prints out the sum of them. If any argument is not a whole number, skip it. Do support negative numbers though. If any argument is not a number, output an error message. We need at least 2 arguments.

// function?
// for loop

// Extract the command line arguments
const args = process.argv.slice(2);
console.log('args:', args);

// Edge case: We need at least 2 arguments.
if (args.length < 2) {
  console.log('Please enter at least 2 arguments!');
  process.exit();
}

const convertToNum = function (numbers) {
  const result = [];

  for (let nb of numbers) {
    result.push(Number(nb));
  }

  return result;
};

const allInt = function (numbers) {
  const result = [];

  for (let nb of numbers) {
    if (Number.isInteger(nb)) {
      result.push(nb);
    }
  }

  return result;
};

const sum = function (numbers) {
  // iterate through the arguments
  // c-style loop
  // for of <= more readable

  // accumulator
  let total = 0;

  for (let nb of numbers) {
    // add them up
    // Edge case: If any argument is not a number, output an error message
    // isNaN?
    // typeof?



    if (isNaN(nb)) {
      console.log('Please enter only numbers!');
      // break or continue
      // return?
      process.exit();
    }

    total += nb;


    // Edge case: If any argument is not a whole number, skip it
    // modulo => nb % 1 === 0 => whole number
    // Number.isInteger()
  }
  return total;
};

const result = sum(allInt(convertToNum(args)));

// print out the sum
console.log('Sum:', result);

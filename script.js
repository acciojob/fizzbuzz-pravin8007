//your JS code here. If required.
// Function to generate FizzBuzz output for numbers from 1 to 20
function fizzBuzz() {
  let output = '';

  for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      output += 'FizzBuzz\n';
    } else if (i % 3 === 0) {
      output += 'Fizz\n';
    } else if (i % 5 === 0) {
      output += 'Buzz\n';
    } else {
      output += i + '\n';
    }
  }

  return output;
}

// Display the result using alert
alert(fizzBuzz());


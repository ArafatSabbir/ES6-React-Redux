function Add(...numbers) {
  let sum = 0;
  for (let number of numbers) {
    sum += number;
  }
  return sum;
}

console.log(Add(1, 2, 3, 4, 5));

//node ES6\restFunction.js

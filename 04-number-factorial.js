function factorialNumber(num) {
  // write code here

  // if (num === 1) {
  //   return num
  // }

  // return num * factorialNumber(num - 1)

  let sum = 1

  for (let i = 1; i <= num; i++) {
    // sum = sum * i;
    sum *= i
  }

  return sum
}

console.log(factorialNumber(5))

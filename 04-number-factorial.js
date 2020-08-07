function factorialNumber(num) {
  // write code here

  if (num === 1) {
    return num
  }

  return num * factorialNumber(num - 1)
}

console.log(factorialNumber(5))

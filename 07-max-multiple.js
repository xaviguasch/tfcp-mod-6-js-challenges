function maxMultiple(divisor, bound) {
  //  write code here.
  const remainder = bound % divisor

  const result = bound - remainder

  return result
}

console.log(maxMultiple(3, 10))

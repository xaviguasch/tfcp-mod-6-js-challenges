function firstDigit(str) {
  //  write code here.
  const chars = str.split('')

  const strNums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

  for (const char of chars) {
    if (strNums.includes(char)) {
      return char
    }
  }
}

console.log(firstDigit('var__Int22....14'))

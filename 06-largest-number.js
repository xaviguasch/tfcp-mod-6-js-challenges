function largestNumber(num) {
  //  write code here.
  // let placeholder = ''
  // for (let i = 0; i < num; i++) {
  //   placeholder = placeholder.concat('9')
  // }
  // return parseInt(placeholder)

  const placeholder = '9'.repeat(num)

  return parseInt(placeholder)
}

console.log(largestNumber(4))

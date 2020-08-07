function caseInsensitivePalindrome(str) {
  //  write code here.

  const strLowerArr = str.toLowerCase().split('')

  const newArr = [...strLowerArr]

  const reversedArr = newArr.reverse()

  if (reversedArr === strLowerArr) {
    return true
  } else {
    return false
  }
}

console.log(caseInsensitivePalindrome('abac'))

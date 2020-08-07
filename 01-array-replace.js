function arrayReplace(array, elemToReplace, substitutionElem) {
  let workingArr = [...array]

  for (let i = 0; i < workingArr.length; i++) {
    if (workingArr[i] === elemToReplace) {
      workingArr[i] = substitutionElem
    }
  }

  return workingArr
}

console.log(arrayReplace([1, 2, 1], 1, 3))

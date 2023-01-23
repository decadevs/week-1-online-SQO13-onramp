  function sumMix(arr) {
    let sum = 0
    for (i = 0; i < arr.length; ++i) {
         sum += +(arr[i])
 }
 return sum
}

console.log(sumMix([9, 3, '7', '3']))
console.log(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]))
console.log(sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']))

  module.exports = sumMix
  



  /* Arrow reduce function
function sumMix(arr) {

  const numbers = 0
  const sum = numbers.reduce((x, y) => Number(x) + Number(y))
return arr[i]
}

console.log(sumMix([9, 3, '7', '3']))
console.log(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]))
console.log(sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']))

  module.exports = sumMix
  */

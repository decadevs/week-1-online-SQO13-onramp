function countTruthy(arr) {
let count = 0
let newArr = [];

for (let i = 0; i < arr.length; i++) {
      if (typeof(arr[i]) === 'number' && arr[i] !== 0) {
         newArr.push(arr[i]);
         count++
         } 
   }
    return count;
   }

console.log(countTruthy([6, 3, 0, 30, 7]))
console.log(countTruthy(['', 3, 0, 30, 7]))
console.log(countTruthy(['', 0, 0, undefined, 7 ,'5']))

module.exports = countTruthy
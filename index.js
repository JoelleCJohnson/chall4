/*2 sum, write a function that takes 2 parameters.
1st parameter is an array of numbers.
The array only containing one set of numbers that adds up to the:
Target, which is the second parameter, and is an int.
Return the indices of the array that contain those 2 numbers.
*/

function returnIndicesOfNumbersThatAddUpToTarget(array, target){
    for(let i = 0; i < array.length; i++){
        for(let j = 1; j < array.length; j++){
            if (array[i] + array[j] === target){
                
                return `array[${i}] and array[${j}] are the indices that add up to ${target}`
            }
        }
    }
}
const array = [4, 17, 11, 9, 8, 23, 2, 5]
const target = 9

console.log(returnIndicesOfNumbersThatAddUpToTarget(array, target))
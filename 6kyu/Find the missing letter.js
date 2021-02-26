/*
#Find the missing letter

Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
The array will always contain letters in only one case.

Example:

['a','b','c','d','f'] -> 'e' ['O','Q','R','S'] -> 'P'

["a","b","c","d","f"] -> "e"
["O","Q","R","S"] -> "P"
*/

function findMissingLetter(array){
    console.log(array.length)
    let result
    let a = array.map( (v,i,arr) => {
        // console.log(v.charCodeAt(0))
        if(i+1 < arr.length) {
            if (arr[i+1] .charCodeAt(0) - arr[i].charCodeAt(0) > 1) {
                result = String.fromCharCode(arr[i+1].charCodeAt(0) - 1)
                // console.log(res)
            }
        }
    })
    return result
}

findMissingLetter(['a','b','c','d','f'])
findMissingLetter(['O','Q','R','S'])
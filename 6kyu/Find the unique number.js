/*
There is an array with some numbers. All numbers are equal except for one. Try to find it!

findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55

It’s guaranteed that array contains at least 3 numbers.

*/


function findUniq(arr) {
    let arrSet = [...new Set(arr)]
    let a = arr.filter(a => (a===arrSet[0])).length
    // let b = arr.filter(b => (b===arrSet[1])).length
    
    return (a == 1) ? arrSet[0] : arrSet[1]
}


findUniq([ 3,2,3,3, 3, 3,3 ])
findUniq([ 0, 0, 0.55, 0, 0 ])
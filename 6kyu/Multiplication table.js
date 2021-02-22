/**
Your task, is to create NxN multiplication table, of size provided in parameter.

for example, when given size is 3:

1 2 3
2 4 6
3 6 9

for given example, the return value should be: [[1,2,3],[2,4,6],[3,6,9]]

 */


multiplicationTable = function(size) {
    // insert code here
    let result = new Array(size);
    for(let x = 1; x <= size; x++) {
        let subResult = [];
        for(let y = 1; y <= size; y++) {
            subResult.push(x*y)
        }
        result[x-1] = subResult
    }
    return result
    console.log(result);
  }

multiplicationTable(3);
  
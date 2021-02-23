/*
Complete the method which returns the number which is most frequent in the given input array.
If there is a tie for most frequent number, return the largest number among them.

Note: no empty arrays will be given.
Examples

[12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
[12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
[12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3
*/


function highestRank(arr){
    //Your Code logic should written here
    let a = [...new Set(arr)]
    let resultNum = 0;
    let resultCnt = 0;
    for (let i = 0; i < a.length; i++) {
        let tempCnt = 0;
        for (let y = 0; y < arr.length; y++) {
            if(a[i] === arr[y]) tempCnt++
        }
        if (tempCnt > resultCnt) {
            resultCnt = tempCnt;
            resultNum = a[i];
        }
    }
    return resultNum
}


highestRank([12, 10, 8, 12, 7, 6,8,8,8, 4,10,10, 10, 12])

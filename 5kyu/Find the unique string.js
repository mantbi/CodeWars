/*
There is an array of strings. All strings contains similar letters except one. Try to find it!

findUniq([ 'Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a' ]) === 'BbBb'
findUniq([ 'abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba' ]) === 'foo'

Strings may contain spaces. Spaces is not significant, only non-spaces symbols matters. E.g. string that contains only spaces is like empty string.

It’s guaranteed that array contains more than 3 strings.
*/

function findUniq(arr) {
    let setArr = arr.map(a => {
      return [...new Set(a.toLowerCase())].sort().join('');
    });

    for (const key in setArr) {
        let first = setArr.indexOf(setArr[key]);
        let last = setArr.lastIndexOf(setArr[key]);
        if(first === last) return arr[key];
    }
}


findUniq([ 'Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a' ])
// findUniq([ 'abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba' ])
// findUniq([ 'silvia', 'vasili', 'victor' ])
// findUniq([ '    ', '  ', ' ', 'a', ' ', '' ])
// findUniq(['    ', 'a', ' '  ])
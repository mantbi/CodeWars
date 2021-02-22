/*
Task
You need to return a string that looks like a diamond shape when printed on the screen, using asterisk (*) characters. Trailing spaces should be removed, and every line must be terminated with a newline character (\n).

Return null/nil/None/... if the input is an even number or negative, as it is not possible to print a diamond of even or negative size.
Examples

A size 3 diamond:

 *
***
 *

...which would appear as a string of " *\n***\n *\n"
*/

function diamond(n){
    if (n % 2 == 0 || n < 0) {
        return null
    } else {
        let i = 1;
        let firstHalfArr = [];
        diam = '';

        while(i <= n) {
            firstHalfArr.push(i);    
            i+=2;      
        }

        let fullArr = firstHalfArr.concat([...firstHalfArr].reverse().slice(1));
        
        fullArr.forEach((num, index, array) => {
            diam += ' '.repeat((n-num)/2) + '*'.repeat(num) + '\n';
        })

        return diam;
    }

  }

console.log(diamond(5));


/*
Your task is to sort a given string. Each word in the string will contain a single number.
This number is the position the word should have in the result.

Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.
Examples

"is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"

*/

function order(words){
    if(words === "") {return ""}
    else {
        words = words.split(' ')
        let result = new Array(words.length);
        words.forEach( (cr, idx, arr) => {
            let rgx = cr.match(/[1-9]/g);
            result[parseInt(rgx) - 1] = arr[idx];
        });
        // console.log(result.join(' '));
        return result.join(' ');
    }
    
  }

  order('4of Fo1r pe6ople g3ood th5e the2')
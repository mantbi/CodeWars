/*
Write a function that takes in a string of one or more words, and returns the same string, but with all five or more
 letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces.
 Spaces will be included only when more than one word is present.

Examples:

spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw"

spinWords( "This is a test") => returns "This is a test"

spinWords( "This is another test" )=> returns "This is rehtona test"

 */

function spinWords(str){
    let result =[];
    str.split(' ').forEach((value, index, array) => {
        // console.log(array[index]);
        value.length >= 5 ? result.push(value.split('').reverse().join(''))  : result.push(value)
    })
    // console.log(result.join(' '));
    return result.join(' ')
}


spinWords('Hey fellow warriors');
/* 
Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

Examples:
solution('abc') // should return ['ab', 'c_']
solution('abcdef') // should return ['ab', 'cd', 'ef']
*/

function solution(str) {
  let result = [];
  for (let i = 0; i < str.length; i++) {
    if (i % 2 == 0) {
      result.push(typeof str[i + 1] !== "undefined" ? str[i] + str[i + 1] : str[i] + "_");
    }
  }

  return result;
}

console.log(solution("abcdefg"));

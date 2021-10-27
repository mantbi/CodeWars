/*  
Given a string of words, you need to find the highest scoring word.
Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.
You need to return the highest scoring word as a string.
If two words score the same, return the word that appears earliest in the original string.
All letters will be lowercase and all inputs will be valid.
*/

function high(x) {
  let inp = x.split(" ");
  alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  let score = 0;
  let result = "";

  for (let i = 0; i < inp.length; i++) {
    let localScore = 0;
    [...inp[i]].forEach((v) => {
      localScore += alphabet.indexOf(v) + 1;
    });

    if (localScore > score) {
      result = inp[i];
      score = localScore;
    }
  }
  // console.log(result);
  return result;
}

// console.log(high("man i need a taxi up to ubud"));

/* 
    high('man i need a taxi up to ubud'), 'taxi');
    high('what time are we climbing up the volcano'), 'volcano'); 
    high('take me to semynak'), 'semynak');   
    high('aa b'), 'aa');
    high('b aa'), 'b');
    high('bb d'), 'bb');
    high('d bb'), 'd');
    high('aaa b'), 'aaa');
*/

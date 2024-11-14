// Longest Word
// Have the function LongestWord(sen) 
// take the sen parameter being passed and 
// return the longest word in the string. If there are two or more 
// words that are the same length, return the first word from the 
// string with that length. Ignore punctuation and assume sen will not 
// be empty. Words may also contain numbers, 
// for example "Hello world123 567"
// Examples
// Input: "fun&!! time"
// Output: time

function LongestWord(sen) { 
    var cleanedWords = sen.match(/\b[a-zA-Z0-9]+\b/g);
    console.log(cleanedWords)
    var longestWord = cleanedWords.reduce(function(longest, currentWord) {
      return currentWord.length > longest.length ? currentWord : longest;
    }, "");
    return longestWord;
  
  }
     
  // keep this function call here 
  console.log(LongestWord(readline()));
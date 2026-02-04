// Function name: wordFrequency(sentence)
// Statement: Count how many times each word appears in a sentence and return the result as an object.
// Rules:
// Ignore case differences

// Ignore extra spaces

// Test case 1
// Input: "I love JS and I love coding and JS is fun"
// Output: { i: 2, love: 2, js: 2, and: 2, coding: 1, is: 1, fun: 1 }


function wordFrequency(sentence){
    // console.log(sentence)
    let words = sentence.split(" ")
    let wordsCount={}
    // console.log(words)
    for(const word of words){
        // console.log(word)
        let wordCase = word.toLowerCase();
        // console.log(wordCase)

        if(wordsCount.hasOwnProperty(wordCase)){
            wordsCount[wordCase] += 1
        }
        else{
            wordsCount[wordCase] = 1;
        }
 
    }
    return wordsCount;
    
}

const result = wordFrequency("I love JS and I love coding and JS is fun");
const result2 = wordFrequency("Hello hello HELLO");
console.log(result)
console.log(result2)
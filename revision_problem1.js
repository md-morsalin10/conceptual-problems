


// Function name: wordFrequency(sentence)
// Statement: Count how many times each word appears in a sentence and return the result as an object.
// Rules:
// Ignore case differences

// Ignore extra spaces

// Test case 1
// Input: "I love JS and I love coding and JS is fun"
// Output: { i: 2, love: 2, js: 2, and: 2, coding: 1, is: 1, fun: 1 }

function wordFrequency(sentence){
    let words =sentence.split(" ")

    let Count ={};
    for( const word of words){
        let wordLower = word.toLowerCase();
        // console.log(word)
        if(Count.hasOwnProperty(wordLower)){
            Count[wordLower] = Count[wordLower]+1;
        }
        else{
            Count[wordLower] =1;
        }
    }
    return Count;

}

const result = wordFrequency("I love JS and I love coding and JS is fun")
console.log(result);
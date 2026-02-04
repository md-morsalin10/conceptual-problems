// Problem 2: Student Marks Analyzer
// Function name: analyzeMarks(marksObj)
// Statement:
//  Return total marks, average marks, highest scoring subject, and lowest scoring subject.
// Test case 1
// Input: { math: 78, english: 65, physics: 88, bangla: 55 }

// Output: { total: 286, average: 71.5, highest: "physics", lowest: "bangla" }

let total = 0;
let highestMark = -Infinity;
let lowestMark = Infinity;

let highestSubject =null;
let lowestSubject = null;

function analyzeMarks(marksObj){
    // console.log(marksObj)

    for(const mark in marksObj){
        // console.log(marksObj[mark])
        const value = marksObj[mark]
        total = total + marksObj[mark]

        if(value>highestMark){
            highestMark=value;
            highestSubject=mark;
        }
        if(value<lowestMark){
            lowestMark=value;
            lowestSubject=mark;
        }
      
    }
    //   console.log(highestMark,lowestMark)
    const average = total/ Object.keys(marksObj).length;
    return{
        total: total,
        average: average,
        highest: highestSubject,
        lowest: lowestSubject,
    }
}


const marks = { math: 78, english: 65, physics: 88, bangla: 55 };
const analysis = analyzeMarks(marks)
console.log(analysis)
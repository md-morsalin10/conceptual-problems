// Problem 2: Student Marks Analyzer
// Function name: analyzeMarks(marksObj)
// Statement:
//  Return total marks, average marks, highest scoring subject, and lowest scoring subject.
// Test case 1
// Input: { math: 78, english: 65, physics: 88, bangla: 55 }

// Output: { total: 286, average: 71.5, highest: "physics", lowest: "bangla" }

function analyzeMarks(marksObj){
    // console.log(marksObj)
    let total = 0;

    let highestMark= -Infinity;
    let lowestMark = Infinity;

    let highestSubject =null;
    let lowestSubject = null;

    for(const subject in marksObj){
        let mark = marksObj[subject]
        total= total+mark;

        if(mark>highestMark){
            highestMark = mark;
            highestSubject = subject;
        }
        if(mark<lowestMark){
            lowestMark=mark;
            lowestSubject= subject
        }
    }
    // console.log(highestMark,lowestMark)
    const average = total / Object.keys(marksObj).length;
    
    return{
         total: total,
         average: average,
         highest: highestSubject,
         lowest: lowestSubject
         

        
    }
}

const marks = { math: 78, english: 65, physics: 88, bangla: 55 };
const analysis = analyzeMarks(marks);
console.log(analysis);

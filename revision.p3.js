// Problem 3: Password Strength Checker
// Function name: checkPassword(password)
// Rules:
// Length must be at least 8
// Must contain at least 1 number
// Must contain at least 1 uppercase letter
// Must not contain spaces

// Test case 1
// Input:  "helloWorld"
// Output:
// { valid: false, reasons: ["missing number"] }

function checkPassword(password){
    let length = password.length
    let hasNumber = false;
    let hasUppercase = false;
    let hasSpace = password.includes(" ")
    let reasons = []

    for(i=0; i<=length; i++){
        // console.log(password[i])
        let sentence = password[i]
        if(sentence >= "0" && sentence <= "9"){
            hasNumber = true;
        }
        if(sentence>= "A" && sentence <= "Z"){
            hasUppercase = true;
        }
    }
    if(hasNumber===false){
        reasons.push("Add at least one Number")
    }
    if(hasUppercase === false){
        reasons.push("Write at least one Capital Latter")
    }
    if(hasSpace === true){
        reasons.push("Please Remove space from your password")
    }
    let isValid;
    if(reasons.length===0){
        isValid = true;
    }
    else{
        isValid = false
    }

    return{
        valid: isValid,
        reasons: reasons
    }
}

const input = checkPassword("Helloworld1")
console.log(input)
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
    const lan =password.length
    let hasNumber = false;
    let hasUppercase = false;
    let hasSpace = password.includes(" ")
    let reasons = []


    for(i=0; i<lan; i++){
        // console.log(password[i])
        let character = password[i]
        if(character>="0" && character<="9"){
            hasNumber = true;
        }

        if(character>="A" && character<="Z"){
            hasUppercase = true;
        }
    }



    if(hasNumber===false){
        reasons.push("Add at lest one Number")
    }

    if(hasUppercase===false){
        reasons.push("Need at lest one UpperCase latter")
    }
    if(hasSpace===true){
        reasons.push("Delete Space from your password")
    }

    let isValid ;

    if(reasons.length==0){
        isValid = true;
    }
    else{
        isValid= false;
    }

    return {
        valid: isValid,
        reasons: reasons
       

    }

}

const input = checkPassword("helloWorld1")
console.log(input)



const gradeToNum = {
    "A+": 12,
    "A": 11, 
    "A-": 10, 
    "B+": 9, 
    "B": 8, 
    "B-": 7, 
    "C+": 6, 
    "C": 5, 
    "C-": 4, 
    "D+": 3, 
    "D": 2, 
    "D-": 1, 
    "F": 0, 

}

const convertLetterToGPA = (letter) => {
    return gradeToNum[letter] || 0.0;
};


const calculate = ()=>{

    let credit1 = document.querySelector("#credit1").value;

    let gpa1 = querySelector("#gpa1").value;

    let multiply = parseFloat(course1)*parseFloat(credit1);

    let credit_sum = parseFloat(credit1);

    let term_gpa = 4;

    document.getElementById("show_gpa").innerHTML = term_gpa;
    

}


/*
//ensure reasonable values were inputted
function validation(){
    earned_credits = parseFloat(document.getElementById("cred").value);
    //gpa = parseFloat(document.getElementById("grades").value);
    if(earned_credits > 0)
    {
        document.getElementById("error").innerText = "";
        return(true);
    }
    else
    {
        document.getElementById("error").innerText = "Ensure your credits are a positive number!";    
    }
}

//add term calculation to cumulative calculation if desired

function addRecord(){
    if(validation() == true)
    {
        add_earnedCreds = document.getElementById("earned_credits").value;
        add_gpa = document.getElementById("gpa").value;

        creds[creds.length] = add_earnedCreds;
        gpas[gpas.length] = add_gpa;
    }

}
*/
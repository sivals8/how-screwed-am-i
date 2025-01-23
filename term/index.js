
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
r
    let credit1 = document.getElementById("credit1").innerText;

    let gpa1 = document.getElementById("gpa1").innerText;
    let gpa1convert = convertLetterToGPA(gpa1);

    let multiply = gpa1convert*parseFloat(credit1);

    let credit_sum = parseFloat(credit1);

    let term_gpa = multiply/credit_sum;
    
    var html="<p>Your GPA is: "+term_gpa+"</p>";
    document.getElementById("show_gpa").innerHTML = html;
}


console.log(calculate());

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
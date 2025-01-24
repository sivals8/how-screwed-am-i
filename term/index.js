
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


function calculate(){

    
    const credit1 = Number(document.getElementById('credit1').value);
    const credit2 = Number(document.getElementById('credit2').value);
    const credit3 = Number(document.getElementById('credit3').value);
    const credit4 = Number(document.getElementById('credit4').value);
    const credit5 = Number(document.getElementById('credit5').value);
    const credit6 = Number(document.getElementById('credit6').value);

    const grade1 = document.getElementById('grade1').value;
    const grade2 = document.getElementById('grade2').value; 
    const grade3 = document.getElementById('grade3').value;
    const grade4 = document.getElementById('grade4').value;
    const grade5 = document.getElementById('grade5').value;
    const grade6 = document.getElementById('grade6').value;

    const g1convert = convertLetterToGPA(grade1);
    const g2convert = convertLetterToGPA(grade2);
    const g3convert = convertLetterToGPA(grade3);
    const g4convert = convertLetterToGPA(grade4);
    const g5convert = convertLetterToGPA(grade5);
    const g6convert = convertLetterToGPA(grade6);

    const multiply = parseFloat(credit1)*parseFloat(g1convert) + parseFloat(credit2)*parseFloat(g2convert) + parseFloat(credit3)*parseFloat(g3convert) +
    parseFloat(credit4)*parseFloat(g4convert) + parseFloat(credit5)*parseFloat(g5convert) + parseFloat(credit6)*parseFloat(g6convert);

    const total_credits = credit1 + credit2 + credit3 + credit4 + credit5 + credit6;
    const term_gpa = multiply/total_credits;
    document.getElementById('show_gpa').innerHTML = term_gpa.toFixed(2);
    
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
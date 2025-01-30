
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

    const calc1 = parseFloat(credit1)*parseFloat(g1convert);
    const calc2 = parseFloat(credit2)*parseFloat(g2convert);
    const calc3 = parseFloat(credit3)*parseFloat(g3convert);
    const calc4 = parseFloat(credit4)*parseFloat(g4convert);
    const calc5 = parseFloat(credit5)*parseFloat(g5convert);
    const calc6 = parseFloat(credit6)*parseFloat(g6convert);

    const multiply = calc1 + calc2 + calc3 + calc4 + calc5 + calc6;

    const total_credits = credit1 + credit2 + credit3 + credit4 + credit5 + credit6;
    const term_gpa = multiply/total_credits;
    let term_gpaR = term_gpa.toFixed(2);
    
    if(isNaN(term_gpaR))
    {
        alert("Error: Make sure to fill out both fields of a course.")
    }
    else if(!isNaN(credit1) && credit1 < 0)
    {
        alert("Make sure to enter a positive credit value.")
    }
    else if(!isNaN(credit2) && credit2 < 0)
    {
        alert("Make sure to enter a positive credit value.")
    }
    else if(!isNaN(credit3) && credit3 < 0)
    {
        alert("Make sure to enter a positive credit value.")
    }
    else if(!isNaN(credit4) && credit4 < 0)
    {
        alert("Make sure to enter a positive credit value.")
    }
    else if(!isNaN(credit5) && credit5 < 0)
    {
        alert("Make sure to enter a positive credit value.")
    }
    else if(!isNaN(credit6) && credit6 < 0)
    {
        alert("Make sure to enter a positive credit value.")
    }
    else
    {

        document.getElementById('show_gpa').innerHTML = term_gpaR;
        document.getElementById('small_12').innerHTML = "/12";

        let number = document.getElementById("circle_number");
        let counter = 0;
        let speed = 0.5;
        let interval = setInterval(() => {
            if(counter >= term_gpa)
            {
                clearInterval(interval);
                number.innerHTML = term_gpaR;
            }
            else{
                speed = 0.018*term_gpaR;
                counter += speed;
                number.innerHTML = counter.toFixed(2);
            }
            

        }, 30);

        const circlePercent = 440 - (440*(term_gpaR/12));
        document.documentElement.style.setProperty('--main-gpa', circlePercent);
        let circle = document.getElementById('circle');
   
    }
    
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
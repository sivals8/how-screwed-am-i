let numOfAdds = 0;
let add = false;
function addRow(){
    numOfAdds ++;
    var table = document.getElementById("course_name");
    var row = table.insertRow(0);
    add = true;
    return 1;
}

let prev_gpa = 0;

function CGPAcalculate(){
    let allCredits = [];
    let allGrades = [];
    let totalCredits = 0;
    let totalNumerator = 0;
    let size = 6;
    if(add == true)
    {
        size = 6 + numOfAdds;
    }
    for(let i = 1; i <= size; i++)
    {
        allCredits.push(Number(document.getElementById(`Ccredit${i}`).value));
        allGrades.push(Number(document.getElementById(`Cgrade${i}`).value));
    }

    for(let j = 0; j < size; j++)
    {
        totalCredits += allCredits[j];
        totalNumerator += (allGrades[j] * allCredits[j]);
    }


    const term_gpa = totalNumerator / totalCredits;
    let term_gpaR = term_gpa.toFixed(2);
    
    let error = 0;
    let outOfRange = 0;
    for(let k = 0; k < size; k++)
    {
        if(allCredits[k] < 0 || allGrades[k] < 0)
        {
            error = 1;
        }
        
        if(allGrades[k] > 12)
        {
            outOfRange = 1;
        }
    }

    if(isNaN(term_gpaR))
    {
        alert("Error: Make sure to fill out both fields of a course, and ensure credit is a non-zero value.")
    }
    else if(error == 1)
    {
        alert("Make sure to enter positive values.")
    }
    else if(outOfRange == 1)
    {
        alert("It is not possible to have a GPA larger than 12, please adjust your input.")
    }
    else
    {

        document.getElementById('Cshow_gpa').innerHTML = term_gpaR;
        document.getElementById('Csmall_12').innerHTML = "/12";
        document.getElementById("Ccircle_number").innerHTML = term_gpaR;
        let number = document.getElementById("Ccircle_number");
        let counter = prev_gpa;
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

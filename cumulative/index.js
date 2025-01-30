let numOfAdds = 0;
let add = false;
function addRow(){
    numOfAdds ++;
    var table = document.getElementById("course_name");
    var row = table.insertRow(0);
    add = true;
    return 1;
}



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
    


    document.getElementById('Cshow_gpa').innerHTML = term_gpaR;
    document.getElementById('Csmall_12').innerHTML = "/12";
    document.getElementById("Ccircle_number").innerHTML = term_gpaR;
    let number = document.getElementById("Ccircle_number");
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

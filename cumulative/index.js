
function CGPAcalculate(){

    
    const credit1 = Number(document.getElementById('Ccredit1').value);
    const credit2 = Number(document.getElementById('Ccredit2').value);
    const credit3 = Number(document.getElementById('Ccredit3').value);
    const credit4 = Number(document.getElementById('Ccredit4').value);
    const credit5 = Number(document.getElementById('Ccredit5').value);
    const credit6 = Number(document.getElementById('Ccredit6').value);

    const grade1 = Number(document.getElementById('Cgrade1').value);
    const grade2 = Number(document.getElementById('Cgrade2').value); 
    const grade3 = Number(document.getElementById('Cgrade3').value);
    const grade4 = Number(document.getElementById('Cgrade4').value);
    const grade5 = Number(document.getElementById('Cgrade5').value);
    const grade6 = Number(document.getElementById('Cgrade6').value);

    const calc1 = parseFloat(credit1)*parseFloat(grade1);
    const calc2 = parseFloat(credit2)*parseFloat(grade2);
    const calc3 = parseFloat(credit3)*parseFloat(grade3);
    const calc4 = parseFloat(credit4)*parseFloat(grade4);
    const calc5 = parseFloat(credit5)*parseFloat(grade5);
    const calc6 = parseFloat(credit6)*parseFloat(grade6);

    const multiply = calc1 + calc2 + calc3 + calc4 + calc5 + calc6;

    const total_credits = credit1 + credit2 + credit3 + credit4 + credit5 + credit6;
    const term_gpa = multiply/total_credits
    let term_gpaR = term_gpa.toFixed(2);
    


    document.getElementById('Cshow_gpa').innerHTML = '12';
    document.getElementById('Csmall_12').innerHTML = "/12";
    document.getElementById("Ccircle_number").innerHTML = 5;
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
    document.documentElement.style.setProperty('--main-gpaC', circlePercent);
    let circle = document.getElementById('circle');


    
}

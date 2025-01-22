//ensure reasonable values were inputted
function validation(){
    earned_credits = parseFloat(document.getElementById("cred").value);
    /*gpa = parseFloat(document.getElementById("grades").value);*/
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
    }

}
function cal(){
    var mname = document.getElementById("name1").value;
    var fname = document.getElementById("name2").value;

    var result=Math.random()*100;
    var par = document.getElementById("result");
    par.innerHTML = "The compatibility between " + mname + " and " + fname + " is " + result.toFixed(2) + "%";

    if (result > 80) {
        par.style.border.color = "green";
    } else if (result > 60 && result <= 80) {
        par.style.color = "orange";
    } else{
        par.style.color = "red";
    }
}
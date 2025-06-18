function cal(){
    var mname = document.getElementById("name1").value;
    var fname = document.getElementById("name2").value;

    var result=Math.random()*100;

    par.innerHTML = "The compatibility between " + mname + " and " + fname + " is " + result.toFixed(2) + "%";

}
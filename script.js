function calculateSI(){

    let p = parseFloat(document.getElementById("principal").value);
    let r = parseFloat(document.getElementById("rate").value);
    let t = parseFloat(document.getElementById("time").value);

    if(isNaN(p) || isNaN(r) || isNaN(t)){
        alert("Please enter all values");
        return;
    }

    let si = (p*r*t)/100;

    document.getElementById("result").innerHTML =
    "Simple Interest = ₹ " + si.toFixed(2);
}

function clearFields(){

    document.getElementById("principal").value="";
    document.getElementById("rate").value="";
    document.getElementById("time").value="";
    document.getElementById("result").innerHTML="";
}
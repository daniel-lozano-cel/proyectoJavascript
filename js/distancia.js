
let distance;

const conversion = [
    kilometer = 1000,
    miles = 0,00062137,
];
conversion.unshift(centimeter = 100);

document.getElementById("convertButton").onclick = function (){

    distance = parseInt(document.getElementById("numTextBox").value);

    document.getElementById("resultLabelA").innerHTML = "Centímetros: " + distance * conversion[0]; 
    document.getElementById("resultLabelB").innerHTML = "Kilometros: " + distance / conversion[1]; 
    document.getElementById("resultLabelC").innerHTML = "Millas: " + distance / conversion[2]; 

}

function save_localStorage(){
    let creator = {
        "name" : "Daniel Lozano",
        "email" : "danielozano435@gmail.com",
        "age" : "23"
    };
    let name = "Daniel Lozano Cely";
    localStorage.setItem("nombre",name);
    localStorage.setItem("data", JSON.stringify(creator));
}
save_localStorage()
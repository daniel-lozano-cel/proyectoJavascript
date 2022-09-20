let time;

const conversion = [
    minutos = 60,
    horas = 3600,
    dias = 8640
];

conversion.push(semanas = 604800);

document.getElementById("convertButton").onclick = function (){

    time = parseInt(document.getElementById("numTextBox").value);

    document.getElementById("resultLabelA").innerHTML = "Minutos: " + time / conversion[0]; 
    document.getElementById("resultLabelB").innerHTML = "Horas: " + time / conversion[1]; 
    document.getElementById("resultLabelC").innerHTML = "Días: " + time / conversion[2]; 
    document.getElementById("resultLabelD").innerHTML = "Semanas: " + time / conversion[3]; 
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

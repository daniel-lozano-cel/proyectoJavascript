let distance;
let ten = document.getElementById('ten');


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

    return(distance >= 100 ? ten.textContent = "Son más de 100 metros!" : ten.textContent = null );
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
    let nombre = creator.name
    console.log(nombre);
}
save_localStorage()
console.log(Math.max(...conversion));
Swal.fire(
    'F5 para actualizar la página',
    'Sweetalert2',
)
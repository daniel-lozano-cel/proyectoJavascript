let temperature;
let ten = document.getElementById('ten');


document.getElementById("convertButton").onclick = function (){


    temperature = parseInt(document.getElementById("numTextBox").value);

    kelvin1 = 273.15 + temperature;
    fahrenheit = (temperature * 1.8) + 32;

    document.getElementById("resultLabelA").innerHTML = "Kelvin: " + kelvin1;
    document.getElementById("resultLabelB").innerHTML = "Fahrenheit: " + fahrenheit; 

    return(time >= 20 ? ten.textContent = "Son más de 20 grados!" : ten.textContent = null );
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
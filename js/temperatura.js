//Declaracíon de variables
let input = document.getElementById('input');
let result = document.getElementById('result');
let inputType = document.getElementById('inputType');
let resultType = document.getElementById('resultType');
let inputTypeValue, resultTypeValue;

//Eventos añadidos que invocan a la función que realiza el codigo
input.addEventListener('keyup',myResult);
inputType.addEventListener('change',myResult);
resultType.addEventListener('change',myResult);

inputTypeValue = inputType.value;
resultTypeValue = resultType.value;


//Función que realiza el proceso de conversión
function myResult(){
    inputTypeValue = inputType.value;
    resultTypeValue = resultType.value;

    if(inputTypeValue === "celcius" && resultTypeValue === "kelvin"){
        result.value = Number(input.value) + 273.15;
    }else if(inputTypeValue === "celcius" && resultTypeValue ==="fahrenheit"){
        result.value = (Number(input.value) * 1.8) +32;
    }else if(inputTypeValue === "celcius" && resultTypeValue ==="celcius"){
        result.value = input.value
    }

    if(inputTypeValue === "kelvin" && resultTypeValue === "celcius"){
        result.value = Number(input.value) - 273.15;
    }else if(inputTypeValue === "kelvin" && resultTypeValue ==="fahrenheit"){
        result.value = (Number(input.value) - 273.15) * 1.8 + 32;
    }else if(inputTypeValue === "kelvin" && resultTypeValue ==="kelvin"){
        result.value = input.value
    }

    if(inputTypeValue === "fahrenheit" && resultTypeValue === "celcius"){
        result.value = (Number(input.value) - 32) * 5 / 9;
    }else if(inputTypeValue === "fahrenheit" && resultTypeValue ==="kelvin"){
        result.value = (Number(input.value) -32 ) * 5 / 9 +273.15;
    }else if(inputTypeValue === "fahrenheit" && resultTypeValue ==="fahrenheit"){
        result.value = input.value
    }
    
};

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

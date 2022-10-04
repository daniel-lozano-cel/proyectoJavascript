//Declaracion de variables
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

    if(inputTypeValue === "mins" && resultTypeValue === "secs"){
        result.value = Number(input.value) * 60;
    }else if(inputTypeValue === "mins" && resultTypeValue ==="hrs"){
        result.value = Number(input.value) / 60;
    }else if(inputTypeValue === "mins" && resultTypeValue ==="days"){
        result.value = Number(input.value) / 1440;
    }else if(inputTypeValue === "mins" && resultTypeValue ==="weeks"){
        result.value = Number(input.value) / 10080;
    }else if(inputTypeValue === "mins" && resultTypeValue ==="mins"){
        result.value = input.value
    }

    if(inputTypeValue === "secs" && resultTypeValue === "mins"){
        result.value = Number(input.value) / 60;
    }else if(inputTypeValue === "secs" && resultTypeValue ==="hrs"){
        result.value = Number(input.value) / 3600;
    }else if(inputTypeValue === "secs" && resultTypeValue ==="days"){
        result.value = Number(input.value) / 86400;
    }else if(inputTypeValue === "secs" && resultTypeValue ==="weeks"){
        result.value = Number(input.value) / 604800; 
    }else if(inputTypeValue === "secs" && resultTypeValue ==="secs"){
        result.value = input.value
    }

    if(inputTypeValue === "hrs" && resultTypeValue === "mins"){
        result.value = Number(input.value) * 60;
    }else if(inputTypeValue === "hrs" && resultTypeValue ==="secs"){
        result.value = Number(input.value) * 3600;
    }else if(inputTypeValue === "hrs" && resultTypeValue ==="days"){
        result.value = Number(input.value) / 24;
    }else if(inputTypeValue === "hrs" && resultTypeValue ==="weeks"){
        result.value = Number(input.value) * 168;
    }else if(inputTypeValue === "hrs" && resultTypeValue ==="hrs"){
        result.value = input.value
    }

    if(inputTypeValue === "days" && resultTypeValue === "mins"){
        result.value = Number(input.value) * 1440;
    }else if(inputTypeValue === "days" && resultTypeValue ==="secs"){
        result.value = Number(input.value) * 86400;
    }else if(inputTypeValue === "days" && resultTypeValue ==="hrs"){
        result.value = Number(input.value) * 24;
    }else if(inputTypeValue === "days" && resultTypeValue ==="weeks"){
        result.value = Number(input.value) / 7;
    }else if(inputTypeValue === "days" && resultTypeValue ==="days"){
        result.value = input.value
    }

    if(inputTypeValue === "weeks" && resultTypeValue === "mins"){
        result.value = Number(input.value) * 10080;
    }else if(inputTypeValue === "weeks" && resultTypeValue ==="secs"){
        result.value = Number(input.value) * 604800;
    }else if(inputTypeValue === "weeks" && resultTypeValue ==="hrs"){
        result.value = Number(input.value) * 168;
    }else if(inputTypeValue === "weeks" && resultTypeValue ==="days"){
        result.value = Number(input.value) * 7;
    }else if(inputTypeValue === "weeks" && resultTypeValue ==="weeks"){
        result.value = input.value
    }
    
};



//Declaración de variables
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

    if(inputTypeValue === "meter" && resultTypeValue === "kilometer"){
        result.value = Number(input.value) * 0.001;
    }else if(inputTypeValue === "meter" && resultTypeValue ==="centimeter"){
        result.value = Number(input.value) * 100;
    }else if(inputTypeValue === "meter" && resultTypeValue ==="meter"){
        result.value = input.value
    }

    if(inputTypeValue === "kilometer" && resultTypeValue === "meter"){
        result.value = Number(input.value) * 1000;
    }else if(inputTypeValue === "kilometer" && resultTypeValue ==="centimeter"){
        result.value = Number(input.value) * 100000;
    }else if(inputTypeValue === "kilometer" && resultTypeValue ==="kilometer"){
        result.value = input.value
    }

    if(inputTypeValue === "centimeter" && resultTypeValue === "kilometer"){
        result.value = Number(input.value) * 0.00001;
    }else if(inputTypeValue === "centimeter" && resultTypeValue ==="meter"){
        result.value = Number(input.value) * 0.01;
    }else if(inputTypeValue === "centimeter" && resultTypeValue ==="centimeter"){
        result.value = input.value
    }
    
};

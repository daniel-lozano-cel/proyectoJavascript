let input = document.getElementById('input');
let result = document.getElementById('result');
let inputType = document.getElementById('inputType');
let resultType = document.getElementById('resultType');
let inputTypeValue, resultTypeValue;

input.addEventListener('keyup',myResult);
inputType.addEventListener('change',myResult);
resultType.addEventListener('change',myResult);

inputTypeValue = inputType.value;
resultTypeValue = resultType.value;

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

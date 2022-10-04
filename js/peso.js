//Declaración de variables
let input = document.getElementById('input');
let result = document.getElementById('result');
let inputType = document.getElementById('inputType');
let resultType = document.getElementById('resultType');
let inputTypeValue, resultTypeValue;

//Eventos con clicks del usuario que invocan la función
input.addEventListener('keyup',myResult);
inputType.addEventListener('change',myResult);
resultType.addEventListener('change',myResult);

inputTypeValue = inputType.value;
resultTypeValue = resultType.value;

function myResult(){
    inputTypeValue = inputType.value;
    resultTypeValue = resultType.value;

    if(inputTypeValue === "kgs" && resultTypeValue === "grams"){
        result.value = Number(input.value) * 1000;
    }else if(inputTypeValue === "kgs" && resultTypeValue ==="tons"){
        result.value = Number(input.value) / 1000;
    }else if(inputTypeValue === "kgs" && resultTypeValue ==="onz"){
        result.value = Number(input.value) * 35.274;
    }else if(inputTypeValue === "kgs" && resultTypeValue ==="kgs"){
        result.value = input.value
    }

    if(inputTypeValue === "grams" && resultTypeValue === "kgs"){
        result.value = Number(input.value) / 1000;
    }else if(inputTypeValue === "grams" && resultTypeValue ==="tons"){
        result.value = Number(input.value) / 1000000;
    }else if(inputTypeValue === "grams" && resultTypeValue ==="onz"){
        result.value = Number(input.value) / 28.35;
    }else if(inputTypeValue === "grams" && resultTypeValue ==="grams"){
        result.value = input.value
    }

    if(inputTypeValue === "tons" && resultTypeValue === "kgs"){
        result.value = Number(input.value) * 1000;
    }else if(inputTypeValue === "tons" && resultTypeValue ==="grams"){
        result.value = Number(input.value) * 1000000;
    }else if(inputTypeValue === "tons" && resultTypeValue ==="onz"){
        result.value = Number(input.value) * 35270;
    }else if(inputTypeValue === "tons" && resultTypeValue ==="tons"){
        result.value = input.value
    }
    
    if(inputTypeValue === "onz" && resultTypeValue === "kgs"){
        result.value = Number(input.value) / 35274;
    }else if(inputTypeValue === "onz" && resultTypeValue ==="grams"){
        result.value = Number(input.value) * 28.35;
    }else if(inputTypeValue === "onz" && resultTypeValue ==="tons"){
        result.value = Number(input.value) / 35270;
    }else if(inputTypeValue === "onz" && resultTypeValue ==="onz"){
        result.value = input.value
    }
};

//Storage y JSON
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

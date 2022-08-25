let userName = window.prompt("Inserte su nombre de usuario: ");
let horas = 0;
let minutos = 0;
let dias = 0;
let i = 0;

function contador(){
    if(i > 3){
        window.alert("Intentos agotados, recargue la página.")
    }
}


while(userName == "" || userName == null){

    i = i + 1;
    let userName = window.prompt("Inserte su nombre de usuario: ");

    console.log("Por favor ingrese un nombre válido")
    console.log(i);

    contador();
    
}

console.log("Bienvenido, " + userName);

let time = parseFloat(window.prompt("Inserte cantidad de tiempo en segundos: "));

minutos = time / 60;
horas = time / 3600;
dias = time / 86400;

console.log("Cantidad de tiempo insertada: " + time);
console.log("Minutos: " + minutos);
console.log("Horas: " + horas);
console.log("Días: " + dias);



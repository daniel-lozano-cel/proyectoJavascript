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

const conversion = [
    minutos = 60,
    horas = 3600,
    dias = 8640
];
conversion.push(semanas = 604800);


console.log("Cantidad de tiempo insertada: " + time);
console.log("Minutos: " + time / conversion[0]);
console.log("Horas: " + time / conversion[1]);
console.log("Días: " + time / conversion[2]);
console.log("Semanas: " + time / conversion[3]);

for (let i = 0; i < conversion.length; i++){
    console.log("El valor por el que es dividido el tiempo al operar es: " + conversion[i]);
}
console.log("Cantidad de elementos en el grupo de conversión: " + conversion.length);

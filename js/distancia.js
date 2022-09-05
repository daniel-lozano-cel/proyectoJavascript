
let distance = parseInt(window.prompt('Inserte la distancia a convertir en metros: '));

const conversion = [
    kilometer = 1000,
    miles = 0,00062137,
];
conversion.unshift(centimeter = 100);

console.log("Cantidad de metros insertada: " + distance);
console.log("Centimetros " + distance * conversion[0]);
console.log("Kilometros: " + distance / conversion[1]);
console.log("Millas: " + distance / conversion[2]);

conversion.forEach((num)=>{
    console.log("Valor por el que el numero es operado",num);   
})
console.log("Cantidad de elementos en el array de conversión: " + conversion.length);



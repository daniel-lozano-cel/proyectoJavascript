let temperature = parseInt(window.prompt('Inserte la temperatura a convertir en grados Celcius: '));
let kelvin1 = 273.15 + temperature;
let fahrenheit = (temperature * 1.8) + 32;


console.log("Cantidad de temperatura insertada: " + temperature);
console.log("Kelvin: " + kelvin1);
console.log("Fahrenheit: " + fahrenheit);

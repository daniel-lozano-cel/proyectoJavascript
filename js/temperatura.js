let temperature;

document.getElementById("convertButton").onclick = function (){


    temperature = parseInt(document.getElementById("numTextBox").value);

    kelvin1 = 273.15 + temperature;
    fahrenheit = (temperature * 1.8) + 32;

    document.getElementById("resultLabelA").innerHTML = "Kelvin: " + kelvin1;
    document.getElementById("resultLabelB").innerHTML = "Fahrenheit: " + fahrenheit; 
}

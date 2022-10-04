//Variable para el contador
let i = 0;

//Botón para aumentar el conteo
increaseBtn.addEventListener('click', ()=>{
    i += 1;
    document.getElementById("num").innerHTML = i;
})

//Botón para reiniciar el conteo
resetBtn.addEventListener('click', ()=>{
    i = 0;
    document.getElementById("num").innerHTML = i;
})

//Botón para bajar el conteo
decreaseBtn.addEventListener('click', ()=>{
    i -= 1;
    document.getElementById("num").innerHTML = i;
})
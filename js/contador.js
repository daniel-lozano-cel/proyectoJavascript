let i = 0;
increaseBtn.addEventListener('click', ()=>{
    i += 1;
    document.getElementById("num").innerHTML = i;
})
resetBtn.addEventListener('click', ()=>{
    i = 0;
    document.getElementById("num").innerHTML = i;
})
decreaseBtn.addEventListener('click', ()=>{
    i -= 1;
    document.getElementById("num").innerHTML = i;
})
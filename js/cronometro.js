//Declaración de variables

const timeDisplay = document.querySelector("#display");
const startBtn = document.querySelector("#startBtn");
const pauseBtn = document.querySelector("#pauseBtn");
const resetBtn = document.querySelector("#resetBtn");

let startTime = 0;
let lapsedTime = 0;
let currentTime = 0;
let paused = true;
let hrs = 0;
let mins = 0;
let secs = 0;

//Botón que inicia el tiempo
startBtn.addEventListener("click", () => {
    if(paused){
        paused = false;
        startTime = Date.now() - lapsedTime;
        intervalid = setInterval(updateTime, 1000);
    }
});

//Botón que pausa el tiempo
pauseBtn.addEventListener("click", () => {
    if(!paused){
        paused = true;
        lapsedTime = Date.now() - startTime;
        clearInterval(intervalid);
    }
});

//Botón que reinicia el tiempo
resetBtn.addEventListener("click", () => {
    paused = true;
    clearInterval(intervalid);
    startTime = 0;
    lapsedTime = 0;
    currentTime = 0;
    hrs = 0;
    mins = 0;
    secs = 0;
    timeDisplay.textContent = "00:00:00";
});

function updateTime(){
    lapsedTime = Date.now() - startTime;
    secs = Math.floor((lapsedTime / 1000) % 60);
    mins = Math.floor((lapsedTime / (1000*60)) % 60);
    hrs = Math.floor((lapsedTime / (1000 * 60 * 60)) % 60);

    secs = pad(secs);
    mins = pad(mins);
    hrs = pad(hrs);

    timeDisplay.textContent = `${hrs}:${mins}:${secs}`;

    function pad(unit){
        return (("0")+ unit).length > 2 ? unit : "0" + unit;
    }
}
const mintuelabel= document.getElementById('minutes');
const secondlabel= document.getElementById('seconds');
const milisencondlabel= document.getElementById('milliseconds');

const startbutton = document.getElementById('startbtn');
const stopbutton = document.getElementById('stopbtn');
const pausebutton = document.getElementById('pausebtn');
const resetbutton = document.getElementById('resetbtn');

const laptimer = document.getElementById('laplist');


let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let interval;

startbutton.addEventListener('click',starttimer);
stopbutton.addEventListener('click',stoptimer);
pausebutton.addEventListener('click',pausetimer);
resetbutton.addEventListener('click',resettimer);

function starttimer(){

    interval = setInterval(updatetimer,10);
    startbutton.disabled = true;
}

function stoptimer(){
    clearInterval(interval);
    addtolaplist();
    resettimerdata();
    startbutton.disabled = false;
}

function pausetimer(){
    clearInterval(interval);
    startbutton.disabled = false;
}

function resettimer(){
    clearInterval(interval);
    resettimerdata();
}

function updatetimer(){
    milliseconds++;
    if(milliseconds === 100){
        milliseconds = 0;
        seconds++;
        if(seconds === 60){
            seconds = 0;
            minutes++;
        }
    }
    displaytimer();
}

function displaytimer(){
    milisencondlabel.textContent = milliseconds;
    secondlabel.textContent = seconds;
    mintuelabel.textContent = minutes;
}

function resettimerdata(){
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    displaytimer();
}

function addtolaplist(){
    const laptime = ` ${minutes}:${seconds}:${milliseconds}`;

    const lapitem = document.createElement("li");
    lapitem.innerHTML = `<span>Lap ${laptimer.childElementCount + 1}</span>${laptime}`;
    laptimer.appendChild(lapitem);
}
console.log("ansari");
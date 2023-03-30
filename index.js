const button_start = document.getElementsByClassName("click_restart").item(0)
const button_stop  = document.getElementsByClassName("click_stop").item(0)
const box_time = document.getElementById("time")
const icon = document.getElementById("icon")
const svg = document.getElementById("svg")

let interval;
let timestamp;

const stop = () => {
    box_time.innerText = "01:00";
    clearInterval(interval)
    icon.className = " icon"
    svg.className = " svg"
}

const start = () => {
    let finished_time = new Date()
    finished_time.setSeconds( finished_time.getSeconds() + 61 )
    timestamp = finished_time.getTime()
    icon.className += " scalling_true"
    svg.className += " spinning_true"
    interval = setInterval(setIn, 1000)
}

const setIn = () => {
    let now =  timestamp - new Date().getTime()
    let min = new Date(now).getMinutes()
    let sec = new Date(now).getSeconds()
    box_time.innerText = `${Number(min) <= 9 ? "0" + min : min}:${Number(sec) <= 9 ? "0" + sec : sec}`
    if(min === 0 && sec === 0){
        stop()
    }
}


button_start.addEventListener("click",start)
button_stop.addEventListener("click", stop)


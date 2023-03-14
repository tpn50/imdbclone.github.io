//Timer

let hr = document.getElementById("hr");
let min = document.getElementById("min");
let sec = document.getElementById("sec");
let msec = document.getElementById("ms");

// Buttons

let resetButton = document.getElementById("reset");
let startButton = document.getElementById("start");
let lapButton = document.getElementById("lap");

//Outline
let stopwatch = document.getElementById("StopWatch");
// Initial

let count = 0;
let hours = 0;
let minutes = 0;
let seconds = 0;
let millisec = 0;

hr.innerText = "00";
min.innerText = "00";
sec.innerText = "00";
msec.innerText = "00";

let running = false;

// start && stop

startButton.addEventListener("click", start);
function start() {
  if (!running) {
    myInterval = setInterval(increment, 10);
  } else {
    clearInterval(myInterval);
  }
  running = !running;
}

function increment() {
  millisec++;
  if (millisec == 100) {
    seconds++;
    millisec = 0;
  }

  if (seconds == 60) {
    minutes++;
    seconds = 0;
    millisec = 0;
  }

  if (minutes == 60) {
    minutes++;
    seconds = 0;
    millisec = 0;
  }

  if (hours < 10) {
    hr.innerText = "0" + hours;
  } else {
    hr.innerText = hours;
  }

  if (minutes < 10) {
    min.innerText = "0" + minutes;
  } else {
    min.innerText = minutes;
  }

  if (seconds < 10) {
    sec.innerText = "0" + seconds;
  } else {
    sec.innerText = seconds;
  }

  if (millisec < 10) {
    msec.innerText = "0" + millisec;
  } else {
    msec.innerText = millisec;
  }
  //min.innerText = minutes;
  // sec.innerText = seconds;
  // msec.innerText = millisec;
}

//lap

lapButton.addEventListener("click", lap);

function lap() {
  var d = document.createElement("div");
  d.id = "laps";
  d.innerHTML = document.getElementById("time").innerHTML;
  stopwatch.appendChild(d);
  count++;
  console.log(count);
}

// Reset Button

resetButton.addEventListener("click", reset);
function reset() {
  hours = 00;
  minutes = 00;
  seconds = 00;
  millisec = 00;
  running = false;

  hr.innerText = "00";
  min.innerText = "00";
  sec.innerText = "00";
  msec.innerText = "00";

  clearInterval(myInterval);

  while (count) {
    document.querySelector("#laps").remove();
    count--;
  }
}

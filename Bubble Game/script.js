var timer = 60;
var score = 0;
var hitNum = 0;
function makeBubble() {
  let clutter = "";

  for (let i = 0; i < 85; i++) {
    let num = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble"> ${num}</div>`;
  }
  document.querySelector("#pan-btm").innerHTML = clutter;
}

function runTimer() {
  let time = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#timerValue").textContent = timer;
    } else {
      clearInterval(time);
      document.querySelector("#pan-btm").innerHTML =  `<h1 class="Over"> ${"GAME OVER"}</h1>`;
      // document.querySelector("#pan-btm").innerHTML =  `<h3 class="Over"> ${"Your score is"} ${score}</h3>`;
      
    }
  },1000);
}

function NewHit() {
  hitNum = Math.floor(Math.random() * 10);
  document.querySelector("#hit").textContent = hitNum;
}

function updateScore() {
  score += 10;
  document.querySelector("#score").textContent = score;
}

document.querySelector("#pan-btm").addEventListener("click", function (dets) {
  let clickedNum = Number(dets.target.textContent);
  if (clickedNum === hitNum) {
    updateScore();
    makeBubble();
    NewHit();
  }
});
runTimer();
makeBubble();
NewHit();

const circles = document.querySelectorAll('.circle');
const timer = document.querySelector('.timer')
const min = 0;
const sec = 61;
let remainingTime;

const minutes = min * 60000;
const seconds = sec * 1000;
const setTime = minutes + seconds;
const starTime = Date.now();
let futureTime = starTime + setTime;
const timerLoop = setInterval(countDownTimer);

function countDownTimer() {
  const currentTime = Date.now();
  remainingTime = futureTime - currentTime;
  const angle = (remainingTime / setTime) * 360;
  if(angle > 180) {
    circles[2].style.display = 'none';
    circles[0].style.transform = 'rotate(180deg)';
    circles[1].style.transform = `rotate(${angle}deg)`;
    
  }else {
    circles[2].style.display = 'block';
    circles[0].style.transform = `rotate(${angle}deg)`;
    circles[1].style.transform = `rotate(${angle}deg)`;
  }
  
  const mins = Math.floor((remainingTime / (1000 * 60)) % 60).toLocaleString('en-US',{minimumIntegerDigits: 2, useGrouping:false});
  const secs = Math.floor((remainingTime / 1000) % 60).toLocaleString('en-US',{minimumIntegerDigits: 2, useGrouping:false});

  timer.innerHTML = `
  <div>${mins}</div>
  <div class="colon">:</div>
  <div>${secs}</div>
  `;
  
  if(remainingTime < 0) {
    clearInterval(timerLoop);
    circles[0].style.display = 'none';
    circles[1].style.display = 'none';
    circles[2].style.display = 'none';

    timer.innerHTML = `
    <div>00</div>
    <div class="colon">:</div>
    <div>00</div>
    `;
  }
}
function addTime() {
  if (remainingTime >= 50000){
    futureTime += setTime - remainingTime 
  }
  else{
    futureTime += 10000;
  }
}
document.querySelector('.add-time-btn').addEventListener('click', () => {
  addTime();
});

function skipTime() {
  futureTime -= 5000;
}
document.querySelector('.add-skip-btn').addEventListener('click', () => {
  skipTime();
});

function skip() {
  futureTime = 0;
}
document.querySelector('.clear-btn').addEventListener('click', () => {
  skip();
});

function restart() {
  location.reload();
}
document.querySelector('.restart-btn').addEventListener('click', () => {
  restart();
});

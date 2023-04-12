const refs = {
    timer: document.getElementById("timer"),
    stopBtn: document.getElementById("stopBtn"),
    startBtn: document.getElementById("startBtn"),
};

const countDownDate = new Date(`Jan 1 ${new Date().getFullYear() + 1}`);



countDownTimeToNY();
let timerId = setInterval(countDownTimeToNY, 1000);

function countDownTimeToNY() {
    const now = new Date();

    const diff = countDownDate - now;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor(diff / (1000 * 60 * 60) % 24);
    const minutes = Math.floor(diff / (1000 * 60) % 60);
    const seconds = Math.floor(diff / (1000) % 60);
    refs.timer.textContent = `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`;
}
 

refs.stopBtn.addEventListener("click", stopTimer);

function stopTimer() {
    alert('Timer stoped!')
    clearInterval(timerId)
}



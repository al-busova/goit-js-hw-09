function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonStartEl = document.querySelector('[data-start]');
const buttonStopEl = document.querySelector('[data-stop]');
let timerId = null;

buttonStartEl.addEventListener('click', startChangeBgColor );
buttonStopEl.addEventListener('click', stopChangeBgColor);

function startChangeBgColor() {
   timerId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
   }, 1000);
    buttonStartEl.disabled = true;
}

function stopChangeBgColor() {
    clearInterval(timerId);
    buttonStartEl.disabled = false;
}



const counterElement = document.getElementById("counter");
const addButton = document.getElementById("add");
const reduceButton = document.getElementById("reduce");
const autoButton = document.getElementById("auto");

let counterValue = 0;
let intervalId = null;

counterElement.innerText = counterValue;

addButton.addEventListener("click", () => {
  counterValue++;
  counterElement.innerText = counterValue;
});

reduceButton.addEventListener("click", () => {
  if (counterValue == 0) return;
  counterValue--;
  counterElement.innerText = counterValue;
});

autoButton.addEventListener("click", () => {
  if (intervalId !== null) {
    clearInterval(intervalId);
    intervalId = null;
    autoButton.innerText = "Start";
  } else {
    intervalId = setInterval(() => {
      counterValue++;
      counterElement.innerText = counterValue;
    }, 1000);
    autoButton.innerText = "Stop";
  }
});

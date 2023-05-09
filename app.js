const rollButton = document.querySelector(".roll");
const diceEl = document.querySelector(".dice");
const historyEl = document.querySelector(".history");
let history = [];

const updateDice = (number) => {
  switch (number) {
    case 1:
      return "&#9856;";
    case 2:
      return "&#9857;";
    case 3:
      return "&#9858;";
    case 4:
      return "&#9859;";
    case 5:
      return "&#9860;";
    case 6:
      return "&#9861;";
    default:
      return "";
  }
};

const updateHistory = () => {
  historyEl.innerHTML = "";
  for (let i = 0; i < history.length; i++) {
    const item = document.createElement("li");
    item.innerHTML = `Roll ${i + 1}: <span>${updateDice(history[i])}</span>`;
    historyEl.append(item);
  }
};

const randomDice = () => {
  const randomNumber = Math.floor(Math.random() * 6) + 1;
  const dice = updateDice(randomNumber);
  diceEl.innerHTML = dice;
  history.push(randomNumber);
  updateHistory();
};

rollButton.addEventListener("click", () => {
  diceEl.classList.add("roll-animation");
  setTimeout(() => {
    diceEl.classList.remove("roll-animation");
    randomDice();
  }, 1000);
});

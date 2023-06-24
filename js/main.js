function allowDrop(event) {
  event.preventDefault();
}

function drag(event) {
  event.dataTransfer.setData("text", event.target.id);
}

function drop(event) {
  event.preventDefault();
  let data = event.dataTransfer.getData("text");
  event.target.appendChild(document.getElementById(data));
}

const board = document.querySelector(".board");
const dragElements = document.querySelectorAll(".drag-box");

const initialBoardHTML = board.innerHTML;
const initialDragElementsHTML = Array.from(dragElements).map(
  (element) => element.innerHTML
);

function resetGame() {
  board.innerHTML = initialBoardHTML;

  dragElements.forEach((element, index) => {
    element.innerHTML = initialDragElementsHTML[index];
  });
}

const resetButton = document.querySelector(".reset");
resetButton.addEventListener("click", resetGame);

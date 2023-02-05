const board = document.querySelector("#board");
let boardSize = 11;
const buttons = document.querySelectorAll("button:not(#newGridConfirmation)");
const newGridButton = document.querySelector("#newGridConfirmation");
const gridlineButton = document.querySelector("#gridlines");
let isGridOn = false;
let mouseDownInBoard = false;
let activeMode = document.querySelector("#normal");
activeMode.classList.add("active");
let slider = document.querySelector("#board-size");
let sliderVal = document.querySelector("#board-size-value");
const fillButton = document.querySelector("#fill");
const colorInput = document.querySelector('input[type="color"]');
let currentColor = `${colorInput.value}`;

colorInput.addEventListener("input", (event) => {
  if (activeMode.id !== "eraser") currentColor = `${colorInput.value}`;
});

function drawGrid(border) {
  Array.from(board.children).forEach((row) => {
    Array.from(row.children).forEach((cell) => {
      if (cell != row.children[0]) cell.style.borderLeft = border;
      if (row !== board.children[0]) cell.style.borderTop = border;
    });
  });
}

gridlineButton.addEventListener("click", (event) => {
  if (!isGridOn) {
    isGridOn = true;
    gridlineButton.classList.add("active");
    drawGrid("1px solid grey");
  } else {
    isGridOn = false;
    gridlineButton.classList.remove("active");
    drawGrid("none");
  }
});

newGridButton.addEventListener("click", (event) => {
  if (+slider.value === boardSize) return;
  if (confirm("Create new board?")) {
    removeBoard();
    boardSize = +slider.value;
    drawBoard();
    if (isGridOn) drawGrid("1px solid grey");
  }
});

slider.addEventListener("input", (event) => {
  sliderVal.textContent = `${slider.value} x ${slider.value}`;
});

buttons.forEach((button) => {
  if (button.id != "gridlines")
    button.addEventListener("click", (event) => {
      if (button.id !== "reset") {
        activeMode.classList.remove("active");
        button.classList.add("active");
        activeMode = button;
        if (button.id === "normal" || button.id === "fill") {
          currentColor = `${colorInput.value}`;
        } else if (button.id === "eraser") {
          currentColor = "white";
        }
      } else {
        Array.from(board.children).forEach((row) => {
          Array.from(row.children).forEach((cell) => {
            cell.style.backgroundColor = "white";
          });
        });
      }
    });
});

function hexToRgb(hex) {
  let r = parseInt(hex.substring(1, 3), 16);
  let g = parseInt(hex.substring(3, 5), 16);
  let b = parseInt(hex.substring(5, 7), 16);

  return `rgb(${r}, ${g}, ${b})`;
}

function floodFill(div, x, y) {
  if (div.style.backgroundColor === hexToRgb(currentColor)) return;
  const originalColor = div.style.backgroundColor;
  div.style.backgroundColor = currentColor;

  if (
    x > 0 &&
    board.children[x - 1].children[y].style.backgroundColor === originalColor
  ) {
    floodFill(board.children[x - 1].children[y], x - 1, y);
  }
  if (
    x < boardSize - 1 &&
    board.children[x + 1].children[y].style.backgroundColor === originalColor
  ) {
    floodFill(board.children[x + 1].children[y], x + 1, y);
  }
  if (
    y > 0 &&
    board.children[x].children[y - 1].style.backgroundColor === originalColor
  ) {
    floodFill(board.children[x].children[y - 1], x, y - 1);
  }
  if (
    y < boardSize - 1 &&
    board.children[x].children[y + 1].style.backgroundColor === originalColor
  ) {
    floodFill(board.children[x].children[y + 1], x, y + 1);
  }
}

function colorDivNormal(event) {
  event.preventDefault();
  if (activeMode.id === "eraser") currentColor = "white";
  if (event.type === "mousedown") {
    if (activeMode.id === "fill") {
      const x = Array.from(board.children).indexOf(event.target.parentElement);
      const y = Array.from(event.target.parentElement.children).indexOf(
        event.target
      );
      floodFill(event.target, x, y);
      return;
    }
    mouseDownInBoard = true;
  }
  if (event.buttons === 1 && mouseDownInBoard) {
    if (activeMode.getAttribute("id") === "rainbow") {
      currentColor = `#${Math.floor(Math.random() * (0xffffff + 1)).toString(
        16
      )}`;
    }
    event.target.style.backgroundColor = `${currentColor}`;
  } else {
    mouseDownInBoard = false;
  }
}

function removeBoard() {
  for (let i = board.children.length - 1; i >= 0; i--) {
    board.children[i].remove();
  }
}

function drawBoard() {
  for (let j = 0; j < boardSize; j++) {
    const row = document.createElement("div");
    row.style.display = "flex";
    row.style.height = `calc(100%/${boardSize})`;
    for (let i = 0; i < boardSize; i++) {
      const div = document.createElement("div");
      div.addEventListener("mouseover", colorDivNormal);
      div.addEventListener("mousedown", colorDivNormal);
      div.style.width = `calc(100%/${boardSize})`;
      div.style.background = `100%`;
      div.style.backgroundColor = "white";
      row.appendChild(div);
    }
    board.appendChild(row);
  }
}

function updateBoardSize() {
  let mainWidth = board.parentElement.offsetWidth;
  let mainHeight = board.parentElement.offsetHeight;
  let min = 0.9 * Math.min(mainWidth, mainHeight);

  board.style.width = min + "px";
  board.style.height = min + "px";
}

window.onresize = function () {
  updateBoardSize();
};

updateBoardSize();
drawBoard();

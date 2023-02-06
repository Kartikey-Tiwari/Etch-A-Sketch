import * as htmlToImage from "html-to-image";
import "./style.css";
// dom elements
const board = document.querySelector("#board");
const buttons = document.querySelectorAll(
  "button:not(#newGridConfirmation,#save-as-img)"
);
const newGridButton = document.querySelector("#newGridConfirmation");
const colorInput = document.querySelector('input[type="color"]');
const slider = document.querySelector("#board-size");
const saveImgBtn = document.querySelector("#save-as-img");
const img = document.querySelector(".img-to-download");
const downloadBtn = document.querySelector(".download");
const overlay = document.querySelector(".overlay");
const modal = document.querySelector(".modal");
const colorPickerBtn = document.querySelector("#color-picker-btn");
const colorPicker = document.querySelector("#color-picker");

//variables to manage state
let sliderVal = document.querySelector("#board-size-value");
let boardSize = 11;
let isGridOn = false;
let mouseDownInBoard = false;
let currentColor = `${colorInput.value}`;
let activeMode = document.querySelector("#normal");
activeMode.classList.add("active");

// board related functions
function drawBoard() {
  for (let j = 0; j < boardSize; j++) {
    const row = document.createElement("div");
    row.style.display = "flex";
    row.style.height = `calc(100%/${boardSize})`;
    for (let i = 0; i < boardSize; i++) {
      const div = document.createElement("div");
      div.addEventListener("mouseover", colorBoard);
      div.addEventListener("mousedown", colorBoard);
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

function removeBoard() {
  for (let i = board.children.length - 1; i >= 0; i--) {
    board.children[i].remove();
  }
}

// functions needed by event listeners
function colorBoard(event) {
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

function displayGridWithBorder(border) {
  Array.from(board.children).forEach((row) => {
    Array.from(row.children).forEach((cell) => {
      if (cell != row.children[0]) cell.style.borderLeft = border;
      if (row !== board.children[0]) cell.style.borderTop = border;
    });
  });
}

function drawGrid() {
  displayGridWithBorder("1px solid grey");
}

function removeGrid() {
  displayGridWithBorder("none");
}

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

colorInput.addEventListener("input", (event) => {
  if (activeMode.id !== "eraser") currentColor = `${colorInput.value}`;
});

function showModal() {
  overlay.style.display = "block";
  modal.style.display = "block";
}

function closeModal() {
  overlay.style.display = "none";
  modal.style.display = "none";
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeModal();
  }
});

overlay.addEventListener("click", () => {
  closeModal();
});

downloadBtn.addEventListener("click", function () {
  const link = document.createElement("a");
  link.download = "image.png";
  link.href = img.src;
  link.click();
});

window.onload = function () {
  setTimeout(() => {
    const colorPickerIcon = document.querySelector("svg");
    colorPicker.addEventListener("input", () => {
      colorPickerIcon.style.border = `4px solid ${colorPicker.value}`;
    });
  }, 1000);
};

// menu buttons
buttons.forEach((button) => {
  if (button.id != "gridlines" && button.id != "color-picker-btn")
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
  else if (button.id === "gridlines") {
    button.addEventListener("click", () => {
      if (!isGridOn) {
        isGridOn = true;
        button.classList.add("active");
        drawGrid();
      } else {
        isGridOn = false;
        button.classList.remove("active");
        removeGrid();
      }
    });
  }
});

newGridButton.addEventListener("click", (event) => {
  if (+slider.value === boardSize) return;
  if (confirm("Create new board?")) {
    removeBoard();
    boardSize = +slider.value;
    drawBoard();
    if (isGridOn) drawGrid();
  }
});

slider.addEventListener("input", (event) => {
  sliderVal.textContent = `${slider.value} x ${slider.value}`;
});

colorPickerBtn.addEventListener("click", () => {
  colorPicker.click();
});

const loader = document.querySelector(".loader");

function showLoader() {
  overlay.style.display = "block";
  loader.style.display = "block";
}

function hideLoader() {
  loader.style.display = "none";
}

saveImgBtn.addEventListener("click", () => {
  showLoader();
  setTimeout(() => {
    if (isGridOn) {
      removeGrid();
    }
  }, 0);

  setTimeout(() => {
    htmlToImage
      .toPng(board)
      .then(function (dataUrl) {
        hideLoader();
        img.src = dataUrl;
        showModal();
      })
      .catch(function (error) {
        console.error("oops, something went wrong!", error);
      });
  }, 1);

  setTimeout(() => {
    if (isGridOn) {
      drawGrid();
    }
  }, 2);
});

//initialising drawing board
updateBoardSize();
drawBoard();

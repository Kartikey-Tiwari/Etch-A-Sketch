const board = document.querySelector('#board');
let boardSize = 11;
const buttons = document.querySelectorAll('button:not(#newGridConfirmation)');
const newGridButton = document.querySelector('#newGridConfirmation');
const gridlineButton = document.querySelector('#gridlines');
let isGridOn = false;
let mouseDownInBoard = false;
let activeMode = document.querySelector('#normal');
activeMode.classList.add('active')
let slider = document.querySelector('#board-size');
let sliderVal = document.querySelector('#board-size-value');
const fillButton = document.querySelector('#fill');
const colorInput = document.querySelector('input[type="color"]');
let currentColor = `${colorInput.value}`;

colorInput.addEventListener('input', (event) => {
    if (activeMode.id !== 'eraser')
        currentColor = `${colorInput.value}`
});

function drawGrid(border){
    Array.from(board.children).forEach(row => {
        Array.from(row.children).forEach(cell => {
            if (cell != row.children[0])
                cell.style.borderLeft = border;
            if (row !== board.children[0])
                cell.style.borderTop = border;
        });
    });
}

gridlineButton.addEventListener('click', (event) => {
    if (!isGridOn){
        isGridOn = true;
        event.target.classList.add('active');
        drawGrid('1px solid grey');
    }
    else{
        isGridOn = false;
        event.target.classList.remove('active');
        drawGrid('none');
    }
});

newGridButton.addEventListener('click', event =>{
    if (+slider.value === boardSize)
        return;
    if (confirm('Create new board?')){
        removeBoard();
        boardSize = +slider.value;
        drawBoard();
        if (isGridOn)
            drawGrid('1px solid grey');
    }
});

slider.addEventListener('input', (event) => {
    sliderVal.textContent = `Board size: ${slider.value}x${slider.value}`;
});

buttons.forEach(button => {
    if (button.textContent != 'Gridlines')
        button.addEventListener('click', (event) => {
            if (event.target.id !== 'reset'){
                activeMode.classList.remove('active');
                event.target.classList.add('active');
                activeMode = event.target;
                if (event.target.id === 'normal' || event.target.id === 'fill'){
                    currentColor = `${colorInput.value}`;
                }
                else if (event.target.id === 'eraser'){
                    currentColor = 'white';
                }
            }
            else{
                Array.from(board.children).forEach(row => {
                    Array.from(row.children).forEach(cell => {
                        cell.style.backgroundColor = 'white';
                    })
                });
            }
        });
});

function floodFill(div, x, y){
    if (div.style.backgroundColor === currentColor)
        return;
    const originalColor = div.style.backgroundColor;
    div.style.backgroundColor = currentColor;

    if (x > 0 && board.children[x-1].children[y].style.backgroundColor === originalColor){
        floodFill(board.children[x-1].children[y], x-1, y);
    }
    if (x < boardSize-1 && board.children[x+1].children[y].style.backgroundColor === originalColor){
        floodFill(board.children[x+1].children[y], x+1, y);
    }
    if (y > 0 && board.children[x].children[y-1].style.backgroundColor === originalColor){
        floodFill(board.children[x].children[y-1], x, y-1);
    }
    if (y < boardSize-1 && board.children[x].children[y+1].style.backgroundColor === originalColor){
        floodFill(board.children[x].children[y+1], x, y+1);
    }
}

function colorDivNormal(event){
    event.preventDefault();
    if (activeMode.id === 'eraser')
        currentColor = 'white';
    if (event.type === 'mousedown'){;
        if (activeMode.id === 'fill'){
            const x = Array.from(board.children).indexOf(event.target.parentElement);
            const y = Array.from(event.target.parentElement.children).indexOf(event.target);
            floodFill(event.target, x, y);
            return;
        }
        mouseDownInBoard = true;
    }
    if (event.buttons === 1 && mouseDownInBoard){
        if (activeMode.getAttribute('id') === 'rainbow'){
            currentColor = `#${Math.floor(Math.random() * (0xffffff + 1)).toString(16)}`
        }
        event.target.style.backgroundColor = `${currentColor}`;
    }
    else{
        mouseDownInBoard = false;
    }
}

function removeBoard(){
    for(let i = board.children.length-1; i >= 0; i--){
        board.children[i].remove();
    }
}

function drawBoard(){
    for(let j = 0; j < boardSize; j++){
        const row = document.createElement('div');
        row.style.width = '100%';
        row.style.height = `${100/boardSize}%` 
        row.style.display = 'flex';
        for(let i = 0; i < boardSize; i++){
            const div = document.createElement('div');
            div.addEventListener('mouseover', colorDivNormal);
            div.addEventListener('mousedown', colorDivNormal);
            div.style.width = `${100/boardSize}%`;
            div.style.height = '100%';
            div.style.backgroundColor = 'white'
            row.appendChild(div);
        }
        board.appendChild(row);
    }
}

drawBoard();
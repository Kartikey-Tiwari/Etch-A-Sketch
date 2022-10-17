const board = document.querySelector('#board');
let boardSize = 11;
const buttons = document.querySelectorAll('button:not(#newGridConfirmation)');
const newGridButton = document.querySelector('#newGridConfirmation');
let mouseDownInBoard = false;
let currentColor = 'black';
let activeMode = document.querySelector('#normal');
activeMode.classList.add('active')
let slider = document.querySelector('#board-size');
let sliderVal = document.querySelector('#board-size-value');

newGridButton.addEventListener('click', event =>{
    if (+slider.value === boardSize)
        return;
    if (confirm('Create new board?')){
        removeBoard();
        boardSize = +slider.value;
        drawBoard();
    }
});

slider.addEventListener('input', (event) => {
    sliderVal.textContent = `Board size: ${slider.value}x${slider.value}`;
});

buttons.forEach(button => {
    button.addEventListener('click', (event) => {
        if (event.target.id !== 'reset'){
            activeMode.classList.remove('active');
            event.target.classList.add('active');
            activeMode = event.target;
        }
        if (event.target.id === 'normal'){
            currentColor = 'black';
            currentMode = 'normal';
        }
        else if (event.target.id === 'erasor'){
            currentColor = 'white';
            currentMode = 'erasor';
        }
        else if (event.target.id === 'rainbow'){
            currentMode = 'rainbow';
        }
        else {
            Array.from(board.children).forEach(row => {
                Array.from(row.children).forEach(cell => {
                    cell.style.backgroundColor = 'white';
                })
            });
        }
    });
});

function colorDivNormal(event){
    event.preventDefault();
    if (event.type === 'mousedown')
        mouseDownInBoard = true;
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
const board = document.querySelector('#board');
const buttons = document.querySelectorAll('button');
let mouseDownInBoard = false;
let currentColor = 'black';
let currentMode = 'Normal';

buttons.forEach(button => {
    button.addEventListener('click', (event) => {
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
        if (currentMode === 'rainbow'){
            currentColor = `#${Math.floor(Math.random() * (0xffffff + 1)).toString(16)}`
        }
        event.target.style.backgroundColor = `${currentColor}`;
    }
    else{
        mouseDownInBoard = false;
    }
}

for(let j = 0; j < 64; j++){
    const row = document.createElement('div');
    row.style.width = '100%';
    row.style.height = `${100/64}%` 
    row.style.display = 'flex';
    for(let i = 0; i < 64; i++){
        const div = document.createElement('div');
        div.addEventListener('mouseover', colorDivNormal);
        div.addEventListener('mousedown', colorDivNormal);
        div.style.width = `${100/64}%`;
        div.style.height = '100%';
        div.style.backgroundColor = 'white'
        row.appendChild(div);
    }
    board.appendChild(row);
}
const board = document.querySelector('#board');

for(let j = 0; j < 64; j++){
    const row = document.createElement('div');
    row.style.width = '100%';
    row.style.height = `${100/64}%` 
    row.style.display = 'flex';
    for(let i = 0; i < 64; i++){
        const div = document.createElement('div');
        div.style.width = `${100/64}%`;
        div.style.height = '100%';
        row.appendChild(div);
    }
    board.appendChild(row);
}
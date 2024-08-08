import confetti from 'canvas-confetti';

function createKnight() {
    const knight = document.createElement('span');
    knight.classList.add('knight');
    return knight;
}

function reset() {
    const squares = document.querySelectorAll('.square');
    squares.forEach((square) => {
        square.classList.remove('selected', 'start', 'end');
        square.textContent = '';
    });

    const log = document.querySelector('div.log');
    log.textContent = '';
}

function selectSquare(row, col) {
    return document.querySelector(`.row-${row}>.column-${col}`);
}

function displayPath(path) {
    confetti({ particleCount: 300, spread: 150 });
    console.log('🚀 ~ clickHandler ~ path:', path);

    // display
    path.slice(1, path.length - 1).forEach(async (square, index) => {
        const [row, col] = square;
        const selected = document.querySelector(`.row-${row}>.column-${col}`);

        selected.classList.add('selected');
        selected.textContent = index + 1;
        // const select = () => selected.classList.add('selected');
        // await new Promise((resolve) => setTimeout(select, 1000));

        // console.log('🚀 ~ clickHandler ~ selected:', selected);
    });

    addLog(`path: ${path.map((p) => `[${p[0]},${p[1]}]`).join('->')}`);
    addLog(`length: ${path.length - 1} edges`);
}

function displayMove(type, move) {
    // for `start` and `end`
    const [row, col] = move;

    const square = selectSquare(row, col);
    square.classList.add(type);
    square.textContent = type;
    addLog(`${type}: ${[row, col]}\n\n`);
}

function addLog(msg) {
    const log = document.querySelector('div.log');
    const span = document.createElement('span');
    span.classList.add('log-msg');
    span.textContent = msg;
    log.appendChild(span);
    // log.textContent += '\n' + msg;
}

export { createKnight, displayPath, displayMove, reset, selectSquare, addLog };

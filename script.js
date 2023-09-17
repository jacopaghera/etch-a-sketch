//script
const container = document.querySelector('.container');
console.log(container);

function makeSquares() {
    for (let i = 0; i<(16*16); i++) {
        let row = document.createElement('div');
        container.appendChild(row).className = 'gridSquares';
    }
}

let squares = document.querySelectorAll('.gridSquares');
makeSquares();

squares.forEach(square => square.addEventListener('mouseover', (event) => {
    console.log('box hovered', event);
    square.style.backgroundColor = '#0000FF';
})
);


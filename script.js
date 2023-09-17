//script
const container = document.querySelector('.container');
console.log(container);

function makeSquares() {
    for (let i = 0; i<(16*16); i++) {
        let row = document.createElement('div');
        container.appendChild(row).className = 'gridSquares';
    }
}

makeSquares();

let squares = document.querySelectorAll('.gridSquares');
console.log(squares);

squares.forEach(element => element.addEventListener('mouseover', (event) => {
    console.log('box hovered', event);
    element.style.backgroundColor = '#0000FF';
})
);


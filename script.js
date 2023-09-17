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
const squaresArray = Array.from(squares);

squaresArray.addEventListener('hover', () => {
    squares.style.backgroundColor = "blue";
})

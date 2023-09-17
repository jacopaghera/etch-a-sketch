//script
const container = document.querySelector('.container');
const button = document.querySelector('button');

function makeSquares(number) {
    for (let i = 0; i<(number*number); i++) {
        let row = document.createElement('div');
        container.appendChild(row).className = 'gridSquares';
    }
}

function createGrid () {
    width = prompt("insert number of squares per side of the grid");
    makeSquares(width);
}

button.addEventListener('click', createGrid());

let squares = document.querySelectorAll('.gridSquares');
console.log(squares);

squares.forEach(element => element.addEventListener('mouseover', () => {
    element.style.backgroundColor = '#0000FF';
})
);


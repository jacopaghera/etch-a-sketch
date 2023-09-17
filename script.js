//script
const container = document.querySelector('.container');
const button = document.querySelector('button');

function makeSquares(number) {
    for (let i = 0; i<(number*number); i++) {
        let row = document.createElement('div');
        container.appendChild(row).className = 'gridSquares';
    }
}

let number = prompt("Insert the size of the grid")

function createGrid () {
    width = prompt("insert number of squares per side of the grid");
    makeSquares(width);
}

button.addEventListener('click', createGrid());

let squares = document.querySelectorAll('.gridSquares');
console.log(squares);

squares.forEach(element => element.addEventListener('mouseover', (event) => {
    console.log('box hovered', event);
    element.style.backgroundColor = '#0000FF';
})
);


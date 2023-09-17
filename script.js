//script
const container = document.querySelector('.container');
const btn = document.querySelector('button');

function makeSquares(number) {
    for (let i = 0; i<(number*number); i++) {
        let row = document.createElement('div');
        container.appendChild(row).className = 'gridSquares';
    }
}

btn.addEventListener('click', () => {
    let number = prompt("insert number of squares per side of the grid");
    if (number>100) {prompt("too big")};
    makeSquares(number);
    let squares = document.querySelectorAll('.gridSquares');

    console.log(squares);

    squares.forEach(element => element.addEventListener('mouseover', () => {
    element.style.backgroundColor = '#0000FF';
})
);
});


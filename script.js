//script
const container = document.querySelector('.container');
const btn = document.querySelector('button');

btn.addEventListener('click', () => {
    if (document.querySelectorAll('.gridSquares').length > 0) {
        while (container.firstChild) {
        container.removeChild(container.lastChild); //loop that removes every div before creating the next graph
        }
    };
    let number = prompt("insert number of squares per side of the grid");

    if (number>100) {alert("too big")}
    else {
        makeSquares(number);
        let squares = document.querySelectorAll('.gridSquares');
        console.log(squares);

        squares.forEach(element => {
            element.addEventListener('mouseover', () => {
            element.style.backgroundColor = '#0000FF';
        })
        let width = 700/number;
        element.style.flex = `1 0 ${width}px`;
        })
}
});

function makeSquares(number) {
    for (let i = 0; i<(number*number); i++) {
        let row = document.createElement('div');
        container.appendChild(row).className = 'gridSquares';
    }
}


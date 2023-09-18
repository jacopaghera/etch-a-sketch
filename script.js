//script
const container = document.querySelector('.container');
const btn = document.querySelector('button');
makeSquares(16);

btn.addEventListener('click', () => {
    container.style.border = '4px solid black'
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

        let brightness = 110;
        squares.forEach(element => {
            element.addEventListener('mouseover', () => {
                element.style.backgroundColor = randomRgba();
                let brightness = getComputedStyle(element).getPropertyValue('filter').substring(11, 14);
                let brightnessNumber = parseFloat(brightness);
                element.style.filter = `brightness(${brightnessNumber-0.1})`;
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

function randomRgba() {
    let num = Math.round(0xffffff * Math.random());
    let r = num >> 16;
    let g = num >> 8 & 255;
    let b = num & 255;
    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
}

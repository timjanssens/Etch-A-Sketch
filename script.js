let changeColor = false;
//functions
function createDivs(totalDivsPerRow) {
    for (let i = 0; i < totalDivsPerRow; i++) {

        let divRow = document.createElement('div');

        for (let i = 0; i < totalDivsPerRow; i++) {

            let divEl = document.createElement('div');
            divEl.style.display = 'inline-block'
            //calculate width from div
            let widthDiv = (600) / totalDivsPerRow;
            let widthDivPx = widthDiv + 'px';
            divEl.style.width = widthDivPx;
            divEl.style.height = widthDivPx;
            divEl.className = 'innerDiv';
            divEl.style.border = '1px solid black';


            divRow.appendChild(divEl);
        }



        let containerDiv = document.querySelector('#containerDiv');
        containerDiv.appendChild(divRow);
    }
}

function changeWhenHoverOver(e) {
    e.preventDefault();
    if (!changeColor) {
        e.target.style.backgroundColor = 'black';
    } else {
        let randomR = Math.floor(Math.random() * 257);
        let randomG = Math.floor(Math.random() * 257);
        let randomB = Math.floor(Math.random() * 257);

        e.target.style.backgroundColor = `rgb(${randomR},${randomG},${randomB})`;
    }
}


function clearGrid() {
    let allInnerDivs = document.querySelectorAll('.innerDiv');
    allInnerDivs.forEach(element => {
        element.style.backgroundColor = 'white';
    });
}

function removeAllInnerDivs() {
    let allInnerDivs = document.querySelectorAll('.innerDiv');
    allInnerDivs.forEach(element => {
        element.remove();
    });
}


function changeSquares() {
    let newAmountOfSquares = prompt('How many squares do you want in one row (max100)? ');
    if (newAmountOfSquares > 0 && newAmountOfSquares < 101) {
        removeAllInnerDivs();
        createDivs(newAmountOfSquares);
        clearGrid();
    } else
        alert('That was not a number between 1 and 100');
}

function changeToColors() {
    changeColor = true;
}

function changeToBW() {
    changeColor = false;
}

function test(e) {
    e.preventDefault();
    console.log(12);
}

//event handlers

containerDiv.addEventListener('mouseover', changeWhenHoverOver);
window.addEventListener('load', createDivs(16));
window.addEventListener('load', clearGrid);
document.querySelector('#clearBtn').addEventListener('click', clearGrid);
document.querySelector('#changeSquaresBtn').addEventListener('click', changeSquares)
document.querySelector('#colorFullBtn').addEventListener('click', changeToColors);
document.querySelector('#bwBtn').addEventListener('click', changeToBW);
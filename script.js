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

function blackWhenHoverOver(e){
    e.preventDefault();
    e.target.style.backgroundColor = 'black';
}



containerDiv.addEventListener('mouseover', blackWhenHoverOver);
window.addEventListener(onload, createDivs(36));

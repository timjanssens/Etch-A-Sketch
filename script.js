
let totalDivsPerRow = 36;
let containerDiv = document.querySelector('#containerDiv');


for (let i = 0; i < totalDivsPerRow; i++) {

    let divRow = document.createElement('div');

    for (let i = 0; i < totalDivsPerRow; i++) {

        let divEl = document.createElement('div');
        divEl.style.display = 'inline-block'
        //calculate width from div
        let widthDiv = (660) / totalDivsPerRow;
        let widthDivPx = widthDiv + 'px';
        divEl.style.width = widthDivPx;
        divEl.style.height = widthDivPx;
        divEl.className = 'innerDiv';
        divEl.style.border = '1px solid black';
        

        divRow.appendChild(divEl);
    }

   

    containerDiv.appendChild(divRow);
}



containerDiv.addEventListener('mouseover',function(e){
  //  if (containerDiv.className == '#innerDiv') {
        e.target.style.backgroundColor = 'black';
    //}
});
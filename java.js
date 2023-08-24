const game = document.getElementById('game')

let pointerIsDown = false

let gridOn = true

let differentColor = false

let color = "#ffff"

let isEraserActive = false

const allButtons = document.querySelectorAll('.button')

function numeroGrid (x, y){
    for (let i = 0; i<x; i++){
        rowDiv = document.createElement('div');
         game.append(rowDiv)
         rowDiv.classList.add('fila')
        for (let n = 0; n< y; n++){
            colDiv = document.createElement('div');
            rowDiv.append(colDiv)
            colDiv.classList.add('columna')
            if(gridOn === true){
                colDiv.style.border="1px solid rgb(0, 0, 0, .3)"
            } else {
                colDiv.style.border=""
            }    
            colDiv.style.boxSizing = "border-box";
            colDiv.style.height = `${500/y}px`;
            colDiv.style.width = `${500/x}px`;
        }
    }
    const casillas = document.querySelectorAll('.columna')

    casillas.forEach(columna => { 
        columna.addEventListener('mouseenter', e => {
            if (pointerIsDown === true) {
                e.target.style.backgroundColor=`${color}`;
            }
        })
    });
    casillas.forEach(columna => {
        columna.addEventListener('pointerdown', e => {
            e.target.style.backgroundColor=`${color}`;
        })
    });
    allButtons.forEach((element)=> element.classList.remove('buttonClicked'))
    allButtons[0].classList.add('buttonClicked')
}
function removeColor (){
    const casillas = document.querySelectorAll('.columna')
    casillas.forEach(columna => columna.style.backgroundColor="")
}

function toggleGridEnabled (){
    const casillas = document.querySelectorAll('.columna')
    if(gridOn === true){
        casillas.forEach(columna => columna.style.border="")
        gridOn = false
    } else {
        casillas.forEach(columna => columna.style.border="1px solid rgb(0, 0, 0, .3)")
        gridOn = true
    }
}

window.addEventListener('pointerdown', e => pointerIsDown = true)
window.addEventListener('pointerup',e =>  pointerIsDown = false)

const buttonRemove = document.getElementById("remove")
buttonRemove.addEventListener("pointerdown", removeColor)

const grid = document.getElementById("grid")
grid.addEventListener("pointerdown", toggleGridEnabled)

const slider = document.getElementById("myRange") 

numeroGrid(5,5)

slider.oninput = function (){
    if (this.value == 0){
        game.innerHTML=""
        numeroGrid(5,5)
    } else if (this.value == 20){
        game.innerHTML=""
        numeroGrid(10,10)
    } else if (this.value == 40){
        game.innerHTML=""
        numeroGrid(15,15)
    } else if (this.value == 60){
        game.innerHTML=""
        numeroGrid(20,20)
    } else if (this.value == 80){
        game.innerHTML=""
        numeroGrid(25,25)
    } else {
        game.innerHTML=""
        numeroGrid(30,30)
    }
}

const eraser = document.getElementById("eraser")
eraser.addEventListener("pointerdown",eraserr)

function eraserr(){
    const casillas = document.querySelectorAll('.columna')
    casillas.forEach(columna => { 
        columna.addEventListener('mouseenter', e => {
            if (pointerIsDown === true) {
                e.target.style.backgroundColor="";
            }
        })
    });
    casillas.forEach(columna => columna.addEventListener('pointerdown', e => e.target.style.backgroundColor=""))
    isEraserActive = true
    allButtons.forEach((element)=> element.classList.remove('buttonClicked'))
    allButtons[1].classList.add('buttonClicked')
}

const draw = document.getElementById("draw")
draw.addEventListener("pointerdown",draww)
function draww(){
    const casillas = document.querySelectorAll('.columna')
    casillas.forEach(columna => { 
        columna.addEventListener('mouseenter', e => {
            if (pointerIsDown === true) {
                e.target.style.backgroundColor=`${color}`;
            }
        })
    });
    casillas.forEach(columna => columna.addEventListener('pointerdown', e => e.target.style.backgroundColor=`${color}`))
    isEraserActive = false
    allButtons.forEach((element)=> element.classList.remove('buttonClicked'))
    allButtons[0].classList.add('buttonClicked')
}

const ranColor = document.getElementById("randomColor")
ranColor.addEventListener("pointerdown",randoColor)
function randoColor(){
    const casillas = document.querySelectorAll('.columna')
    casillas.forEach(columna => { 
        columna.addEventListener('mouseenter', e => {
            if (pointerIsDown === true) {
                e.target.style.backgroundColor=`rgb(${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)})`;
            }
        })
    });
    casillas.forEach(columna => columna.addEventListener('pointerdown', e => e.target.style.backgroundColor=`rgb(${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)})`))
    allButtons.forEach((element)=> element.classList.remove('buttonClicked'))
    allButtons[3].classList.add('buttonClicked')
}

const colorPick = document.getElementById("colorPicker")
colorPick.addEventListener("pointerdown",choosedColor)
function choosedColor(){
    const casillas = document.querySelectorAll('.columna')
    casillas.forEach(columna => { 
        columna.addEventListener('mouseenter', e => {
            if (pointerIsDown === true) {
                e.target.style.backgroundColor=`${color}`;
            }
        })
    });
    casillas.forEach(columna => columna.addEventListener('pointerdown', e => e.target.style.backgroundColor=`${color}`))
    allButtons.forEach((element)=> element.classList.remove('buttonClicked'))
    allButtons[2].classList.add('buttonClicked')
    
}

let color_picker = document.getElementById("colorSelector");
let color_picker_wrapper = document.getElementById("colorPicker");
let width = color_picker_wrapper.clientWidth;
let height = color_picker_wrapper.clientHeight;
color_picker.style.width = `${width}px`;
color_picker.style.height = `${height}px`;
color_picker.onchange = function () {
    color_picker_wrapper.style.backgroundColor = color_picker.value;
    color = color_picker.value;
    assignColor();
    allButtons.forEach((element)=> element.classList.remove('buttonClicked'))
    allButtons[0].classList.add('buttonClicked')
}



const colorRemember = document.getElementById('colorRemember')
function gridColors (num){
    for (let i=0; i<num; i++){
        colorBox = document.createElement('div')
        colorBox.classList.add("colorCheckerBox")
        colorRemember.append(colorBox)
        colorBox.style.backgroundColor = "white"
    }
}

gridColors(10)

const bottomColors = document.querySelectorAll(".colorCheckerBox");
let checkersBoxRemember = bottomColors.length


function assignColor(){
    let index = checkersBoxRemember - 1
    for (i=0; i<checkersBoxRemember; i++){
        if (index==0){
            bottomColors[0].style.backgroundColor = `${color}`;
        } else {
            bottomColors[index].style.backgroundColor = bottomColors[index - 1].style.backgroundColor;
        }
    index--
    }
}

bottomColors.forEach(colorCheckerBox => colorCheckerBox.addEventListener('pointerdown', e => color = e.target.style.backgroundColor));

const container = document.querySelector('.container')

const saveDrawing = document.querySelector("#save")

// ACTIVATE TO DOWNLOAD THE IMAGE ***********

saveDrawing.addEventListener("click", function() {
    
    html2canvas(game).then(function(canvas) {

        saveAs(canvas.toDataURL(), 'file-name.png');
    });
});


function saveAs(uri, filename) {

    var link = document.createElement('a');

    if (typeof link.download === 'string') {

        link.href = uri;
        link.download = filename;

        //Firefox requires the link to be in the body
        document.body.appendChild(link);

        //simulate click
        link.click();

        //remove the link when done
        document.body.removeChild(link);

    } else {

        window.open(uri);

    }
}

const drawingRemember = document.getElementById('drawingRemember')
console.log(drawingRemember)
let source = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+ip1sAAAAASUVORK5CYII=';
function drawRemember (num){
    for (let i=0; i<num; i++){
        let draw = document.createElement('div')
        let img = document.createElement('img')
        img.src = source
        img.style.height = '50px'
        img.style.width = '50px'
        draw.classList.add("drawBox")
        drawingRemember.append(draw)
        draw.append(img)
        draw.style.backgroundColor = "white"
        console.log("BB")
    }
}


drawRemember(5)

const imatges = document.querySelectorAll('img')
console.log(imatges)
let drawingBoxRemember = document.querySelectorAll('.drawBox').length
let dataUrl = ""

saveDrawing.addEventListener("click", function() {

    html2canvas(game).then(function(canvas) { 
        source = canvas.toDataURL()

        let index = drawingBoxRemember - 1
        console.log(index)
        for (i=0; i<drawingBoxRemember; i++){
            if (index==0){
                imatges[0].src = source;
            } else {
                imatges[index].src = imatges[index - 1].src;
            }
            index--
        }
    });
});
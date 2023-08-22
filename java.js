const game = document.getElementById('game')

let pointerIsDown = false

let gridOn = true

let differentColor = false

let color = "#ffff"

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
    casillas.forEach(columna => columna.addEventListener('pointerdown', e => e.target.style.backgroundColor=`${color}`))
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

const colorSelector = document.getElementById("colorSelector")
console.log(colorSelector)
colorSelector.addEventListener("mouseenter",console.log("AAA"))

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
}

const colorPicker = document.getElementById("colorSelector")

colorPicker.addEventListener("input",()=>{
    color = colorPicker.value;
    console.log(color)
})

const colorPick = document.getElementById("colorPicker")
colorPick.addEventListener("pointerdown",choosedColor)
function choosedColor(){
    const casillas = document.querySelectorAll('.columna')
    casillas.forEach(columna => { 
        columna.addEventListener('mouseenter', e => {
            if (pointerIsDown === true) {
                e.target.style.backgroundColor=`${color}`;
                console.log(color)
            }
        })
    });
    casillas.forEach(columna => columna.addEventListener('pointerdown', e => e.target.style.backgroundColor=`${color}`))
    console.log(color)
}

const colorRemember = document.getElementById('colorRemember')
function gridColors (num){
    for (let i=0; i<num; i++){
        colorBox = document.createElement('div')
        colorBox.classList.add("colorCheckerBox")
        colorRemember.append(colorBox)
    }
}

gridColors(5)

function saveColors (){
    if (a){
        console.log("A")
    }
}

let color_picker = document.getElementById("colorSelector");
let color_picker_wrapper = document.getElementById("colorPicker");
let width = color_picker_wrapper.clientWidth;
let height = color_picker_wrapper.clientHeight;
color_picker.style.width = `${width}px`;
color_picker.style.height = `${height}px`;
console.log(width)
color_picker.onchange = function () {
    color_picker_wrapper.style.backgroundColor = color_picker.value;
}
color_picker_wrapper.style.backgroundColor = color_picker.value

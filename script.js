window.onload = () => {createGrid() /*;alert("Welcome to your pixel Canvas")*/};

//button const
const colorMode = document.getElementById("colorMode");
const rainbowMode= document.getElementById("rainbowMode");
const eraser = document.getElementById("eraser");
const clearGrid= document.getElementById("clearGrid");
const colorGrabber= document.getElementById("colorGrabber");
const shading= document.getElementById("shading");
const lighten= document.getElementById("lighten");
const viewGridLines = document.getElementById("gridLines");
const sizeSlider=document.getElementById("sizeSelection");
const colorSelection = document.getElementById("colorSelection");
const buttons= document.getElementsByTagName("button");
const BgColorSelector = document.getElementById ("backgroundColor");
let sizeNumber = document.getElementById ("size");
let colorValue = colorSelection.value;


//grid creation
const grid=document.getElementById("gridDiv");
function createGrid() {
    grid.style.gridTemplateColumns = `repeat(${sizeSlider.value}, 1fr)`;
    grid.style.gridTemplateRows= `repeat(${sizeSlider.value}, 1fr)`; 
    for(let i=0; i < sizeSlider.value * sizeSlider.value; i++) {
        let gridSquare = document.createElement("div");
        grid.appendChild(gridSquare);
    } 
}

function eraseGrid() {
    grid.innerHTML = "";
}


//mouse events

//button active - deactive
function deactiveButton() {
    buttons.classname = "";
}

//changing color function

function color() {
gridSquare.style.backgroundColor = colorValue;
}

//rainbow function


//color grabber function

//shading & ligthen function

//eraser function

function drawingEraser() {
    gridSquare.style.backgroundColor = "#ededed";
}

//clear grid function
function backgroundReset() {
    grid.style.backgroundColor = "#ededed";
    BgColorSelector.value = "#ededed";
}
function clearTheGrid() {
    eraseGrid();
    backgroundReset();
    createGrid();
}

//Slider function
sizeNumber.innerText = sizeSlider.value + " x " + sizeSlider.value;
sizeSlider.onchange = () => {sizeNumber.innerText = sizeSlider.value + " x " + sizeSlider.value; eraseGrid();createGrid()}

//color selectors functions
BgColorSelector.onchange = () => {grid.style.backgroundColor = BgColorSelector.value;}

//button's functions

clearGrid.onclick = () => {clearTheGrid();}

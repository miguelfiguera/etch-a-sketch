window.onload = () => {createGrid() /*;alert("Welcome to your pixel Canvas")*/};

//color const
const DARK = "#333333";
const LIGTH = "#ededed";
const LIGTH2= "#fefefe";

//default initials...

const INITIAL = "color";
let currentMode = INITIAL

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


//grid creation - destruction
const grid=document.getElementById("gridDiv");
function createGrid() {
    grid.style.gridTemplateColumns = `repeat(${sizeSlider.value}, 1fr)`;
    grid.style.gridTemplateRows= `repeat(${sizeSlider.value}, 1fr)`; 
    for(let i=0; i < sizeSlider.value * sizeSlider.value; i++) {
        let gridSquare = document.createElement("div");
        gridSquare.addEventListener("mouseover" , changingTheColor);
        gridSquare.addEventListener("mousedown", changingTheColor);
        gridSquare.style.backgroundColor = LIGTH;
        grid.appendChild(gridSquare);
    } 
}
function eraseGrid() {
    grid.innerHTML = "";
}

//mouse events
let theMouse = false;
document.body.onmousedown = () => {theMouse= true;}
document.body.onmouseup = () => {theMouse= false;}

//color functions:

function changingTheColor(e) {
    if  (currentMode === "color" && theMouse === true){
         e.target.style.backgroundColor = colorSelection.value;
    }
    else if (currentMode === "eraser" && theMouse === true){ 
         e.target.style.backgroundColor = BgColorSelector.value;
    }
    else if (currentMode === "colorGrabber" && theMouse === true){
        selectedColor = e.target.style.backgroundColor;
        rgbString = selectedColor.toString();
        noRGB = rgbString.replace("rgb" , "");
        noParenthesis = noRGB.replace("(","");
        noParenthesis2= noParenthesis.replace (")", "");
        noSpaces=noParenthesis2.replace(/ /g,"");
        let rgbArray = noSpaces.split(","); 
        console.log(rgbArray);
       let r = parseInt(rgbArray[0]);
       let g = parseInt(rgbArray[1]);
       let b = parseInt(rgbArray[2]);
       let R= r.toString(16);
       let G= g.toString(16);
       let B= b.toString(16);
        if(R.length == 1) { R = "0" + R;}
        if(G.length == 1) { G = "0" + G;}
        if(B.length == 1) { B = "0" + B;}
        newColor = "#" + R+ G+ B;
        colorSelection.value = newColor;
    }
    else { return};
}

//button active - deactive
function deactiveButton() {
    buttons.classname = "";
}

//changing color function
function color() {
gridSquare.style.backgroundColor = colorValue;
}

//rainbow function


//color grabber function (rgb to hex)
function rgbToHex (r,g,b) {
    return 
}

//shading & ligthen function


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
colorMode.onclick = () => {currentMode = "color"; changingTheColor();}
eraser.onclick = () => {currentMode = "eraser"; changingTheColor();}
colorGrabber.onclick = () => {currentMode = "colorGrabber" ; changingTheColor();}
window.onload = () => {createGrid();activeButton();visibleGrid() /*;alert("Welcome to your pixel Canvas")*/};

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
        gridSquare.addEventListener("mousedown", changingTheColor);
        gridSquare.addEventListener("mouseover" , changingTheColor);
        gridSquare.classList.add("gridDivs");
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
    else if (currentMode == "rainbowMode"){
        do{
        let red = Math.floor(Math.random()*256);
        let green = Math.floor(Math.random()*256);
        let blue = Math.floor(Math.random()*256);
        let redHex= red.toString(16);
        let greenHex= green.toString(16);
        let blueHex= blue.toString(16);
        randomColor= "#"+redHex+greenHex+blueHex;
        e.target.style.backgroundColor = randomColor;
        } while (currentMode== "rainbowMode" && theMouse===true);
    }
    else if (currentMode == "shading" && theMouse===true) {
        selectedColor = e.target.style.backgroundColor;
        rgbString = selectedColor.toString();
        noRGB = rgbString.replace("rgb" , "");
        noParenthesis = noRGB.replace("(","");
        noParenthesis2= noParenthesis.replace (")", "");
        noSpaces=noParenthesis2.replace(/ /g,"");
        let rgbArray = noSpaces.split(","); 
       let r = parseInt(rgbArray[0]) - 15;
       let g = parseInt(rgbArray[1]) - 15;
       let b = parseInt(rgbArray[2]) - 15;
       let R= r.toString(16);
       let G= g.toString(16);
       let B= b.toString(16);
        if(R.length == 1) { R = "0" + R;}
        if(G.length == 1) { G = "0" + G;}
        if(B.length == 1) { B = "0" + B;}
        newColor = "#" + R+ G+ B;
        e.target.style.backgroundColor = newColor;

    }
    else if (currentMode == "lighten" && theMouse===true){
        selectedColor = e.target.style.backgroundColor;
        rgbString = selectedColor.toString();
        noRGB = rgbString.replace("rgb" , "");
        noParenthesis = noRGB.replace("(","");
        noParenthesis2= noParenthesis.replace (")", "");
        noSpaces=noParenthesis2.replace(/ /g,"");
        let rgbArray = noSpaces.split(","); 
       let r = parseInt(rgbArray[0]) + 15;
       let g = parseInt(rgbArray[1]) + 15;
       let b = parseInt(rgbArray[2]) + 15;
       let R= r.toString(16);
       let G= g.toString(16);
       let B= b.toString(16);
        if(R.length == 1) { R = "0" + R;}
        if(G.length == 1) { G = "0" + G;}
        if(B.length == 1) { B = "0" + B;}
        newColor = "#" + R+ G+ B;
        e.target.style.backgroundColor = newColor;
    }
    else { return};
}

//button active - deactive
function activeButton() {
    if (currentMode == "color"){ 
        colorMode.classList.add("active");
        eraser.classList.remove("active");
        colorGrabber.classList.remove("active");
        shading.classList.remove("active");
        lighten.classList.remove("active");
        rainbowMode.classList.remove("active");
    }
    else if (currentMode== "eraser") {
        eraser.classList.add("active");
        colorMode.classList.remove("active");
        colorGrabber.classList.remove("active");
        shading.classList.remove("active");
        lighten.classList.remove("active");
        rainbowMode.classList.remove("active");
    }
    else if (currentMode == "colorGrabber") {
        colorGrabber.classList.add("active");
        colorMode.classList.remove("active");
        eraser.classList.remove("active");
        shading.classList.remove("active");
        lighten.classList.remove("active");
        rainbowMode.classList.remove("active");
    }
    else if (currentMode == "shading") {
        colorMode.classList.remove("active");
        colorGrabber.classList.remove("active");
        eraser.classList.remove("active");
        lighten.classList.remove("active");
        rainbowMode.classList.remove("active");
        shading.classList.add("active");
    }
    else if(currentMode == "lighten") {
        lighten.classList.add("active");
        colorMode.classList.remove("active");
        colorGrabber.classList.remove("active");
        shading.classList.remove("active");
        eraser.classList.remove("active");
        rainbowMode.classList.remove("active");
    }
    else if (currentMode == "rainbowMode") {
        lighten.classList.remove("active");
        colorMode.classList.remove("active");
        colorGrabber.classList.remove("active");
        shading.classList.remove("active");
        eraser.classList.remove("active");
        rainbowMode.classList.add("active")
    }
    else { return }
} 

//visible grid
viewGridLines.classList.add ("inactive");
function visibleGrid (){
    if (viewGridLines.classList == "inactive") {
    squares = document.getElementsByClassName("gridDivs");
    viewGridLines.classList.remove("inactive");
    viewGridLines.classList.add("active");
    for (i=0 ;  i < sizeSlider.value * sizeSlider.value ; i++){
        squares[i].classList.add("gridDivs2");
    }
}
    else if (viewGridLines.classList == "active") {
        squares = document.getElementsByClassName("gridDivs");
    viewGridLines.classList.remove("active");
    viewGridLines.classList.add("inactive");
    for (i=0 ;  i < sizeSlider.value * sizeSlider.value ; i++){
        squares[i].classList.remove("gridDivs2");
    }
}
    else {return}
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
colorMode.onclick = () => {currentMode = "color";activeButton();changingTheColor();}
eraser.onclick = () => {currentMode = "eraser"; activeButton();changingTheColor();}
colorGrabber.onclick = () => {currentMode = "colorGrabber" ;activeButton(); changingTheColor();}
rainbowMode.onclick = () => {currentMode = "rainbowMode" ;activeButton(); changingTheColor();}
shading.onclick = () => {currentMode = "shading"; activeButton(); changingTheColor();}
lighten.onclick = () => {currentMode = "lighten"; activeButton(); changingTheColor();}
viewGridLines.onclick = () => { visibleGrid();}

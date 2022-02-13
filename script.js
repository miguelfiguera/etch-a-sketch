//general div
let generalDiv=document.getElementById("general");

//header
let divHeader=document.getElementsByClassName("header");
let h1=document.createElement("h1");
divHeader[0].appendChild(h1);
h1.innerText= " Pixel Sketching";
h1.style.textAlign = "center"
h1.style.color= "white";

//footer
let footerDiv = document.getElementsByClassName("footer");
let footerH4= document.createElement("h4");
footerDiv[0].appendChild(footerH4);
footerH4.innerText = "By Captain Perrosaurio The Magnificent...";
footerH4.style.color = "white";
footerH4.style.textAlign = "center";
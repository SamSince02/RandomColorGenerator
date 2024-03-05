var header = document.querySelector("h1")
header.style.color = 'red'
header.style.fontSize = '10px';

function randomColor(){
    var letters = "123456789ABCDEF";
    var color = "#";
    for(var i=0;i<6;i++){
        color += letters[Math.floor(Math.random()*16)];
    }
    return color;
}

function clarity(){
    colorinput = randomColor();
    header.style.color = colorinput;
}

function font(){
    var fontu = 10
    for(var j=10;j<=200;j+=20){
        fontu = j + "px";
    }
    return fontu
}

function clarity2(){
    fontinput = font();
    header.style.fontSize = fontinput;
}

setInterval("clarity()",500);
setInterval("clarity2()",500);
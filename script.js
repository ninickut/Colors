function changeColor(idInput, classText, classBg) {
    var novaCor = document.getElementById(idInput).value;

    var divText= document.querySelectorAll("." + classText);
    divText.forEach(function(divText) {
        divText.style.color = novaCor;
        divText.innerHTML = novaCor;
    });
    var divBg= document.querySelectorAll("."+ classBg);
    divBg.forEach(function(divBg){
        divBg.style.backgroundColor= novaCor;
    })
}
function copyCss(){
    const css= 'root:{\n--color-1: ' + color1 + ';\n--color-2: ' + color2 + ';\n--color-3: ' + color3 + ';\n--color-4: ' + color4 + ';\n--color-5: ' + color5 + ';\n}' ;
    navigator.clipboard.writeText(css);
}

const color1="#53221B";

function addNewColor1(){
    color1 = document.getElementById('inputC1').value;
    changeColor('inputC1', 'color1_text','color1_bg');
}

const color2="#C29D89";

function addNewColor2(){
    color2 = document.getElementById('inputC2').value;
    changeColor('inputC2', 'color2_text','color2_bg');
}

const color3="#444239";

function addNewColor3(){
    color3 = document.getElementById('inputC3').value;
    changeColor('inputC3', 'color3_text','color3_bg');
}

const color4="#6C5E49";

function addNewColor4(){
    color4 = document.getElementById('inputC4').value;
    changeColor('inputC4', 'color4_text','color4_bg');
}

const color5="#5B5151";

function addNewColor5(){
    color5 = document.getElementById('inputC5').value;
    changeColor('inputC5', 'color5_text','color5_bg');
}
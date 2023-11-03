function trocarCores(idInput, classeAlvo) {
    var novaCor = document.getElementById(idInput).value;

    var divs = document.querySelectorAll("." + classeAlvo);
    divs.forEach(function(div) {
        div.style.color = novaCor;
        div.innerHTML = novaCor;
    });
}

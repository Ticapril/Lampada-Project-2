function quebraLampada(){
    let element = document.getElementById("lampada");
    element.addEventListener("mouseup", function(){
        element.setAttribute("src","imgs/quebrada.jpg");
    });
}
function ligaLampada(){
    let lampadaImagem = document.getElementById("lampada");
    lampadaImagem.setAttribute('src','imgs/ligada.jpg');
}
function desligaLampada(){
    let lampadaImagem = document.getElementById("lampada");
    if(lampadaImagem.getAttribute('src') == 'imgs/desligada.jpg')
        alert("A lampada já está desligada");
    else
        lampadaImagem.setAttribute('src','imgs/desligada.jpg');   
}
function restaurarLampada(){  
    let lampadaImagem = document.getElementById("lampada");
    if(lampadaImagem.getAttribute('src') == 'imgs/desligada.jpg')
        alert("A lampada não está quebrada!");
    else
        lampadaImagem.setAttribute('src','imgs/desligada.jpg');
}
window.addEventListener("load",quebraLampada);
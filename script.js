function encriptar(){
    var texto = document.getElementById("text-input").value.toLowerCase();
    var txtcifrado = texto.replace(/e/igm,"enter").replace(/o/igm,"ober").replace(/i/igm,"imes").replace(/a/igm,"ai").replace(/u/igm,"ufat");

    document.getElementById("right_img").style.display = "none";
    document.getElementById("texto1").style.display = "none";
    document.getElementById("copiar").style.display = "show";
    document.getElementById("texto2").innerHTML = txtcifrado;
    document.getElementById("text-input").innerHTML = " ";
    document.getElementById("copiar").style.display = "inherit";
  }

  function desencriptar() {
    var texto = document.getElementById("text-input").value.toLowerCase();
    var txtcifrado = texto.replace(/enter/igm,"e").replace(/ober/igm,"o").replace(/imes/igm,"i").replace(/ai/igm,"a").replace(/ufat/igm,"u");

    document.getElementById("right_img").style.display = "none";
    document.getElementById("texto1").style.display = "none";
    document.getElementById("copiar").style.display = "show";
    document.getElementById("texto2").innerHTML = txtcifrado;
    document.getElementById("text-input").innerHTML = " ";
    document.getElementById("copiar").style.display = "inherit";
  }

  function copiar() {
    var contenido = document.querySelector("#texto2");
    contenido.select();
    document.execCommand('copy');
  }

function responsiveMedia(id, mq) {
  let breakpoint = window.matchMedia(mq);
  function responsive(e) {
    if (e.matches) {
    document.getElementById(
        id
      ).innerHTML = '<img src="./img/Muñeco.png" alt="imagen de muñeco">';
    } else {
      document.getElementById(id).innerHTML = "";
    }
  }
  breakpoint.addEventListener("change", responsive);
  responsive(breakpoint);
  }
responsiveMedia("right_img", "(min-width: 1025px)");

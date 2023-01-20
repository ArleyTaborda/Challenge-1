function encriptar(){
    var texto = document.getElementById("text-input").value.toLowerCase();
    var txt_cifrado = texto.replace(/e/igm,"enter").replace(/o/igm,"ober").replace(/i/igm,"imes").replace(/a/igm,"ai").replace(/u/igm,"ufat");

    document.getElementById("right").style.backgroundImage = "none";
    document.getElementById("texto1").style.display = "none";
    document.getElementById("copiar").style.display = "show";
    document.getElementById("texto2").innerHTML = txt_cifrado;
    document.getElementById("text-input").innerHTML = " ";
    document.getElementById("copiar").style.display = "inherit";

  }

  function desencriptar() {
    var texto = document.getElementById("text-input").value.toLowerCase();
    var txt_cifrado = texto.replace(/enter/igm,"e").replace(/ober/igm,"o").replace(/imes/igm,"i").replace(/ai/igm,"a").replace(/ufat/igm,"u");

    document.getElementById("right").style.backgroundImage = "none";
    document.getElementById("texto1").style.display = "none";
    document.getElementById("copiar").style.display = "show";
    document.getElementById("texto2").innerHTML = txt_cifrado;
    document.getElementById("text-input").innerHTML = " ";
    document.getElementById("copiar").style.display = "inherit";
  }

  function copiar() {
    var encrypted_text = document.getElementById("texto2");
    navigator.clipboard.writeText(encrypted_text.value).then(()=> {console.log("Texto copiado exitosamente"); alert("Texto copiado exitosamente");}).catch(err => {console.error("Error: ", err); alert("Error: ") + err});
  }
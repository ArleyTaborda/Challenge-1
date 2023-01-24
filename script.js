//Se define la función para encriptar el texto
function encriptar() {
  //Se define la variable texto que recibe el texto que el usuario escriba y lo convierte todo en letras minúsculas
  var texto = document.getElementById("text-input").value.toLowerCase();
  //Se valida que el usuario haya ingresado un texto, caso contrario se arroja una alerta para obligar a que se especifique algún texto a encriptar
  if (texto.length > 0) {
    //Se define la variable txtCifrado en el cual se almacena el nuevo texto cifrado
    var txtCifrado = texto.replace(/[eéëèê]/igm, "enter").replace(/[oóòôö]/igm, "ober").replace(/[iìíîï]/igm, "imes").replace(/[aàâáä]/igm, "ai").replace(/[uùúûú]/igm, "ufat");
    //Se modifica el estilo visual del panel derecho, para mostrar el texto cifrado
    document.getElementById("right").style.backgroundImage = "none";
    document.getElementById("texto1").style.display = "none";
    document.getElementById("copiar").style.display = "show";
    document.getElementById("texto2").innerHTML = txtCifrado;
    document.getElementById("text-input").innerHTML = " ";
    document.getElementById("copiar").style.display = "inherit";
  }
  else {
    alert("Por favor ingresa algún texto para encriptar.")
  }
}
//Se define la función para desencriptar el texto
function desencriptar() {
  //Se define la variable texto que recibe el texto que el usuario escriba y lo convierte todo en letras minúsculas
  var texto = document.getElementById("text-input").value.toLowerCase();
  if (texto.length > 0) {
    var txtCifrado = texto.replace(/enter/igm, "e").replace(/ober/igm, "o").replace(/imes/igm, "i").replace(/ai/igm, "a").replace(/ufat/igm, "u");
    document.getElementById("right").style.backgroundImage = "none";
    document.getElementById("texto1").style.display = "none";
    document.getElementById("copiar").style.display = "show";
    document.getElementById("texto2").innerHTML = txtCifrado;
    document.getElementById("text-input").innerHTML = " ";
    document.getElementById("copiar").style.display = "inherit";
  }
  else {
    alert("Por favor ingresa algún texto para desencriptar.")
  }
}
//Se define la función para copiar el texto resultado
function copiar() {
  var encrypted_text = document.getElementById("texto2");
  navigator.clipboard.writeText(encrypted_text.value).then(() => { console.log("Texto copiado exitosamente"); alert("Texto copiado exitosamente"); }).catch(err => { console.error("Error: ", err); alert("Error: ") + err });
}
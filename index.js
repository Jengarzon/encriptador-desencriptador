function encriptar() {
  let texto = document.getElementById("texto").value;
  let titulo_lateral = document.getElementById("titulo_lateral");
  let parrafo = document.getElementById("parrafo");
  let logo_lateral = document.getElementById("logo_lateral");

  let textoEncriptado = texto
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");

  if (texto.length != 0) {
    document.getElementById("texto").value = textoEncriptado;
    titulo_lateral.textContent = "Texto encriptado con éxito";
    parrafo.textContent = "";
  } else {
    titulo_lateral.textContent = "Ningún mensaje fue encontrado";
    parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
    swal("Ooops!", "Debes ingresar un texto", "warning");
  }
}

function desencriptar() {
  let texto = document.getElementById("texto").value;
  let titulo_lateral = document.getElementById("titulo_lateral");
  let parrafo = document.getElementById("parrafo");
  let logo_lateral = document.getElementById("ogo_lateral");

  let textoEncriptado = texto
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");
  
    if (texto.length != 0) {
      document.getElementById("texto").value = textoEncriptado;
      titulo_lateral.textContent = "Texto desencriptado con éxito";
      parrafo.textContent = "";
    } else {
        titulo_lateral.textContent = "Ningún mensaje fue encontrado";
      parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
      swal("Ooops!", "Debes ingresar un texto", "warning");
    }
}

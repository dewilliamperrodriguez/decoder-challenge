//Las "llaves" de encriptación que utilizaremos son las siguientes:

//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"

const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");

function btnEncriptar() {
  const textoEncriptado = encriptar(textArea.value);
  mensaje.value = textoEncriptado;
  textArea.value = "" ;
  mensaje.style.backgroundImage = "none";
}

function btnDesencriptar() {
  const textoDesencriptado = desencriptar(mensaje.value);
  mensaje.value = textoDesencriptado;
}

function encriptar(stringEncriptado) {
  const matrizCodigo = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"]
  ];
  
  stringEncriptado = stringEncriptado.toLowerCase();
  
  for (let i = 0; i < matrizCodigo.length; i++) {
    if (stringEncriptado.includes(matrizCodigo[i][0])) {
      stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
    }
  }
  
  return stringEncriptado;
}

function desencriptar(stringDesencriptado) {
  const matrizCodigo = [
    ["enter", "e"],
    ["imes", "i"],
    ["ai", "a"],
    ["ober", "o"],
    ["ufat", "u"]
  ];
  
  stringDesencriptado = stringDesencriptado.toLowerCase();
  
  for (let i = 0; i < matrizCodigo.length; i++) {
    if (stringDesencriptado.includes(matrizCodigo[i][0])) {
      stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
    }
  }
  
  return stringDesencriptado;

}

function copiarTexto() {
    mensaje.select();
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
  
}

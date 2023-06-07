const textArea = document.querySelector(".texto");
const mensaje = document.querySelector(".mensaje");
const copiar = document.querySelector(".boton-copiar");
const parrafo = document.querySelector(".mensaje-arg");

/* La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat" */

function btnEncriptar() {
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
    copiar.style.display = 'block';
    parrafo.style.display = 'none';
}

function encriptar(stringEncriptar) {
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptar = stringEncriptar.toLowerCase(); /* tolowerCase vuelve minusculas las letras */

    for(let i = 0; i < matrizCodigo.length; i++)  {
        if(stringEncriptar.includes(matrizCodigo[i][0])) {
            stringEncriptar = stringEncriptar.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);
        }
    }
    return stringEncriptar;
}

function btnDesencriptar() {
    const textoDesencriptado = desencriptar(textArea.value);
    mensaje.value = textoDesencriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
}

function desencriptar(stringDesencriptar) {
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringDesencriptar = stringDesencriptar.toLowerCase(); /* tolowerCase vuelve minusculas las letras */

    for(let i = 0; i < matrizCodigo.length; i++)  {
        if(stringDesencriptar.includes(matrizCodigo[i][1])) {
            stringDesencriptar = stringDesencriptar.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0]);
        }
    }
    return stringDesencriptar;
}

function btnCopiar() {
    mensaje.select();
    mensaje.setSelectionRange(0, 99999);
    document.execCommand('copy');
}
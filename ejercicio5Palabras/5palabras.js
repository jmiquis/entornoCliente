function ejercicioPalabras() {

var palabras=prompt("introduzca una frase con 5 palabras");
var arrayCajas=document.getElementsByTagName("input");
var arrayPalabras=palabras.split(" ");

for (let i = 0; i < arrayPalabras.length; i++) {
    arrayCajas[i].value=arrayPalabras[i];
}


}




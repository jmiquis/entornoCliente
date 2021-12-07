var altura=7;
var base=altura*2-1;
var puntoMedio=Math.floor(base/2);
var asteriscos=0;
var mensaje="";

for (let i = 0; i < altura; i++) {
   for (let j = 0; j < base; j++) {
        if (j>=puntoMedio-asteriscos && j<=puntoMedio+asteriscos) {
            mensaje+="*";
        }
        else{
            mensaje+=" ";
        }
   }
    asteriscos=(i<Math.floor(altura/2))?asteriscos+1:asteriscos-1;
    mensaje+="\n";
}
console.log(mensaje);

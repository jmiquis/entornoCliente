function generaCombinaciones() {
    var arrayCombinaciones=new Array(50);
    var mensajeSalida="";
    for (let i = 0; i < arrayCombinaciones.length; i++) {
        arrayCombinaciones[i]=new Array(6);
        for (let j = 0; j < arrayCombinaciones[i].length; j++) {
            let numero=Math.floor(Math.random()*(49-1)+1);
            if (arrayCombinaciones[i].includes(numero)) {
                j--;
            }
            else{
                arrayCombinaciones[i][j]=numero;
            }
        }
        mensajeSalida+=arrayCombinaciones[i]+"\n";
    }
    document.getElementsByTagName("textarea")[0].value=mensajeSalida;
}


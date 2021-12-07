arreglo=[1,2,3,4,5];
var mediaArreglo=function(arreglo){
    media=0;
    arreglo.forEach(element => media+=element);
    return media/arreglo.length;
}

function prueba(media,arreglo) {
    console.log(media);
    console.log(arreglo[0]);
}


prueba(mediaArreglo(arreglo),arreglo);
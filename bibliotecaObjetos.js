
var biblioteca=new Map();

var datos=document.getElementsByTagName("input");


function Libro (titulo, autor,editorial,year) {

    this.titulo=titulo.toLowerCase();
    this.autor=autor;
    this.editorial=editorial;
    this.year=year;
    this.signature=biblioteca.size;

}

function addLibro() {
    var ejemplar=new Libro(datos[0].value,datos[1].value,datos[2].value,datos[3].value);
    biblioteca.set(ejemplar.titulo.toLowerCase(),ejemplar);
    datos[4].value=ejemplar.signature;
}

function buscarElemento(nombre) {

    var ejemplar=biblioteca.get(nombre.toLowerCase());
    if(ejemplar==undefined)return "el libro no se encuentra en nuestra base de datos";

    var mensaje="";
    for ( atributo in ejemplar) {
       mensaje+=`${atributo}:${ejemplar[atributo]} \n`;
    }
    return mensaje;
}

function borrar() {
    document.getElementById("salida").value="";
    for(i=0;i<5;i++){
        datos[i].value="";
    }
}





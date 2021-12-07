var arrayOrdenadores=new Map();
var datos=document.getElementsByTagName("input");


function Ordenador (){
  this.marca=datos[0].value;
  this.modelo=datos[1].value;
  this.memoria=datos[2].value;
  this.sd=datos[3].value;
  this.microprocesador=datos[4].value;
  this.grafica=datos[5].value;
  this.imagenGrafica=datos[6].value;
  this.imagenProcesador=datos[7].value;
}

function addOrdenador() {
  aux=new Ordenador;
  arrayOrdenadores.set(aux.marca,aux);
}

function buscar(params) {
  if (arrayOrdenadores.get(params)==undefined) {
   return "el elemento no está en nuestra base de datos";
  }
  else{
    let mensaje="";
    aux=arrayOrdenadores.get(params);
    for (const key in aux) {
        mensaje+=`${key}::${aux[key]} \n`;
      }
      document.getElementsByTagName("img")[0].src=aux.imagenGrafica;
      document.getElementsByTagName("img")[1].src=aux.imagenProcesador;
      return mensaje;
    }
  }


// <!-- Realizar la modificación del prototipo del objeto predefinido de JavaScript, Array, para que disponga de un método llamado “mediaAritmética” de los elementos que componen el array.
// // Para ello se hará uso del método prototype comentado en clase. -->

     Array.prototype.mediaAritmetica=function() {
      suma=0;
      this.forEach(elemento=>suma+=elemento);
      return suma/this.length;
    };

      var uno=[2,2,3,3];

    console.log(uno.mediaAritmetica());










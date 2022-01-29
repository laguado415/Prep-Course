// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  /*var matriz = [];
  for(let i = 0; i < Object.entries(objeto).length; i++){
     for(let j = 0; j < Object.entries(objeto)[i].length; j++){
       matriz[i] = Object.entries(objeto)[i][j];
     }
  }*/
  return Object.entries(objeto);
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  
  let stringClon = string; 
  let objeto = new Object;
  //cuenta el numero de veces que esta determinada letra y a su vez los elimina del stringClon(es la copia del string original) 
  var esta = function(elemento, letra){
    let suma = 0;
    for(let i = 0; i < elemento.length; i++){
       if(letra === elemento[i][0]){ 
        elemento = (i === 0)? elemento.slice(1,elemento.length +1): elemento.slice(0,i) + elemento.slice(i+1);
        suma++;
        i--;
      }
    }
    stringClon = elemento;
    return suma;
  };

  //conviete la letra a su codigo ascii y lo compara asi con las demas letras para saber que letra corresponde a su orden especifico {a,b,c,d}
  let primeraLetra = function(array){
    let letra = "z";
     for(let i = 0; i < array.length; i++){
        (letra.charCodeAt() >= array[i].charCodeAt())? letra = array[i] : letra ;
     };
     return letra;
  };
  //guarda cada letra y su respectivo contador en un Object, el loop se ejecuta hasta que stringClon esrte vacio
  while(stringClon.length !== 0){
    objeto[primeraLetra(stringClon)] = esta(stringClon,primeraLetra(stringClon));
  }
  return objeto;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  let string = s;
  let aux = s.length - 1;
/*se crea un for el cual se ejecutahasta que se recorra toda longitud del estring
  se crea un string clonado para asi no modificar el original 
  se crea un aux el cual nos ayudara a al recorido regresivo del string y a si poder mantener el contador del for intacto;
  if verifica si es mayor o menor mediante codigo ascii, agrega al principio el caracter mayor y agragra mediante .slice() sin el caracter anteriormente agregado
*/ 
  for(let i = string.length-1; i >= 0; i--){
      if(string[aux].charCodeAt() > 64 && string[aux].charCodeAt() < 91){
          string = string[aux] + string.slice(0,aux) + string.slice(aux+1,s.length);
      }else {
        aux --;
      }
    }

  return string;
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  
  /* string.prototype.split()  ----> convierte el estring en un arreglo
     array.prototype.reverse() ----> invierte los index de el array [a,b,c] split() --> [c,b,a]
     array.prototype.join() ---> junta todos los elementos del array en un string
  */
  let array = str.split(' ');
  for(let i = 0; i < array.length; i++){
    array[i] = array[i].split('').reverse().join(''); 
  }
  return array.join(' ');
  
  //return str.split(' ').reverse().join(' ');
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  let num = numero;
  let aux = 0; 
   //invierte el numero entero para compararlo con el original  
    do{
      aux += num % 10;
      num =  Number.parseInt(num/10);
     (num != 0 )? aux *= 10 : aux;  
     }while(num !== 0);

  return (aux === numero)? "Es capicua" : "No es capicua"; 
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  // .split() combierte la cadena en un array
   let arrayCharCadena = cadena.split('');
   let string = "";

   for(let i = 0; i < arrayCharCadena.length; i++){
     if(arrayCharCadena[i] === 'a' || arrayCharCadena[i] === 'b'|| arrayCharCadena[i] === 'c'){
       continue;
     }
     string += arrayCharCadena[i]; 
   }
  return string;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  // clona o copia el array original para no ser modificado
  let array = arr.slice();

  /* recorre cada una de las posiciones de un arreglo comparandolas con sigo misma en la posicion establecida por 
     el loop y si es mayor en logitud los cabia de lugar
  */ 
  for(let i = 0; i < arr.length; i++){
    for(let j = i; j < arr.length; j++){
      
       if(array[i].length > array[j].length){
        let string = array[i];
        array[i] = array [j];
        array[j] = string;
      }
    }
     
  }
  return array;
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí 
  let array1 = arreglo1.slice();
  let array2 = arreglo2.slice();
  let array = [];
// busca un elemento en un array
  let estaElemento = function(array,elemento){
    for(let i = 0; i < array.length; i++){
        if(array[i] === elemento){
          return true;
        };
     }
  }
  /*recorre uno de los array comprobando si hay un elemento de array  igual en los dos array originales
    comprueba que no se repita el elemento en array a retornar
  */  
  for(let i = 0; i < array2.length; i++){
    if(estaElemento(array1,array2[i]) && !estaElemento(array,array2[i])){
      array.push(array2[i]);
    };
 }
  return array;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};


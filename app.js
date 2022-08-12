// Hight Order Function ... son funciones que operan con otras funciones, ya sea que las tomen como 
//argumento o que las retornen

// abstracción orientada a programacion funcional

// antes operabamos sobre valores
// operar sobre acciones

//tomar por persona(cebolla, apio, zanahoria) --> cortar en pedazos y agregar a guisantes


/*function mayorQue20(m) {
    return m > 20;
}

mayorQue20(34); //m tomara el valor de 34



//podemos crear nuevas funciones

function mayorQue(number) {
    //console.log(number)
   // return (m) => m > number;// automagicamente, cuando las arrow function solamente lleva un parametro se omite el parentesis


return m =>{ //m es un parametro
    console.log(m)
    return m > number;
    };
}
const mayorQue30 = mayorQue30(30);
mayorQue30(34);//compara que 34 es mayor que 30

const mayorQue100 = mayorQue100(100); //esto hace que el codigo sea reutilizable
const mayorQue75 = mayorQue75(75);
*/


//------------RESUMEN----------------//

//Se crea esta funcion para reutilizar una condicion
function mayorQue(number) {
    return m => {
        return m > number
    }
    ;
}

const mayorQue100 = mayorQue(100);
const mayorQue75 = mayorQue(75); // le asigna el valor a m
//el resultado quedaria de la siguiente manera
//return 100 > 75;
//el codigo se hace reutilizable en determinado ocasiones, en todas.

  
//-------------RESUMEN-------------//

function mayor3numeros(a ,b ,c) {
    let mayor;
    if (a > b) {
        mayor = a;

    } else{
        mayor = b;
    }
    if(c > mayor ) {
        mayor = c;
    }

    return mayor;
}

console.log(mayor3numeros(10, 5, 7));



// usando funciones de orden superior, solucionar el problema para determinar el
//mayor de 3 numeros

function mayor(a , b){
     //con operador ternario//

    //return c =>  a > b ? (a > c ? a : c) : (b > c ? b : c); //ternarios anidados

    //normalmente//
    return c => { // se le agrega return para que retorne inmediatamente
        if (a > b){ // si a es mayor que b
            if( a > c) { // y si a es mayor que b
                return a; //que retorne a
            }else { //sino
                return c; //que retorne c, en caso de el otro ser falso
            }//cerramos

        }else { //es igual que else if en ese caso || si la condicion de la linea 88 no se cumple
            if(b > c) { //se cumple este
                return b;
            } else {
                return c;
            }
        }
    }
}

const mayorQue20y30 = mayor(20,30);

console.log(mayorQue20y30(15));


                    //-----PROFESOR EXPLICA ASI-------// ----------------------//  -------------------------- //
//--------------------------------------------------------------------------------------------------------------------------------//

const funcion1 = function (numero = 0) {
    console.log(numero);
  }
  
  funcion1(100);
  
  let suma = function(a, b) {
    console.log(a + b);
  }
  
  let mul = function(a, b) {
    console.log(a * b);
  }
  
  // suma = function(a, b) {
  //   console.log(a * b)
  // }
  
  // suma(2, 3);
  
  // cuando las funciones son tratadas como variables 
  // Esto es una función de primera clase. 
  // puede ser pasada como parametro (argumento) puede ser retornada de otra funcion 
  
  const operacion = function (op, num1, num2) {
    op(num1, num2);
  }
  
  // recibe tres parametros
  // funcion
  // numero 
  // numero
  
  operacion(suma, 6, 7);
  
  operacion(mul, 5, 9);
  
  // funciones flecha --> arrow functions 
  
  const sinFlecha = function () {
    console.log('normalita ')
  }
  
  const flecha = () => {
    console.log("funcion flecha")
  }
  
  flecha();
  
  // callbacks -- funciones callback 
  
  // es una funcion que se pasa a otra funcion como argumento 
  // para luego ser invocada dentro de la funcion 

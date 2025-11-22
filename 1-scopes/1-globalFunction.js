//EJEMPLO 1
console.log("--EJERCICIO 1: VARIABLE GLOBAL VS VARIABLE LOCAL--");
let nombre = "Edwin"; //Este es una variable global

function mostrarNombre(){
    let nombre = "Usuario";//Este es una variable local
    console.log(nombre);
}

mostrarNombre()

//EJEMPLO 2
console.log("--EJERCICIO 2: MODIFICAR UNA VARIABLE DESDE UNA FUNCION--");
let contador = 0;
function incrementar(){
    contador = contador+1;
    console.log(contador);
}

incrementar()
incrementar()
incrementar()

//EJEMPLO 3
console.log("--EJERCICIO 3: INTENTAR ACCEDER UNA VARIABLE LOCAL DESDE AFUERA--");
//let mensaje = "uwu"
function crearMensaje(){
    let mensaje = "Hola desde la funcion";
}

console.log(mensaje);
//EJEMPLO 4
console.log("--EJERCICIO 4: FUNCIONES QUE COMPARTEN Y NO COMPARTEN VARIABLES--");
let edad = 20;
function mostrarEdad(){
    console.log(edad);
}

function nuevaEdad(){
    edad = 30;
    console.log(edad);
}

mostrarEdad()
nuevaEdad()

//EJEMPLO 5
console.log("--EJERCICIO 5: SOMBRAS DE VARIABLE (SHADOWING)--");
let pais = "Guatemala";
function mostrarPais(){
    let pais = "Mexico"
    console.log(pais);
}

mostrarPais();
console.log(pais);
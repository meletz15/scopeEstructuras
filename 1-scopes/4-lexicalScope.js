//EJERCICIO 1
console.log("--EJERCICIO 1: ACCESO A VARIABLES DEL ENTORNO PADRE--");
let mensaje = "Hola";

function msg(){
    let mensaje = "Adios";
    console.log(mensaje);
}

msg();

//EJERCICIO 2
console.log("--EJERCICIO 2: FUNCIONES ANIDADAS--");
function externa(){
    let x = 10;

    function interna(){
        console.log(x);
    }

    console.log(interna);
};

externa();

//EJERCICIO 3
console.log("--EJERCICIO 3: SOMBREADO (SHADOWING)");
let total = 100;

function calcular(){
    let total = 50;

    console.log(total);
};

console.log(total);

//EJERCICIO 4
console.log("--EJERCICIO 4: ALCANCE LEXICO VS ALCANCE DINAMICO");
let nombre = "Edwin";

function mostrarNombre(){
    console.log(nombre);

    function cambiar(){
        let nombre = "Carlos";
        mostrarNombre();
    }
}

mostrarNombre();
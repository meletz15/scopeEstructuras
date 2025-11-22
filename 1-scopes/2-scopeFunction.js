//Ejemplo 1
console.log("---------------------------------");
console.log("Ejemplo 1");
function saludar(){
    let mensaje = "Hola Edwin";
    console.log(mensaje);
}

saludar();
console.log("---------------------------------");
//Ejemplo 2
console.log("Ejemplo 2");
function crearMensaje(){
    let mensaje = "saludo desde scope"
    console.log(mensaje);
}

crearMensaje()
console.log("---------------------------------");
//Ejemplo 3
console.log("Ejemplo 3");
let usuario = "Edwin";

function mostrarUsuario(){
    let usuario = "Invitado";
    console.log(usuario);
}

mostrarUsuario();
console.log("---------------------------------");
//Ejemplo 4
console.log("Ejemplo 4");
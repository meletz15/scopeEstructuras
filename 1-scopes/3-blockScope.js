//EJERCICIO 1
console.log("--EJERCICIO 1: VARIABLE DENTRO DE UN IF--");
function variable(){
    if(a = 10){
        let numero = 10;
        console.log(numero);
    }
}

variable()
//console.log(numero);
//EJERCICIO 2
console.log("--EJERCICIO 2: CONTADOR DENTRO DE UN FOR--");
for(let contador = 0; contador >= 5; contador++){
    contador = 6;
    console.log(contador);
}

//EJERCICIO 3
console.log("--EJERCICIO 3: REASIGNACION DE BLOQUE--");
function eje3(){
    let dia = "Viernes";
    console.log(dia);
};

let dia = "Jueves";
console.log(dia);
eje3();

//EJERCICIO 4
console.log("--EJERCICIO 4: CONST DENTRO DE UN BLOQUE--");
function eje4(){
    const dia = 10;
    console.log(CONST);
};

dia = 5;
console.log(dia);
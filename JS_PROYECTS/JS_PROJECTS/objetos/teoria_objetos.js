// Crear objetos usando notación literal.
const estudiante = {
    nombre : "Ane", 
    apellido : "Arruti", 
    edad : 23
}

// Método  --> nombreCompleto() forma de declarar el objeto
estudiante.nombreCompleto = function(){
    return estudiante.nombre + " " + estudiante.apellido;
}

// Añadir una propiedad 
estudiante.curso = "Informática";

// Borrrar la propiedad
delete estudiante.curso

// 2.- Usando la palabra reservada New
const estudiante1 = new Object();
estudiante1.nombre = "Jon";
estudiante1.apellido = "Gómez";
estudiante1.edad = 25;
estudiante1.nombreCompleto = function(){
    return estudiante1.nombre + " " + estudiante1.apellido;
}

// 3-. Crear un constructor
function Estudiante(nombre, apellido, edad){
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.nombreCompleto= function(){
        return this.nombre + " " + this.apellido;
    }
}

// 4 -. crear un estudiante
let a = new Estudiante(" María", "Eugenia", 30);

// Método create, crear objetos
let nuevo = Object.create(a);

//Recorrer las propiedades de un objeto.
/*for (propiedad in objeto)*/
for (propiedad in a ){
    console.log (a [propiedad]);
}
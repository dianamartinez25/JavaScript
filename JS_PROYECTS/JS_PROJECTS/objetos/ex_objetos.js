// 1-. Crear un objeto usando notación literal:
const coche = {
    marca : "Ford",
    modelo : "Fiesta",
    año : 2015
}

// Método para declarar el objeto
coche.arrancar = function(){
    return coche.marca + " " + coche.modelo + " " + coche.año + " " + "está en marcha" 
}

// 2-. Crear objeto con la palabra reservada New.
const polo = new Object();
polo.marca = "Lacoste"
polo.color = "Azul"
polo.talla = "L"
polo.fabricar = function(){
    return  "Polo"+ " " + polo.marca + " " + polo.color + " " + polo.talla + " " + "fabricado."
}

// 3-. Crear un objeto usando un constructor.
function empleado(nombre, apellido, edad, cargo){
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.cargo = cargo;
    this.presentarse= function(){
        return "Hola, soy" + " " +  this.nombre + " " + this.apellido + " y soy" + " " + this.cargo
    }
}

let emp1 = new empleado ( "Mario", "Madrid", 32, "Developer")


// 4-. Recorrer el valor de las propiedades del objeto "enpleado".
for (propiedad in empleado ){
    console.log (empleado [propiedad]);
}

// 5.- Añadir una propiedad 
polo.tejido = "Algodón";

// 6-. Borrar la propiedad creada en el ejercicio anterior.
delete polo.tejido

// 7 -. Uso de los métodos Object.keys, Object.values, Object.entries
const persona = {
    Laura: 21,
    Ane: 25,
    Luis : 30,
    Jon : 15,
    Alain : 18
}
// 1
console.log(Object.keys(persona).length>0? true :false)
//2
console.log(Object.values(persona))
//2.2
console.log(Object.values(persona).reduce(function(acum, n){return acum + n}))
//3
console.log(Object.entries(persona))
//3.2
console.log(Object.entries(persona).filter(function(p){if (p[1]> 18)return true}))
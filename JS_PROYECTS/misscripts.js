class Animal{
    constructor (nombre, peso, edad){
        this._nombre = nombre;
        this._peso = peso;
        this._edad = edad;
        
    }

informacion(){
    return `${this._nombre} - ${this._peso} kg. - ${this._edad} años`
}
}

class Conejo extends Animal{
    constructor(nombre, peso, edad, color){
        super(nombre, edad, peso);
        this._color = color;
    }
    informacion(){
        return `${this._nombre} - ${this._peso} kg. - ${this._edad} años - ${this._color}`
    }
}

class Perro extends Animal{
    constructor(nombre, peso, edad, raza){
        super (nombre, peso, edad);
        this._raza = raza;
    }
    informacion(){
        return `${this._nombre} - ${this._peso} kg. - ${this._edad} años - ${this._raza}`
    }
}

class Gato extends Animal{
    constructor(nombre, peso, edad, sexo){
        super (nombre, peso, edad);
        this._sexo = sexo;
    }
    informacion(){
        return `${this._nombre} - ${this._peso} kg. - ${this._edad} años - ${this._sexo}`
    }
    
}
let perro1 = new Perro("Laika", 8, 4, "Pastor Alemán");
let gato1 = new Gato("Ringo", 4, 6, "Macho")
let conejo1 = new Conejo("Dumbo", 2, 3, "Blanco")
let animales = [perro1, gato1, conejo1];

let lista = document.getElementById("listaAnimales");
function mostrarAnimales(){
     for(let animal of animales){
        let item = document.createElement("li");
        item.innerText = animal.informacion();
        lista.appendChild(item);
    }
}

function borrarAnimales(){
    while (lista.firstChild){
        lista.removeChild(lista.firstChild)
    }
}
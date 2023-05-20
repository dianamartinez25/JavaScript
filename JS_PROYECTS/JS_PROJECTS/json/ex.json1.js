let titulo;
let director;
let lanzamiento;
let duracion;
let actores;
let premioOscar;
function obtenerDatos(){
    fetch("ex.json1.json")
    .then(respuesta=>respuesta.json())
    .then (function(salida){
        titulo = salida.titulo;
        director = salida.director;
        lanzamiento = salida.lanzamiento,
        duracion = salida.duracion;
        actores = salida.actores;
        premioOscar = salida.premioOscar;

        let elementoTexto=document.getElementById("texto");
        elementoTexto.innerHTML= "Pelicula "+ titulo + " dirigida por " + director + " estrenada " + lanzamiento + " duracion " + duracion + " minutos " + actores.join("-")
    })

.catch(function(error){
    alert(error)})

}

    
    
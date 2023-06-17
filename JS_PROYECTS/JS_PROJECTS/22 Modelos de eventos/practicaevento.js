let parrafo = document.getElementById ("parrafo1");
let boton = document.getElementById("miBoton");
let enlace = document.getElementById("miEnlace");

parrafo.addEventListener("click", (e) => alert(e.target.id))
boton.addEventListener("click", mostrarMensaje);
enlace.addEventListener("click", evitarEnlace);


function mostrarMensaje(e){
    alert(e.target.id);
}

function evitarEnlace(e){
    e.preventDefault();
    alert("Enlace no habilitado")
}

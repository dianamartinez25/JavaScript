//funcion anónima
/*fetch("persona.json")
    .then(function(respuesta){return respuesta.json()})
    .then(function(datos){console.log(datos)})*/

// función definida
let datosJson;
fetch("persona.json")
    .then(respuesta=>respuesta.json())
    .then (datos=>{
        datosJson= datos.nombre;
        let elementoTexto = document.getElementById("nombre");
        elementoTexto.textContent= datosJson
    }
    )
    .catch(error => alert(error));
    
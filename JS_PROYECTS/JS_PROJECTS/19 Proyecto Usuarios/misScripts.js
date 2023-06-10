function obtenerTodos() {
    fetch('http://localhost:3000/usuarios', {
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(respuesta => respuesta.json())
        .then(datos => {
            let cuerpoTabla = document.getElementById("tblContenido");
            let salida = "";
            for(let usuario of datos){
                salida += `
                    <tr>
                        <td>${usuario.id}</td>
                        <td>${usuario.nombre}</td>
                        <td>${usuario.localidad}</td>
                        <td>${usuario.edad} </td>
                        
                    </tr>
                `;
            } 
            cuerpoTabla.innerHTML = salida;
        })
        .catch(error => {console.log(error) })
        //.catch(error => { throw new Error("Error en la solicitud: " + error) })
} //fin funcion obtenerTodos()

function consultarUno() {
   
        let id = document.getElementById('txtConsulta').value;

        if (id === '') {
            alert('No ha ingresado ningún ID');
            return;
        }

       fetch('http://localhost:3000/usuarios/' + id)
        .then(respuesta =>  respuesta.json())
        .then(datos=>{ console.log(datos)
            document.getElementById('consultaId').value = datos.id;
            document.getElementById('consultaNombre').value = datos.nombre;
            document.getElementById('consultaLocalidad').value = datos.localidad;
            document.getElementById('consultaEdad').value = datos.edad;
        })
        .catch(error => console.log(error))
  
}

function agregarUno() {
        let id = document.getElementById("inputId").value;
        let nombre = document.getElementById("inputNombre").value;
        let localidad= document.getElementById("inputLocalidad").value;
        let edad = document.getElementById("inputEdad").value;

        // Nota: La API proporcionada (my-json-server) no permite la creación real de nuevos registros
        // en el repositorio de GitHub. Solo simula las operaciones POST.
        fetch('http://localhost:3000/usuarios', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                nombre: nombre,
                localidad: localidad,
                edad:edad,
                })
        })    
        .then(respuesta => respuesta.json() )
        .then(datos => {    
            //Llama a la función obtenerTodos() para actualizar la lista de dispositivos
            //No veremos esa actualización porque la API real no se modificará
            obtenerTodos();
            alert(`Se ha agregado un nuevo archivo:\nNombre: ${datos.nombre}\nLocalidad: ${datos.localidad}\nEdad: ${datos.edad}`);
        })
       
      .catch (error=>console.log(error)) 
    
}

function modificarUno() {        
        let id = document.getElementById('txtConsulta').value;
        let nombre = document.getElementById('consultaNombre').value;
        let localidad = document.getElementById('consultaLocalidad').value;
        let edad = document.getElementById('consultaEdad').value;
        
        
        if (nombre === '') {
            alert('El registro a modificar no está completo');
            return;
        }

        fetch('http://localhost:3000/usuarios/' + id, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                nombre: nombre,
                localidad:localidad,
                edad:edad,
            }),
        })
        .then(respuesta => respuesta.json())
        .then(datos => {
             alert(`Se ha modificado el archivo ${id}. Nuevo contenido:\n${JSON.stringify(datos)}`);
            //Llama a la función obtenerTodos() para actualizar la lista de dispositivos
            //No veremos esa actualización porque la API real no se modificará
            obtenerTodos();
        })
        .catch(error => { console.error('Error:', error) })
    } 


function eliminarUno() {
        let id = document.getElementById('txtConsulta').value;

        if (id === '') {
            alert('No ha ingresado ningún ID');
            return;
        }

        fetch('http://localhost:3000/usuarios/' + id,{
            method:'DELETE',
        })
        .then(respuesta => {
            alert(`Se ha eliminado el archivo ${id}.`);
            document.getElementById('consultaNombre').value="";
            document.getElementById('consultaLocalidad').value="";
            document.getElementById('consultaEdad').value="";
            //Llama a la función obtenerTodos() para actualizar la lista de dispositivos
            //No veremos esa actualización porque la API real no se modificará
            obtenerTodos();
        })
        .catch(error => console.log(error))
    }

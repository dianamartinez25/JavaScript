let empleados = [];
//Constructor
function Empleado(nombre, apellido, cargo){
    this.nombre = nombre
    this.apellido = apellido
    this.cargo = cargo
}
//contenido de la caja = input
function guardarempleado(){
    let nombre = document.getElementById("txtNombre").value;
    let apellido = document.getElementById("txtApellido").value;
    let cargo = document.getElementById("txtCargo").value;
    let e = new Empleado(nombre, apellido, cargo)
    empleados.push(e);
    alert("Empleado añadido");
    limpiarCampos();
}

function limpiarCampos(){
    document.getElementById("txtNombre").value="";
    document.getElementById("txtApellido").value="";
    document.getElementById("txtCargo").value="";
}
//visualizar empleados
function mostrarempleado(){
    //console.table(empleados);
    for(e of empleados){
        document.getElementById("parrafo").innerHTML += e.nombre + " " +  e.apellido  + " " +  e.cargo + "<br>";
    }
    empleados = [];
}

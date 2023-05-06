function saludar(){
    //obtener el contenido de la caja de texto
    let textoNombre = document.getElementById("txtNombre").value
    document.getElementById("txtSaludo").textContent = "Hola " + textoNombre
}

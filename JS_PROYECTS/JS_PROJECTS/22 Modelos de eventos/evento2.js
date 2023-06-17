document.getElementById("miCampo").addEventListener("keydown", verificarEntrada);

function verificarEntrada(e){
    // compruebo el código Ascii de la tecla pausada
    if(e.keyCode<48 || e.keyCode>57){
        e.preventDefault();
    }
}

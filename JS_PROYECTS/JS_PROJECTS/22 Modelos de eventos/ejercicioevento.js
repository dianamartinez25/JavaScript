const resultado = document.getElementById("resultado");

let contador = 0;

document.getElementById("aumentar").addEventListener('click', (e)=>{
    contador++;
    resultado.innerHTML=contador
} )

document.getElementById("disminuir").addEventListener('click', (e)=>{
    contador--;
    resultado.textContent=contador
} )
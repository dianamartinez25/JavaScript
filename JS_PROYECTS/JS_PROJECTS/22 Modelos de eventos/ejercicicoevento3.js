boton1 = document.getElementById("btn1");
boton2 = document.getElementById("btn2");
boton3 = document.getElementById("btn3");

boton1.addEventListener("click", mostrarColor);
boton2.addEventListener("click", mostrarColor);
boton3.addEventListener("click", mostrarColor);

function mostrarColor(e){
    if (e.target.id=="btn1") document.body.style.background= "yellow";
    if (e.target.id=="btn2") document.body.style.background= "blue";
    if (e.target.id=="btn3") document.body.style.background= "red";
}
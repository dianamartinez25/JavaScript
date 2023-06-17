const bloque = document.querySelector(".midiv");
bloque.style.bakcground = "red"
bloque.addEventListener("mouseover", cambiaColor);
bloque.addEventListener("mouseout", cambiaColor);
function cambiaColor(e){
    switch (e.type){
        case "mouseover":
            bloque.style.background = "lightblue";
            break;
        case "mouseout":
            bloque.style.background = "yellow";
            break;
        default:
            console.log("Error")
    }
}
// 1.- Crear un array y vizualizar por pantalla el contenido del array.
//const numeros = [2 , 4 , 6, 8, 10, 12, 14, 16, 18, 20];
// se puede utlizar un bucle
/*let pares = [];
for (let i=2; i<=20; i+=2){
    pares.push(i);
}

//console.log(numeros)
document.write(pares);*/

// 2.- Calcular la suma y la media de los elementos del siguiente array.
/*const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let suma = 0;
let media = 0;
for  (let i =0; i<a.length; i++){
    suma = suma +a[i];
    //suma +=a[i]
}
media = suma/a.length;
//console.log("la suma es " + suma + " y la media es " + media)
document.write(("la suma es " + suma + " y la media es " + media))*/

// 3.- Dado el siguiente array, crea un Script que (odenar) nos devuelva el elemento menor y el mayor del array.
let b = [23, 44, 66, 77, 88, 99]
document.write(Math.min(...b));

document.write(Math.max(...b));


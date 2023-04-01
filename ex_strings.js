//EJERCICIOS STRNGS (PÁG)
/* 1.- CONCATENACIÓN DE CADENAS
var s1 = "Feliz"
var s2 = "Cumpleaños"
var s = s1.concat(" " + s2)
document.writeln(s) */

// 2.- SUBCADENAS
/*var letras = "abcdefghijklmabcdefghijklm"
// Obtener subcadena desde el indice 20 hasta el final 
document.write(letras.substring(20));
document.write('<br>');
document.write('<br>');
//Obtener subcadena desde la posicion 3 hasta la 6
document.write(letras.substring(3,6));*/

// 3.- OBTENER POSICIONES, devuelve el caracter de una posición
var letras = "abcdefghijklmabcdefghijklm"
document.write("<br> El caracter 2 de la cadena letras es: " +letras.charAt(2));
document.write("<br> El caracter 13 de la cadena letras es: " +letras.charAt(13));
document.write("<br> El caracter '$' de la cadena letras se encuentra en la posición: " +letras.indexOf("$"));
//Devuelve la ultima posición de un caracter en una cadena.
document.write ("<br> La última 'c' se encuentra en la posición: " +letras.lastIndexOf("c"));
document.write("<br> La última 'a' se encuentra en la posición: " +letras.lastIndexOf("a"));
document.write("<br> El último '$' se encuentra en la posición: " +letras.lastIndexOf("$"))



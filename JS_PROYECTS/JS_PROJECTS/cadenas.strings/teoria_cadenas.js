//Declarar cadenas
var cadena1="Esto es una cadena";
//var cadena1=new String("Esto es una cadena");

//PROPIEDADES 
//length --->Nos devuelve la longitud de una cadena
document.write("la longitud de '" +cadena1 +"' es "+ cadena1.length);
//devuelve 18
//MÉTODOS
//concatenar
var cadena1="Hola";
var cadena2="Adios";
document.write('<br>');
document.write("concatenar " +cadena1 +" "+ cadena2 + "---"+ cadena1.concat(cadena2));

//convertir a mayúsculas, minúsculas
document.write('<br>');
document.write("cadena 1 a mayúsculas " +cadena1.toUpperCase());
document.write("cadena 1 a mayúsculas " +cadena1.toLowerCase());
//charAt(posición) -->Devuelve el carácter que se encuentra en esa posición
document.write("El carácter cadena que se encuentra en la posición 4" + cadena1.charAt(0));

//indexOf(caracter) -->Nos devuelve la posición 
var palabra ="holo";
document.write('<br>');
document.write(palabra.indexOf("o"));
document.write('<br>');
//lastindexOf(caracter) -->Nos devuelve ultima posición
document.write(palabra.lastIndexOf("o"));
document.write('<br>');
//substring(inicio,final) ---> extraer una porción de la cadena
//el segundo argumento es el carácter en el que se va a parar

var palabra="Hola amigo";
document.write('<br>');
document.write(palabra.substring(1,8));
document.write('<br>');
document.write(palabra.substring(2));
//substr(inicio,número de caracteres) ---> 
//segundo argumento le decimos número de caracteres que va a tener la cadena
document.write('<br>');
document.write(palabra.substr(1,8));
document.write('<br>');
document.write(palabra.length);



/***************************************************************************************** */

//Declaración cadenas (2 formas)
var cadena1 = "Esto es una cadena";
//Instanciamos el objeto String
var cadena2=new String(" otra cadena");
//cadena vacía
var vacia=new String();
var vacía2="";

//CONCATENACIÓN DE CADENAS
var salida=cadena1.concat(cadena2);
document.write(salida);

//PROPIEDADES
//length: devuelve la longitud de una cadena
document.write ("<br> La longitud de la cadena cadena1  es: " +cadena1.length);

//MÉTODOS:
//BÚSQUEDA:

//CharAt(<num>): devuelve el caracter de una posición.-->s
document.write ("<br> El caracter 6 de la cadena cadena1  es: "+cadena1.charAt(6));

//indexOf(<caracter>): devuelve la primera posición de un caracter en una cadena.-->10
document.write ("<br> La primera aparición de la letra 'a' en cadena1 es: "+cadena1.indexOf("a"));

//lastIndexOf(<caracter>): devuelve la última posición de un caracter en una cadena.
//devuelve -->17
document.write ("<br> La última aparición de la letra a en cadena1 es: "+cadena1.lastIndexOf("a"));

//search(<cadena|expresión>): buscar una cadena o expresión regular en otra cadena.
//devuelve su posición -->12
document.write ("<br> Busca la cadena 'cadena' en la variable cadena1: "+cadena1.search("cadena"));

//INCLUYE, EMPIEZA O TERMINA
//includes(<cadena>): devuelve true si la cadena incluye el parámetro.
document.write ("<br> ¿Incluye 'una' cadena1? "+cadena1.includes("una"));

//startsWith(<cadena>): devuelve true si la cadena empieza con el parámetro.
document.write ("<br> Empieza cadena1 con la palabra 'Esto'? "+cadena1.startsWith("Esto"));

//endsWith(<cadena>): devuelve true si la cadena finaliza con el parámetro. -->false
document.write ("<br> Acaba cadena1 con la palabra 'texto'? "+cadena1.endsWith("texto"));

//EXTRACCION
//Devuelve --->Es
//substring(<posicion inicial>,<posicion final>): devuelve la cadena comprendida entre ambas posiciones:
document.write ("<br>La cadena que hay entre el 0 y el 2 en cadena1 es: "+cadena1.substring(0,2));


//substr(<posicion inicial>,<número de caracteres>): devuelve la cadena comprendida entre la posición inicial y el número de caracteres:
document.write  ("<br> La cadena de cadena1 de 3 caracteres que hay a partir del caracter 0 es: "+cadena1.substr(0,3));


//trim(<cadena>): extrae los caracteres de la cadena eliminando los espacios del principio y del final.
document.write  ("<br> La cadena sin espacios quedaría: " + "             Hola, caracola               ".trim());

//MÁYÚSCULAS Y MINÚSCULAS
//toLowerCase(): devuelve la cadena en minúsculas:
alert (cadena1.toLowerCase());
//toUpperCase(): devuelve la cadena en mayúsculas:
alert (cadena1.toUpperCase());


//MÉTODOS ESPECIALES:
//toString: devuelve el valor del objeto String.


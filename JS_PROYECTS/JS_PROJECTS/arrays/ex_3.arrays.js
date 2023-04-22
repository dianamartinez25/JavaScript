
    const estudiantes = [
  {nombre: "Ane", apellido: "Arruti", edad: 24, curso: "Marketing" },
  {nombre: "Jon", apellido: "Zabala", edad: 22, curso: "Informática" },
  {nombre: "María", apellido: "Doe", edad: 20,curso: "Contabilidad" },
  {nombre: "Victor", apellido: "Gómez", edad: 23, curso: "Informática" }
  ];
   /*---------------------------------------------------------------------------
    Se pide: Crear otro array (nombrecompleto) que contenga el nombre completo
    nombre + apellido de cada estudiante 
   ---------------------------------------------------------------------------*/
/*const b = estudiantes.map(function (n) {return n.nombre + " " + n.apellido})
document.write(b)*/
    
   /*---------------------------------------------------------------------------
    Usando el array estudiantes, se pide buscar y devolver los datos de la 
    estudiante María
   ---------------------------------------------------------------------------*/
/*const valorbuscado = estudiantes.find(function (n) {if (n.nombre == "María") return n});
console.log(valorbuscado);*/

  /*---------------------------------------------------------------------------
  /* Filtrar todos los alumnos que sean de Informática
   ------------------------------------------------------------------------*/
/*const b = estudiantes.filter(function (n) {return n.curso == "Informática"});
console.log(b);*/

/*---------------------------------------------------------------------------
 Queremos saber si existen estudiantes >25 (some)
---------------------------------------------------------------------------*/
/*const b = estudiantes.some(function(n) {return n>25});
console.log(b);*/

/*---------------------------------------------------------------------------
 Queremos saber si todos estudiantes edad =20 (every)
/*---------------------------------------------------------------------------*/
/*const b = estudiantes.every(function (n) {return n=20});
console.log(b);*/
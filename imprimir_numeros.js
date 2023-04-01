 // Falta por teminar {Ejercicios Estructuras De Cotrol - Bucles (Page)}
        //1
        var i=1;
        while (i <= 100){
            document.writeln(i);
            i++;
        }
       //document.write('<br>');
        // 2
        // Escribir un nombre x veces
        /*var a = 1;
        var text = ""
        var nombre = prompt("Dime tu nombre");
        var numero = Number(prompt("Dime número de repeticiones"))*/


        //3
        // 100 primeros pares
        for (var b = 2; b<=100;b+=2){
            document.writeln(b);
        }
        //document.write('<br>');
        //4
        // 100 primeros impares
        for (var c = 1; c<=100; c+=2){
            document.writeln(c);
        }

        //5 Suma de los números
        var suma = 0;
        var d;
        for( d = 1; d <= 20; d++){
            suma += d;
        }
        document.write(suma);
        // se puede hacer con let o con var, solamente hay que sustituir var/let
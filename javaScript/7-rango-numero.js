/*
7. Escribe un programa para la consola que le pida al usuario dos números e imprima en la consola los números en ese rango. Por ejemplo, si el usuario ingresa 5 como primer número y 10 como segundo número, el programa debe imprimir:

    ``` JavaScript
    5
    6
    7
    8
    9
    10
    ```

    NOTA:
       - Puedes asumir que el primer número siempre va a ser menor o igual que el segundo.
       - Fíjate que se imprimen también los números en los límites, en el ejemplo el 5 y el 10.

 */


       let nu1 = Number(prompt('dijite primer numero debe ser menor a el segundo '));
       let nu2 = Number(prompt('dijite el segundo numero'));
       
       
       if (nu1 < nu2) {
           for (let i = nu1; i <= nu2; i++) {
               console.log(i);
               document.write('  la palabra es: ' + i , '   ', '</br>');    
           }
       }
       console.log('el primer numero dijitado  '+nu1,'  es mayor que '+ nu2);
       document.write('el primer numero dijitado '+nu1,'  es mayor que '+ nu2);
       
/*
8. Crea un programa a partir de las siguientes instrucciones:

   - Crea una variable llamada nombres con un arreglo que tenga los siguientes elementos: "Pedro", "Pablo", "María", "Juan", "Diana".
   - Pídele al usuario que ingrese un nombre e insértalo al final del arreglo que creaste en el paso 1.
   - Pídele al usuario que ingrese otro nombre y reemplaza la tercera posición del arreglo con este valor.
   - Recorre el arreglo e imprímelo.
   - Un ejemplo de cómo se comportaría el programa en la consola sería el siguiente:

    ``` JavaScript
        Ingresa un nombre > Camilo
        Ingresa otro nombre > Ariel
        Pedro
        Pablo
        Ariel
        Juan
        Diana
        Camilo
    ```
 */

    let miArray =  ["Pedro", "Pablo", "María", "Juan", "Diana"]
    let fin = prompt('Ingresa un nombre');
    let tre = prompt('Ingresa otro nombre');
    
    
    miArray.push(fin);
    miArray.splice(2,1,tre);
    console.log(miArray);
    document.write(miArray);
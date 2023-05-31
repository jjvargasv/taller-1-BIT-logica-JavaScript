/*
9. Escribe un programa que:
    - Le pida al usuario un número y cree un arreglo de números empezando en el 1 hasta el número que el usuario ingrese (incluyéndolo)
    - Elimine el segundo elemento.
    - Recorra e imprima el arreglo.

    Ejemplo:

    ``` JavaScript
        Ingresa un número> 5
        1
        3
        4
        5
    ```

 */

    let nun =Number( prompt('Ingresa unnumero'));
    let miArray = [];

    for(let i=1 ; i <= nun ; i++){
        miArray.push(i);
        
    }
    miArray.splice(1,1);

    console.log(miArray);
    document.write(miArray, '</br>');

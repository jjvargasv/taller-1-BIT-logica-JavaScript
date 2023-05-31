/*
5. Escribe un programa que le pida al usuario ingresar una frase. El programa debe imprimir la frase en la consola 10 veces.
    NOTA: utiliza un ciclo para imprimir la frase las 10 veces.
 */    


    let frase = prompt('dijite la frace que desea repetir'); 

    for(let i = 1; i < 11; i ++ ){
        console.log( frase );
        document.write( '  la palabra es: ' +i, '   ' +frase,'</br>');
    }
    
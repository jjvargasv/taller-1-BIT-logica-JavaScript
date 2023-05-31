/* 3. Escribe un programa que le pida al usuario un número e imprima si es un múltiplo de 5 o no.

    Si es múltiplo debe imprimir `Si, el número x es múltiplo 5`, de lo contrario debe imprimir `No, el número x no es múltiplo de 5`.

    *NOTA: Un múltiplo de 5 es aquel que dividido por 5 da por resultado un número entero (sin residuo). Por ejemplo 10, 15, 20, etc. son múltiplos de 5. 11 no es múltiplo de 5 porque quedaría un residuo de 1.*
 */    


let nu2 = Number(prompt('dijite su  numero')); 

if( nu2 % 5 ===0 ){
    console.log( 'Si, el número '+nu2, ' es múltiplo 5');
    document.write('Si, el numero '+nu2, ' no es multipo de 5');
}
else{
console.log('No, el número '+nu2, ' no es múltiplo de 5');
document.write('No, el numero   '+nu2, 'no es multipo de 5');

}


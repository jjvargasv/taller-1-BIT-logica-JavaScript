
// 2. Escribe un programa que pida al usuario su año de nacimiento y nombre e imprime su edad actual en la consola con la frase `Hola X, grandioso! Tienes X años`. Asume que el año actual es 2020 y el usuario ingresa 2000, el programa debe imprimir en la consola: `Hola Juan, grandioso! Tienes 20 años`
// 

let nomb = prompt ('dijite su Nombre'); 
let nu2 = Number(prompt('dijite su año de nacimiento')); 
let actu=2020;

 let edad = actu - nu2;

console.log('Hola  '+ nomb, 'grandioso! Tienes'+ edad, 'años');
document.write('Hola  '+ nomb, 'grandioso! Tienes'+ edad, 'años');
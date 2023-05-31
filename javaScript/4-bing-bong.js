/*4. Escribe un programa que le pida al usuario ingresar un número.
   - Si el número es múltiplo de 3 debe imprimir en la consola `bing`.
   - Si el número es múltiplo de 5 debe imprimir en la consola `bong`.
   - Si el número es múltiplo tanto de 3 como de 5 debe imprimir en la consola `bingbong`.
   - Si no cumple ninguna de las condiciones anteriores debe imprimir el mismo número.

 */


let nu2 = Number(prompt('dijite su  numero'));

if (nu2 % 3 === 0 && nu2 % 5 === 0) {
  console.log('bingbong');
  document.write(' bingbong ');
}
else if (nu2 % 3 === 0) {
  console.log(`bing`);
  document.write(' bing ');
}
else if (nu2 % 5 === 0) {
  console.log(`bong`);
  document.write('  bong');
}
else {
  console.log(`numero no es multipo de 3 o de 5`);
  document.write('  numero no es multipo de 3 o de 5');
}


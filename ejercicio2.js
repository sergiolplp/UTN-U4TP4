// Profesora. No supe resolver este ejercicio hasta que googleando entendí que los valores que ingresa un usuario
// con el input prompt es un String aún siendo números. Por lo que para que JS entienda que son números, se debe utilizar
// parseInt.

var nombre = prompt ('Hola, ¿como te llamas?');
alert ('Hola '+nombre+' escribe tres números y te diré cuál es el mayor. ¿Empezamos?');

var valor1 = parseInt (prompt('Escribe el primer número.'));
var valor2 = parseInt (prompt('Muy bien! Escribe ahora el segundo.'));
var valor3 = parseInt (prompt('Perfecto! ya casi terminamos, escribe ahora el último número.'));

if (valor1>=valor2 && valor1>=valor3){document.write('<h2>el número mayor es '+valor1+'</h2>');}
else if (valor2>=valor1 && valor2>=valor3){document.write('<h2>el número mayor es '+valor2+'</h2>');}
else document.write('<h2>el número mayor es '+valor3+'</h2>');
var nombre = prompt ('Hola, ¿como te llamas?');
alert ('Hola '+nombre+' escribe tres números y te diré cuál es el mayor. ¿Empezamos?');

var valor1 = parseInt (prompt('Escribe el primer número.'));
var valor2 = parseInt (prompt('Muy bien! Escribe ahora el segundo.'));
var valor3 = parseInt (prompt('Perfecto! ya casi terminamos, escribe ahora el último número.'));

var numeros = (valor1, valor2, valor3);
var mayor = 0;

for(var i=0; i<numeros.length; i++){ 
if(numeros (i) > mayor){mayor = numeros(i)};

document.write('<h2>el número mayor es '+mayor+'</h2>');}

var nombre = prompt('Hola, ¿cuál es su nombre?');
alert('Bienvenido '+nombre+' soy tu consejero de vehículos.');

var metros = prompt('Por favor '+nombre+ ', indique la cantidad de metros y le aconsejaré qué medio de transporte utilizar.');

if(metros>=0 && metros<=1000){document.write('<h2> Por favor '+nombre+' camine un poco.</h2>');}

else if (metros>= 999 && metros<=10000){document.write('<h3> De una vuelta en bicicleta '+nombre+ ' y disfrute el aire.</h3>');}

else if (metros>=9999 && metros<=30000){document.write('<h4> Dirijase a la parada de colectivo más cercana, '+nombre+ '. Y recuerde mirar atrás al bajar.</h4>');}

else if (metros<=100000){document.write('<h5>Tome un taxi o remisse, '+nombre+ ' . Lleve cambio.</h5>');}

else {document.write('<h6>Lo mejor sería viajar en avión, '+nombre+'. Disfrute el vuelo.</h6>');}

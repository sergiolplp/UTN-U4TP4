var nombre = prompt('Hola, ¿cuál es su nombre?:','');

var metros = prompt(nombre("Por favor, indique la cantidad de metros y le aconsejaré qué medio de transporte utilizar"));

if(metros<=1000){document.write("<h2>Le recomiendo ir a pié</h2>");}

else if (metros<=10000){document.write("<h2>Debería subir a una bicicleta</h2>");}

else if (metros<=30000){document.write("<h2>Debería tomar un colectivo</h2>");}

else if (metros<=100000){document.write("<h2>Tome un taxi o remisse</h2>");}

else (metros>=100000);{document.write("<h2>Lo mejor sería viajar en </h2>");}
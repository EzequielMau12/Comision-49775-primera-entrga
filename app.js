var cantidadCuotas = parseInt(prompt("Ingrese la cantidad de cuotas:"));
var valorTotal = parseFloat(prompt("Ingrese el valor total:"));
var tasaInteres = parseFloat(prompt("Ingrese la tasa de interés (%):"));


if (isNaN(cantidadCuotas) || isNaN(valorTotal) || isNaN(tasaInteres)) {
alert("Por favor, ingrese valores numéricos válidos.");
} else {

  var montoCuota = valorTotal / cantidadCuotas + (valorTotal * tasaInteres) / cantidadCuotas;


alert("El monto de cada cuota es: " + montoCuota.toFixed(2));}
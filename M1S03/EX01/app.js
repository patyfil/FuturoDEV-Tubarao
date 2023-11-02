// Utilizando window.prompt() e window.alert():


// Pergunte com prompt o peso (kg) da remessa
let peso = prompt("Digite o peso da remessa (kg): ");
peso = Number(peso); // Converte a string informada em number
// Pergunte com prompt a distância (km) da remessa
let distancia = prompt("Digite a distância da remessa (km): ");
distancia = Number(distancia); // Converte a string informada em number
// Calcule o frete, considere 6 reais por quilo por quilômetro
let frete = 6 * peso * distancia;
// Exiba com alert o preço do frete calculado.
alert("O valor do frete é: R$ " + frete.toFixed(2));

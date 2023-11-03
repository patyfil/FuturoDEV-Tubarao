// Utilizando window.prompt() e window.alert():

/*
// Pergunte com prompt o peso (kg) da remessa
let peso = prompt("Digite o peso da remessa (kg): ");
// Converte a string informada em number
peso = Number(peso); 
// Pergunte com prompt a distância (km) da remessa
let distancia = prompt("Digite a distância da remessa (km): ");
// Converte a string informada em number
distancia = Number(distancia); 
// Calcule o frete, considere 6 reais por quilo por quilômetro
let frete = 6 * peso * distancia;
// Exiba com alert o preço do frete calculado.
alert("O valor do frete é: R$ " + frete.toFixed(2));
*/


// Função para calcular o frete
function calcular() {
    // Obter os valores de peso e distância do formulário
    const peso = parseFloat(document.getElementById("peso").value);
    const distancia = parseFloat(document.getElementById("distancia").value);
    const taxa = 6;
    // Verificar se ambos os campos têm valores
    if (!isNaN(peso) && !isNaN(distancia)) {
        // Realizar o cálculo do frete 
        const frete = peso * distancia * taxa;

        // Exibir o resultado no elemento HTML com id "resultado"
        document.getElementById("resultado").textContent = "O custo do frete é R$ " + frete.toFixed(2);

        // Esconder a div "calculadora" e mostrar a div "calculadora__resultado"
        document.getElementById("calculadora").style.display = "none";
        document.getElementById("calculadora__resultado").style.display = "flex";
    } else {
        alert("Por favor, preencha ambos os campos com valores numéricos.");
    }
}

// Função para limpar o resultado e os campos de entrada
function limpar() {
    document.getElementById("resultado").textContent = "";
    document.getElementById("peso").value = ""; // Limpa o campo de peso
    document.getElementById("distancia").value = ""; // Limpa o campo de distância

    // Esconder a div "calculadora__resultado" e mostrar a div "calculadora"
    document.getElementById("calculadora").style.display = "flex";
    document.getElementById("calculadora__resultado").style.display = "none";
}

// Associar a função 'calcular' ao evento 'submit' do formulário
document.getElementById("frete-form").addEventListener("submit", function (e) {
    e.preventDefault(); // Evitar que o formulário seja enviado
    calcular(); // Chamar a função calcular
});

// Certificar-se de que a div "calculadora__resultado" está oculta no início
document.getElementById("calculadora__resultado").style.display = "none";

// Utilizando window.prompt() e window.alert():
/*
// Pergunte com prompt o valor do salário bruto
let valorSalarioBruto = prompt("Digite o valor do salário bruto: ")
// Converta a string informada em number
valorSalarioBruto = Number(valorSalarioBruto);
// Calcule o FGTS considerando 8% ao mês.
// Exemplo: ftgs = salario * 0.08;
let fgts = (0.08 * valorSalarioBruto) / 12;
// Calcule o FGTS acumulado do ano.
// Exemplo: ftgsAnual = fgts * 12;
let fgtsAnual = fgts * 12;
// Exiba com alert os valores.
alert(`O valor do FGTS mensal é: ${fgts.toFixed(2)} e o valor do FGTS anual é: ${fgtsAnual.toFixed(2)}`);
*/

// Função para calcular o FGTS
function calcular() {
    // Obter o valor do salário do formulário
    const valorSalarioBruto = parseFloat(document.getElementById("valorSalarioBruto").value);

    // Verificar se o campo têm valor
    if (!isNaN(valorSalarioBruto)) {
        // Realizar o cálculo do FGTS MENSAL
        const fgtsMensal = (0.08 * valorSalarioBruto) / 12;

        // Realizar o cálculo do FGTS ANUAL
        const fgtsAnual = fgtsMensal * 12;

        
        // Exibir o resultado
        document.getElementById("fgtsMensal").textContent = `FGTS Mensal - R$ ${fgtsMensal.toFixed(2)}`;
        document.getElementById("fgtsAnual").textContent = `FGTS Anual - R$ ${fgtsAnual.toFixed(2)}`;


        // Adicionar as classes
        document.getElementById("fgtsMensal").classList.add("cor_azul");
        document.getElementById("fgtsAnual").classList.add("cor_verde");


        // Esconder a div "calculadora" e mostrar a div "calculadora__resultado"
        document.getElementById("calculadora").style.display = "none";
        document.getElementById("calculadora__resultado").style.display = "flex";
    } else {
        alert("Por favor, preencha todos os campos com valores numéricos.");
    }
}


// Função para limpar o resultado e os campos de entrada
function limpar() {
    // document.getElementById("valorSalarioBruto").textContent = "";
    document.getElementById("valorSalarioBruto").value = "";

    // Esconder a div "calculadora__resultado" e mostrar a div "calculadora"
    document.getElementById("calculadora__resultado").style.display = "none";
    document.getElementById("calculadora").style.display = "flex";

    // Remover as classes
    document.getElementById("fgtsMensal").classList.remove("cor_azul");
    document.getElementById("fgtsAnual").classList.remove("cor_verde");

}


// Associar a função 'calcular' ao evento 'submit' do formulário
document.getElementById("salario_form").addEventListener("submit", function (e) {
    e.preventDefault(); // Evitar que o formulário seja enviado
    calcular(); // Chamar a função calcular
});

// Certificar-se de que a div "calculadora__resultado" está oculta no início
document.getElementById("calculadora__resultado").style.display = "none";

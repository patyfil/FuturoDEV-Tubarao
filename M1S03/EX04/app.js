// Utilizando window.prompt() e document.write():
/*
// Pergunte com prompt o nome da pessoa
let nome = prompt("Digite o nome da pessoa: ")
// Pergunte com prompt a data de início das férias
let dataInicio = prompt("Digite a data de início das férias (no formato dd/mm/yyyy):")
// Pergunte com prompt a data de término das férias
let dataTermino = prompt("Digite a data de término das férias (no formato dd/mm/yyyy):")
// Exiba na página uma carta gerada a partir das informações
// Ex.: “Romeu Casarotto“, “01/01/2024“, “30/01/2024“
// ‌Caro(a) responsável,

// Gostaria de solicitar minhas férias.

// Funcionário(a): Romeu Casarotto
// Data de início: 01/01/2024
// Data de término: 30/01/2024

// Agradeço a atenção.

// Atenciosamente, Romeu Casarotto.

document.write("Caro(a) responsável,\n\n");
document.write("Gostaria de solicitar minhas férias.\n\n");
document.write("Funcionário(a): " + nome + "\n");
document.write("Data de início: " + dataInicio + "\n");
document.write("Data de término: " + dataTermino + "\n\n");
document.write("Agradeço a atenção.\n\n");
document.write("Atenciosamente, " + nome + ".");
*/



// Função para obter a data formatada
function formatarData(data) {
    const dataObj = new Date(data);
    const dia = dataObj.getDate().toString().padStart(2, '0');
    const mes = (dataObj.getMonth() + 1).toString().padStart(2, '0'); // Adicione +1, pois os meses são base 0
    const ano = dataObj.getFullYear();
    return `${dia}/${mes}/${ano}`;
}

// Função para gerar carta
function gerarCarta() {
    // Obtenha uma referência aos campos de entrada
    const nomeField = document.getElementById("nomeFuncionario");
    const dataInicialField = document.getElementById("dataInicial");
    const dataFinalField = document.getElementById("dataFinal");

    // Obtenha os valores dos campos de entrada
    const nome = nomeField.value;

    function capitalizeWords(string) {
        return string.replace(/\b\w/g, char => char.toUpperCase());
    }

    const nomeCapitalizado = capitalizeWords(nome);
    const dataInicial = formatarData(dataInicialField.value);
    const dataFinal = formatarData(dataFinalField.value);

    // Exiba os valores dos campos de entrada no documento
    document.getElementById("nomeFuncionario__resultado").innerHTML = nomeCapitalizado;
    document.getElementById("nomeFuncionario_carta").innerHTML = nomeCapitalizado.split(' ')[0];

    document.getElementById("dataInicial__resultado").innerHTML = dataInicial;
    document.getElementById("dataFinal__resultado").innerHTML = dataFinal;

    // Atualize o conteúdo do <span> com a data atual formatada
    document.getElementById("dataEmissao").textContent = getDataAtual();

    // Esconder a div "carta" e mostrar a div "carta__resultado"
    document.getElementById("carta").style.display = "none";
    document.getElementById("carta__resultado").style.display = "flex";
}


// Função para obter a data atual no formato "dd de mês de aaaa"
function getDataAtual() {
    // Crie uma nova instância de Date
    const dataAtual = new Date();

    // Use métodos para obter o dia, mês e ano
    const dia = dataAtual.getDate();
    const mes = dataAtual.toLocaleString('pt-BR', { month: 'long' }); // Obtém o mês por extenso
    const ano = dataAtual.getFullYear();

    // Formate a data
    const dataFormatada = `${dia} de ${mes} de ${ano}`;

    return dataFormatada

}


// Função para limpar o resultado e os campos de entrada
function limpar() {
    document.getElementById("nomeFuncionario").value = "";

    // Obtenha uma referência aos campos de data
    const dataInicialField = document.getElementById("dataInicial");
    const dataFinalField = document.getElementById("dataFinal");

    // Defina o valor dos campos de data como uma string vazia
    dataInicialField.value = "";
    dataFinalField.value = "";

    // Esconder a div "carta__resultado" e mostrar a div "carta"
    document.getElementById("carta__resultado").style.display = "none";
    document.getElementById("carta").style.display = "flex";
}


// Associar a função 'gerarCarta' ao evento 'submit' do formulário
document.getElementById("dados_form").addEventListener("submit", function (e) {
    e.preventDefault(); // Evitar que o formulário seja enviado
    gerarCarta(); // Chamar a função gerarCarta
});

// Certificar-se de que a div "carta__resultado" está oculta no início
document.getElementById("carta__resultado").style.display = "none";

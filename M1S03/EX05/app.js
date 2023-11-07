/*
// Vamos gerar um convite de casamento.
// Utilizando window.prompt() e document.write():

// Pergunte com prompt o nome da pessoa convidada
let nome = prompt("Digite o nome do convidado(a): ")

// Pergunte com prompt o nome da primeira pessoa do casal
let nome1 = prompt("Digite o nome da primeira pessoa do casal: ")

// Pergunte com prompt o nome da segunda pessoa do casal
let nome2 = prompt("Digite o nome da segunda pessoa do casal: ")

// Pergunte com prompt a data do casamento
let data = prompt("Digite a data do casamento: ")

// Pergunte com prompt a hora do casamento
let hora = prompt("Digite a hora do casamento: ")

// Exiba na página um convite a partir das informações
Ex.: “Romeu Casarotto“, “Alê“, “Dani“ “01/01/2024“, “19“

‌Caro(a) Romeu Casarotto!

Você está convidado(a) para o casamento de Alê e Dani,
a ser realizado no dia 01/01/2024, às 19 horas.

Contamos com a sua presença!

Atenciosamente,
os(as) noivos(as)
Extra: Experimente substituir prompt e document.write por elementos HTML 
(ex. <input>, <button> e <p>), 
pegar os valores pelos inputs e exibir no site com parágrafos.



document.write(`Caro(a) ${nome}! <br><br>
Você está convidado(a) para o casamento de ${nome1} e ${nome2}, <br>
a ser realizado no dia ${data}, às ${hora} horas. <br><br>
Contamos com a sua presença! <br><br>
Atenciosamente, <br>
os(as) noivos(as)`)

*/

document.getElementById("convite__resultado").style.display = "none";


// Função para limpar o resultado e os campos de entrada
function limpar() {
    document.getElementById("nomeConvidado").value = "";
    document.getElementById("nomeNoivo").value = "";
    document.getElementById("nomeNoiva").value = "";

    const dataField = document.getElementById("dataCasamento");
    const horaField = document.getElementById("horaCasamento");
    // Defina o valor dos campos de data como uma string vazia
    dataField.value = "";
    horaField.value = "";

    // Esconder a div "convite__resultado" e mostrar a div "convite"
    document.getElementById("convite__resultado").style.display = "none";
    document.getElementById("convite").style.display = "flex";
}


// Associar a função 'gerarconvite' ao evento 'submit' do formulário
document.getElementById("dados_form").addEventListener("submit", function (e) {
    e.preventDefault(); // Evitar que o formulário seja enviado
    gerarConvite(); // Chamar a função gerarconvite
});

// Função para gerar o convite
function gerarConvite() {
    // Esconder a div "convite__resultado" e mostrar a div "convite"
    document.getElementById("convite").style.display = "none";
    document.getElementById("convite__resultado").style.display = "flex";


    // Obtenha a data do casamento
    const dataCasamentoField = document.getElementById("dataCasamento");
    const dataCasamento = new Date(dataCasamentoField.value);

    // Verifique se a data é válida
    if (isNaN(dataCasamento.getTime())) {
        alert("Por favor, digite uma data válida.");
        return;
    }

    // Formate a data no formato dd/mm/aaaa
    const dataFormatada = `${dataCasamento.getDate()}/${dataCasamento.getMonth() + 1}/${dataCasamento.getFullYear()}`;



    // Obtenha uma referência aos campos de entrada
    const nomeConvidadoField = document.getElementById("nomeConvidado");
    const nomeNoivoField = document.getElementById("nomeNoivo");
    const nomeNoivaField = document.getElementById("nomeNoiva");
    const horaCasamentoField = document.getElementById("horaCasamento");

    // Obtenha o valor dos campos de entrada
    const nomeConvidado = capitalizeWords(nomeConvidadoField.value);
    const nomeNoivo = capitalizeWords(nomeNoivoField.value);
    const nomeNoiva = capitalizeWords(nomeNoivaField.value);
    const horaCasamento = horaCasamentoField.value;


    function capitalizeWords(string) {
        return string.replace(/\b\w/g, char => char.toUpperCase());
    }


    // Valide os campos de entrada
    if (nomeConvidado === "") {
        alert("Por favor, digite o nome do convidado(a).");
        nomeConvidadoField.focus();
        return;
    }

    if (nomeNoivo === "") {
        alert("Por favor, digite o nome do noivo.");
        nomeNoivoField.focus();
        return;
    }

    if (nomeNoiva === "") {
        alert("Por favor, digite o nome da noiva.");
        nomeNoivaField.focus();
        return;
    }

    if (horaCasamento === "") {
        alert("Por favor, digite a hora do casamento.");
        horaCasamentoField.focus();
        return;
    }


    document.getElementById("convite_texto").innerHTML = `
    Caro(a) <strong>${nomeConvidado}</strong>!
    <br><br>
    Você está convidado(a) para o casamento de <strong>${nomeNoivo}</strong> e <strong>${nomeNoiva}</strong>,
    <br>
    a ser realizado no dia <strong>${dataFormatada}</strong>, às <strong>${horaCasamento}</strong> horas.
    <br><br>
    Contamos com a sua presença!
    <br><br><br>

    Atenciosamente,
    <br>
    os(as) noivos(as)
`;

}
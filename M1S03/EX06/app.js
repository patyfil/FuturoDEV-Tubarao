/*
Vamos fazer um menu online para uma lanchonete e permitir que seja 
escolhido o código de algum produto e quantidade para calcular o preço.

Utilizando <input>, <button> e alert:
Exiba em uma tabela HTML o cardápio (imagem anexo)
Exiba um campo texto para informar o código do lanche
Exiba um campo de texto para informar a quantidade
Exiba um botão para fazer o cálculo
Exiba em um alert o valor total do pedido
Ex.: “1123“, “2“
2 Hambúrguer custam R$ 24,00.

Extra: Experimente substituir alert por elementos HTML (ex. <p>), 
pegar os valores pelos inputs e exibir no site com parágrafos.
*/

// Certificar-se de que a div "carta__resultado" está oculta no início
document.getElementById("carta__resultado").style.display = "none";


function calcularPedido() {
    // Esconder a div "carta" e mostrar a div "carta__resultado"
    document.getElementById("carta").style.display = "none";
    document.getElementById("carta__resultado").style.display = "flex";

    var codigo = document.getElementById("codigo").value;
    var quantidade = parseInt(document.getElementById("quantidade").value);
    var precoTotal = 0;

    // Encontra a linha da tabela com o código correspondente
    var tabela = document.querySelector('table');
    for (var i = 1; i < tabela.rows.length; i++) { // Começa em 1 para pular o cabeçalho da tabela
        var row = tabela.rows[i];
        var produtoCodigo = row.cells[0].textContent;

        if (produtoCodigo === codigo) {
            var valor = parseFloat(row.cells[2].textContent.replace('R$ ', '').replace(',', '.'));
            precoTotal = valor * quantidade;
            var produtoNome = row.cells[1].textContent;
            document.querySelector("#resultadoPedido .valor__total").textContent = quantidade + " " + produtoNome + " custam R$ " + (precoTotal.toFixed(2));
            return;
        }
    }

    document.querySelector("#resultadoPedido .valor__total").textContent = "Código de produto não encontrado.";
}


// Função para limpar o resultado e os campos de entrada
function limpar() {
    document.getElementById("codigo").value = "";
    document.getElementById("quantidade").value = "";


    // Esconder a div "carta__resultado" e mostrar a div "carta"
    document.getElementById("carta__resultado").style.display = "none";
    document.getElementById("carta").style.display = "flex";
}


// Associar a função 'calcularPedido' ao evento 'submit' do formulário
document.getElementById("dados_form").addEventListener("submit", function (e) {
    e.preventDefault(); // Evitar que o formulário seja enviado
    calcularPedido(); // Chamar a função gerarCarta
});



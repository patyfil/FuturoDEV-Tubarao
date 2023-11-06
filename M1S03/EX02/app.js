// Utilizando window.prompt() e window.alert():
/*
// Pergunte com prompt a nota da primeira avaliação
let nota1 = prompt("Digita a primeira nota: ")
// Converta a string informada em number
nota1 = Number(nota1);
// Pergunte com prompt a nota da segunda avaliação
let nota2 = prompt("Digita a segunda nota: ")
// Converta a string informada em number
nota2 = Number(nota2);
// Pergunte com prompt a nota da terceira avaliação
let nota3 = prompt("Digita a terceira nota: ")
// Converta a string informada em number
nota3 = Number(nota3);
// Calcule a média das 3 notas considerando mesmo peso para todas
// Exemplo: media = (nota1 + nota2 + nota3) / 3;
let media = (nota1 + nota2 + nota3) / 3
// Exiba com alert a média final após o cálculo.
alert(`A média das 3 notas é: ${media.toFixed(2)}`);
*/

// Função para calcular as notas
function calcular() {
    // Obter os valores de peso e distância do formulário
    const nota1 = parseFloat(document.getElementById("nota1").value);
    const nota2 = parseFloat(document.getElementById("nota2").value);
    const nota3 = parseFloat(document.getElementById("nota3").value);

    // Verificar se todos os campos têm valores
    if (!isNaN(nota1) && !isNaN(nota2) && !isNaN(nota3)) {
        // Realizar o cálculo das notas
        const nota_media = (nota1 + nota2 + nota3) / 3;

        // Definir a classificação do aluno
        const classificacao = nota_media >= 7 ? "Aprovado" : nota_media >= 5 ? "Em recuperação" : "Reprovado";

        // Exibir o resultado
        document.getElementById("resultado").textContent = `${classificacao} - ${nota_media.toFixed(1)}`;

        // Adicionar as classes
        const classes = classificacao === "Aprovado" ? ["cor_verde"] : classificacao === "Em recuperação" ? ["cor_azul"] : ["cor_vermelho"];
        document.getElementById("resultado").classList.add(...classes);

        // Esconder a div "calculadora" e mostrar a div "calculadora__resultado"
        document.getElementById("calculadora").style.display = "none";
        document.getElementById("calculadora__resultado").style.display = "flex";
    } else {
        alert("Por favor, preencha todos os campos com valores numéricos.");
    }
}


// Função para limpar o resultado e os campos de entrada
function limpar() {
    document.getElementById("resultado").textContent = "";
    document.getElementById("nota1").value = "";
    document.getElementById("nota2").value = "";
    document.getElementById("nota3").value = "";

    // Esconder a div "calculadora__resultado" e mostrar a div "calculadora"
    document.getElementById("calculadora__resultado").style.display = "none";
    document.getElementById("calculadora").style.display = "flex";

    // Remover as classes
    document.getElementById("resultado").classList.remove("cor_verde", "cor_azul", "cor_vermelho");
}


// Associar a função 'calcular' ao evento 'submit' do formulário
document.getElementById("notas_form").addEventListener("submit", function (e) {
    e.preventDefault(); // Evitar que o formulário seja enviado
    calcular(); // Chamar a função calcular
});

// Certificar-se de que a div "calculadora__resultado" está oculta no início
document.getElementById("calculadora__resultado").style.display = "none";

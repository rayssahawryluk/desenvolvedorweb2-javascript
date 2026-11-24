function saudarCliente() {
    const nome = document.getElementById("nome").value;
    const elementoMensagem = document.getElementById("mensagem-boas-vindas");

    if (nome.trim() !== "") {
    // Interpolação de string usando template literais
    elementoMensagem.textContent = `Olá, ${nome}! Seja bem-vindo(a).`;
    } else {
        elementoMensagem.textContent = "Por favor, digite um nome válido.";
    }
}

function calcular() {
    const n1 = parseFloat(document.getElementById("num1").value);
    const n2 = parseFloat(document.getElementById("num2").value);
    const divResultados = document.getElementById("resultados");

    // Operações matemáticas
    const soma = n1 + n2;
    const subtracao = n1 - n2;
    const multiplicacao = n1 * n2;
    const divisao = n2 !== 0 ? (n1 / n2).toFixed(2) : "Divisão por zero não é permitida";

    divResultados.innerHTML =`
    <p><strong>Soma:</strong> ${n1} + ${n2} = ${soma}</p>
    <p><strong>Subtração:</strong> ${n1} - ${n2} = ${subtracao}</p>
    <p><strong>Multiplicacao:</strong> ${n1} * ${n2} = ${multiplicacao}</p>
    <p><strong>Divisão:</strong> ${n1} ÷ ${n2} = ${divisão}</p>
`;
}

// 1. EXECUÇÃO COM JAVASCRIPT PURO (VANILLA)
document.getElementById('btn-js').addEventListener('click', function () {
   
    // Seleciona todos os checkboxes marcados
    const marcados = document.querySelectorAll('input[name="tarefa"]:checked');
    const divResultado = document.getElementById('resultado');
 
     if (marcados.length === 0) {
        divResultado.innerHTML = '<strong>[JavaScript]</strong> Nenhum item selecionado.';
        return;
    }
 
    // Extrai os valores para um array
    const itens = Array.from(marcados).map(checkbox => checkbox.value);
 
    // Exibe na tela
    divResultado.innerHTML = `
        <strong>[Executado via JavaScript]</strong>
        <ul>${itens.map(item => `<li>${item}</li>`).join('')}</ul>
    `;
});

//execução com Jquery
$(document).ready(function () {
    $('#btn-jq').on('click', function () {

        //seleciona os checkboxex marcados usando seletor jQuery
        const marcados = $('input[name="tarefa"]:checked');
        const $resultado = $('#resultado');

        if (marcados.length === 0) {
            $resultado.html('<strong>[jQuery]</strong> Nenhum item selecionado.');
            return;
        }

        //mapeia os valores usando $.map() e .get() para converter em array comum
        const itens = marcados.map(function () {
            return $(this).val();
        }).get();

        //exibe na tela
        const listaHtml = itens.map(item => `<li>${item}</li>`).join('');
        $resultado.html(`
            <strong>[Executado via jQuery]</strong>
            <ul>${listaHtml}</ul>
        `);
    })
})
 
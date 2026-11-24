const input = document.getElementById("numero");

input.addEventListener("keydown", function(event){

    if (event.key === "Enter"){
        calcular();
    }
});

function calcular(){
    const numero = document.getElementById("numero").value;
    const resultado = document.getElementById("resultado");

    resultado.innerHTML = "";

    if (numero === "") {
        resultado.innerHTML = "Digite um número!";
        return;
    }

    for (let i = 1; i <= 10; i++) {
        resultado.innerHTML += `${numero} x ${i} = ${numero * i}<br>`;
    }
}
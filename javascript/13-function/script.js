//  continuação 17/11/2026 3
// Funções - blocos reutilizáveis

function minhaFuncao(){
    console.log("Teste de Função");
}

minhaFuncao();
minhaFuncao(); //reaproveitando a função 

//funçao na variável 
const minhaFuncaonaVariavel = function() {

}

minhaFuncaonaVariavel();

//funções com parãmetros]
function saudar(nome){
    console.log(`Olá, ${nome}`);
}

saudar("Rayssa");

function potencia(base, expoente){
    return base **expoente;
}

console.log(potencia(2, 3));

//return
const a = 5;
const b = 6;

function soma(n1, n2){
    return n1 + n2;
}

const resultado = soma(a, b); //a constante guarda o return da função 
console.log(resultado);

console.log(soma(a, b));

//arrow function
const raizQuadrada = (x) => {
    return x * x;
}

console.log(raizQuadrada(4));

//funções matemáticas
let c = 2;
let d = 3;
let f = 2.7;
let h = 4;
let i = 9;
let j = 1;

console.log(Math.pow(c, d)); //potencia
console.log(Math.round(f));//aproximadamente
console.log(Math.max(h, i, j)); // numero maior / maximo)
console.log(Math.min(h, i, j)); //numero menor / minimo)

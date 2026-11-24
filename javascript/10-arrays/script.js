//arrays
const nomes = ["João", "Maria", "José"];

console.log(nomes);
console.log(nomes[0]);
console.log(nomes[1]);
console.log(nomes[2]);
console.log(nomes[3]); //essa posição não existe (undefined)

//adicionando um elemento no array
nomes.push("Beatriz");
console.log(nomes);

//removendo o ultimo elemento do array
nomes.pop();
console.log("Beatriz foi removida " + nomes);

//alterar um elemento do array
nome[0] = "João Pedro";
console.log(nomes);

// Unindo 2 arrays
const numeros=[6,7,8];
console.log(numeros);
console.log(numeros.length);
 
const outrosNumeros = [3,9,2];
const juncaoNumeros =  numeros.concat(outrosNumeros);
console.log(juncaoNumeros);
console.log(juncaoNumeros.length);
 
// removendo o primeiro elemento do array
 
const nomesNovos = ["Joaquina","Felipe", "Plinio"];
 
const primeiroNome = nomesNovos.shift(); // .shift exclui o valor do 1º índice
console.log(nomesNovos);
console.log(primeiroNome);
console.log()
// Adicionar um ou mais elementos no inicio do array
const numerosTeste = [1,2,3];
 
numerosTeste.unshift(0); // unshift insere valor no array no 1º indice
console.log(numerosTeste);
console.log()
 
// Encontrando a primeira ocorrencia (indexOf) de um elemento especifico (-1 se não existir)
const frutas = ["maçã", "banana", "manga", "abacaxi"];
 
console.log(frutas.indexOf("maçã"));
console.log(frutas.indexOf("laranja"));
console.log();
 
// Encontrando a última ocorrencia (lastIndexOf)
const letras = ["a", "b", "c", "a", "d"];
 
console.log(letras.lastIndexOf("a"));
console.log()
 
// verifica se um elemento esta presente no array (includes)
const frutasDona = ["maçã", "banana", "laranja"];
 
const temMaca = frutasDona.includes("maçã"); //guarda se tem maçã (true/false)
const temMelancia = frutasDona.includes("melancia"); //guarda se tem melancia (true/false)
console.log(temMaca);
console.log(temMelancia);
console.log()
 
// revertendo array
 
const testandoReverse = [1,2,3,4,5];
console.log(testandoReverse);
testandoReverse.reverse();
console.log(testandoReverse);
console.log();
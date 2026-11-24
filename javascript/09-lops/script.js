//while (enquanto)
let pratossujos = 5;

while(pratossujos > 0){
    console.log("Lavando um prato... Pratos restantes:", pratossujos);

    //decrementando - o mesmo que pratossujos - 1
    pratossujos--;
}

console.log("Todos os pratos estão limpos!")

//Do While (Faça enquanto)
let pratoslavados = 0;

do {
    pratoslavados++; //incrementa ou  seja pratoslavados + 1
    console.log("lavando prato", pratoslavados);
} while(pratoslavados <5);

console.log("todos os pratos foram lavados!");

//For (eu determino quantas vezes o loop vai acontecer)
for (let i =1; i <=5; i++){
    console.log("lavando prato no loop for " + i);
}

//foreach

const pratos = ["prato 1", "prato 2", "prato 3"];

pratos.forEach(prato => {
    console.log("lavando " +prato);
});
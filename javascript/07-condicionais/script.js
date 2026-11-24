//  if (se condiçao fcor verdadeira)
const idade = 19;

if (idade >=18){
    console.log("Boas vindas à área VIP!");
}

// else (se a condição for falsa)
let idadeNova=16;

if(idadeNova >= 18){
    console.log("Boas vindas à área VIP!");
} else {
    console.log("Você vai para a área kids!");
}

// else  if (segunda condição se a primeira não atendida)
let idadeInformada = 15;

if(idadeInformada >=18){
    console.log("Boas vindas à área VIP!");
} else if (idadeInformada >= 13 && idadeInformada <=17){
    console.log("Você vai para a área Teen!");
} else {
    console.log("Você vai para a área kids!");
}

// swwitch 
let opcao = "pizza"; 

switch(opcao) {
    case "pizza":
        console.log("Pizza chegando!");
        break;
    case "sushi":
        console.log("Sushi fresquinho!");
        break;
    case "hamburguer":
        console.log("Hambúrguer suculento!");
        break;
    default:
        console.log("Escolha inválida!");
}


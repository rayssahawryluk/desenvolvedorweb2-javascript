//  continuação 17/11/2026 2
// object literals
const objectPessoa = {
    nome: "João",
    idade: 30,
};

console.log(objectPessoa);
console.log(typeof objectPessoa);
console.log(objectPessoa.nome);
console.log();

// Removendo uma propriedade de um objeto
delete objectPessoa.idade;
console.log(objectPessoa);

// Adicionando propriedade que não existe
objectPessoa.sobrenome = "Santana";
console.log(objectPessoa);
console.log()

// Mutação
objectPessoa.sobrenome = "Santana Costa";
console.log(objectPessoa);
console.log()

// metodo Assign - unir 2 objetos

const objeto1 = {
    nome: "Maria",
    idade: 22,
};

const objeto2={
    altura: 1.65,
    genero: "Feminino",
};

const objetoDestino= {}
Object.assign(objetoDestino, objeto1, objeto2); // assign vai unir novo {}, origem, detino
console.log(objetoDestino);
console.log()


// metodo Keys - mostras as chaves do objeto
const chaves = Object.keys(objetoDestino);
console.log(chaves);

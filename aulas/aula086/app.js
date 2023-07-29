// Some todos os números
// Retorne um array com os valores pares
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const total = numeros.reduce((acumulador, valor) => {
    return acumulador+valor;
});

console.log(total);
// Retorno: 236

// Retorne a pessoa mais velha
// Retorne a pessoa com o nome mais longo
const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47}
];

const pessoaMaisVelha = pessoas.reduce((pessoaMaisVelha, pessoa) => {
    if(pessoaMaisVelha.idade > pessoa.idade) {
        return pessoaMaisVelha;
    } 
    return pessoa;
});

const pessoaComMaiorNome = pessoas.reduce((pessoaComMaiorNome, pessoa) => {
    if(pessoaComMaiorNome.length > pessoa.nome.length) {
        return pessoaComMaiorNome;
    }
    return pessoa;
})

console.log(pessoaMaisVelha);
// Retorno: { nome: 'Luiz', idade: 62 }
console.log(pessoaComMaiorNome);
// Retorno: { nome: 'Wallace', idade: 47 }

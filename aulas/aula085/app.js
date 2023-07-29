// Dobre os números
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const numerosDobrados = numeros.map((numero) => {
    return numero*2;
});

console.log(numerosDobrados);
/* Retorno:
[
  10, 100, 160,  2,  4,  6,
  10,  16,  14, 22, 30, 44,
  54
]*/

// Para cada elemento:
// Retorne apenas uma string com o nome de cada pessoa
// Remova apenas a chave nome do objeto
// Adicione uma chave id em cada objeto
const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47}
];

const nomesPessoas = pessoas.map((pessoa) => {
    return pessoa.nome;
});

const removerChaveNome = pessoas.map((pessoa) => {
    return {idade: pessoa.idade};
});

const adicionarChaveId = pessoas.map((pessoa, indice) => {
    return {...pessoa, id: indice}
});

console.log(nomesPessoas);
// Retorno: [ 'Luiz', 'Maria', 'Eduardo', 'Letícia', 'Rosana', 'Wallace' ]
console.log(removerChaveNome);
/* Retorno:
[
  { idade: 62 },
  { idade: 23 },
  { idade: 55 },
  { idade: 19 },
  { idade: 32 },
  { idade: 47 }
]*/
console.log(adicionarChaveId);
/* Retorno:
[
  { nome: 'Luiz', idade: 62, id: 0 },
  { nome: 'Maria', idade: 23, id: 1 },
  { nome: 'Eduardo', idade: 55, id: 2 },
  { nome: 'Letícia', idade: 19, id: 3 },
  { nome: 'Rosana', idade: 32, id: 4 },
  { nome: 'Wallace', idade: 47, id: 5 }
]*/

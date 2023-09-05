## Filtrando o array

A função filter, como o nome já entrega, ele filtra o array. Mas ele não funciona da maneira que você provavelmente está imaginando. A função funciona por meio de callbacks e espera por retornos do tipo booleanos. Por exemplo:

```jsx
// Filtre os números que sejam maior que 10
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// Arrow function =>
const numerosFiltrados = numeros.filter(valor => valor > 10);

console.log(numerosFiltrados);
// Retorno: [ 50, 80, 11, 15, 22, 27 ]
```

Outro código para ajudar a entender seu funcionamento é este:
```jsx
// Retorne as pessoas que tem o nome com 5 letras ou mais
// Retorne as pessoas com mais de 50 anos
// Retorne as pessoas cujo nome termina com a
const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47}
]

const pessoasCom5Letras = pessoas.filter((pessoa) => {
    return pessoa.nome.length >= 5;
});

const pessoasCom50Anos = pessoas.filter((pessoa) => {
    return pessoa.idade >= 50;
});

const pessoasTerminaComA = pessoas.filter((pessoa) => {
    const ultimaLetra = pessoa.nome.substring(pessoa.nome.length - 1);
    return ultimaLetra == 'a';
})

console.log(pessoasCom5Letras);
/* Retorno:
[
  { nome: 'Maria', idade: 23 },
  { nome: 'Eduardo', idade: 55 },
  { nome: 'Letícia', idade: 19 },
  { nome: 'Rosana', idade: 32 },
  { nome: 'Wallace', idade: 47 }
] */
console.log(pessoasCom50Anos);
/* Retorno:
[ 
	{ nome: 'Luiz', idade: 62 }, { nome: 'Eduardo', idade: 55 }
[*/
console.log(pessoasTerminaComA);
/* Retorno:
[
  { nome: 'Maria', idade: 23 },
  { nome: 'Letícia', idade: 19 },
  { nome: 'Rosana', idade: 32 }
]*/
```
## Reduzindo o array

Agora, caso queiramos reduzir o nosso array, utilizamos o reduce. Agora, seu funcionamento é bem diferente comparado aos anteriores. Ele tem um parâmetro para guardar ou acumular e outro parâmetro que é o valor do array. Pode ser meio confuso, mas por meio de exemplos fica mais claro o que acontece. Observe:

```jsx
// Some todos os números
// Retorne um array com os valores pares
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const total = numeros.reduce((acumulador, valor) => {
    return acumulador+valor;
});

console.log(total);
// Retorno: 236
```

Aqui, foi usado o reduce para somar todos os valores. Claro, há outras maneiras de fazer isso, mas essa é uma boa prática para manter. Agora, vamos para outro exemplo:

```jsx
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
```

Neste exemplo, pode ficar um pouco confuso, por se tratar de um objeto. Mas enfim, temos um parâmetro que salva um objeto e outro objeto que é o valor do array, ele realiza um teste conforme o que for pedido e armazena ou descarta o valor atual.
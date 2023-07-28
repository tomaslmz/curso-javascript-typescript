## Concatenando arrays

O jeito mais simples de concatenar arrays é utilizando o símbolo aritmético de adição, entretanto, ele não é a melhor opção para isso, observe:

```jsx
const meuArray = [1, 2, 3];
const meuArray2 = [4, 5, 6];

// const novoArray = meuArray.concat(meuArray2);
const novoArray = meuArray + meuArray2;

console.log(novoArray);
// Retorno: 1,2,34,5,6
```

Você pode até pensar em que não há problema em retornar assim, mas além de ser uma péssima maneira, observe seu tipo utilizando o typeof:

```jsx
const meuArray = [1, 2, 3];
const meuArray2 = [4, 5, 6];

const novoArray = meuArray + meuArray2;

console.log(typeof novoArray);
//Retorno: string
```

O ideal era retornar um objeto, assim podemos continuar manipulando o mesmo, então para isso é necessário utilizar a função concat(). Usamos esta função da seguinte maneira:

```jsx
const meuArray = [1, 2, 3];
const meuArray2 = [4, 5, 6];

const novoArray = meuArray.concat(meuArray2);

console.log(novoArray);
// Retorno: [ 1, 2, 3, 4, 5, 6 ]

console.log(typeof novoArray);
// Retorno: object
```

É assim que concatenamos uma array, mas há alguns detalhes interessantes, é possível realizar esta concatenação de outra maneira, observe:

```jsx
const meuArray = [1, 2, 3];
const meuArray2 = [4, 5, 6];

const novoArray = [...meuArray, ...meuArray2];

console.log(novoArray);
// // Retorno: [ 1, 2, 3, 4, 5, 6 ]
```

Desta maneira, utilizamos as reticências para indicar que há todos os valores do meuArray e meuArray2, chamado spread operator.
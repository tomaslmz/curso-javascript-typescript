## splice();

Com esse método, podemos fazer várias funções bem semelhante aos comandos anteriores. Por exemplo, podemos fazer a mesma coisa que o pop();

```jsx
const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];

// nomes.splice(índice, quantidade de elem para apagar, elem1, elem2, elem3);
// pop
nomes.splice(4, 1);

console.log(nomes);
//Retorno: [ 'Maria', 'João', 'Eduardo', 'Gabriel' ]
```

Agora, vamos simular o shift():

```jsx
const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];

// nomes.splice(índice, quantidade de elem para apagar, elem1, elem2, elem3);
// shift
nomes.splice(0, 1);

console.log(nomes);
//Retorno: [ 'Maria', 'João', 'Eduardo', 'Gabriel' ]
```

Agora, o push():

```jsx
const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];

// nomes.splice(índice, quantidade de elem para apagar, elem1, elem2, elem3);
// push
nomes.splice(nomes.length, 0, 'Tomás');

console.log(nomes);
//Retorno: [ 'Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia', 'Tomás' ]
```

Agora, o unshift():
# Map

O objeto **`Map`** é uma das estruturas de dados fundamentais introduzidas no JavaScript a partir do ECMAScript 6 (também conhecido como ES6). Ele permite que você armazene e gerencie dados em pares de chave-valor, onde cada chave é única e mapeada para um valor associado. O **`Map`** é semelhante a um objeto comum do JavaScript, mas com algumas diferenças importantes que o tornam mais flexível e poderoso em certas situações.

A principal diferença entre um **`Map`** e um objeto comum é que as chaves em um **`Map`** podem ser de qualquer tipo, incluindo objetos, funções, arrays, entre outros, enquanto as chaves de um objeto comum são sempre representadas como strings ou símbolos. Isso significa que, no **`Map`**, você pode usar estruturas de dados mais complexas como chaves, o que é extremamente útil em muitos cenários.

Aqui estão algumas características importantes do objeto **`Map`**:

1. **Chaves únicas**: Cada chave em um **`Map`** é única, o que significa que não pode haver duplicatas. Se você tentar adicionar a mesma chave duas vezes, o valor será substituído pelo último valor atribuído àquela chave.
2. **Iteração garantida na ordem de inserção**: Ao contrário dos objetos comuns, onde a ordem das chaves pode ser arbitrária, as chaves e valores em um **`Map`** são iterados na ordem em que foram inseridos. Isso é especialmente útil quando você deseja manter a ordem das entradas.
3. **Tamanho dinâmico**: Ao contrário dos arrays comuns, o **`Map`** não possui um tamanho fixo. Você pode adicionar ou remover chaves e valores dinamicamente sem se preocupar com o tamanho do mapa.
4. **Facilidade na manipulação de chaves e valores**: O **`Map`** possui métodos nativos para adicionar (**`set`**), obter (**`get`**), verificar a existência (**`has`**), remover (**`delete`**) e limpar (**`clear`**) chaves e valores.
5. **Iteração**: Você pode facilmente percorrer as chaves, os valores ou ambos usando os métodos **`keys()`**, **`values()`** e **`entries()`**. Além disso, o **`Map`** é iterável, permitindo que você use estruturas de controle de iteração como **`for...of`** para percorrer suas entradas.
6. **Uso de qualquer tipo de dado como chave**: Como mencionado anteriormente, você pode usar qualquer tipo de dado, incluindo objetos, como chave no **`Map`**. Isso permite que você associe valores a estruturas de dados mais complexas sem recorrer a conversões de chave para string.

```jsx
// Criando um Map vazio
const meuMapa = new Map();

// Adicionando chaves e valores
meuMapa.set('chave1', 'valor1');
meuMapa.set(2, 'valor2');
const objetoChave = { id: 3 };
meuMapa.set(objetoChave, 'valor3');

// Obtendo valores por suas chaves
console.log(meuMapa.get('chave1')); // Saída: 'valor1'
console.log(meuMapa.get(2)); // Saída: 'valor2'
console.log(meuMapa.get(objetoChave)); // Saída: 'valor3'

// Verificando a existência de uma chave
console.log(meuMapa.has('chave1')); // Saída: true

// Iterando sobre as entradas do Map
for (const [chave, valor] of meuMapa.entries()) {
  console.log(`${chave} = ${valor}`);
}
// Saída:
// chave1 = valor1
// 2 = valor2
// [object Object] = valor3 (representando o objetoChave)

// Removendo uma chave
meuMapa.delete(2);

// Tamanho do Map
console.log(meuMapa.size); // Saída: 2

// Limpando o Map
meuMapa.clear();
console.log(meuMapa.size); // Saída: 0
```

d
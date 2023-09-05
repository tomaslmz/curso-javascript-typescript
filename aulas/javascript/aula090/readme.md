# Objetos

## Configuração de objetos

Apesar de ser simples a criação de objetos, ainda é necessário praticar. Observe um exemplo de criação de objetos:

```jsx
function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;
    this.estoque = estoque;
}

const produto = new Produto('Celular', 1500, 2);

console.log(produto);
// Retorno: Produto { nome: 'Celular', preco: 1500, estoque: 2 }
```

Aqui é criado um objeto produto informando seu nome, preço e quantidade no estoque. Também é possível configurar alguma chave específica do objeto, observe:

```jsx
function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;
    this.estoque = estoque;

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // Mostra a chave
        value: estoque, // Define o valor
        writable: true, // Permitir alterações
        configurable: true // Permitir configurações
    });
}

const produto = new Produto('Celular', 1500, 2);

console.log(produto);
// Retorno: Produto { nome: 'Celular', preco: 1500, estoque: 2 }
```

Aqui temos outra maneira de definir uma chave, todas configurações verdadeiras. Mas agora, vamos desativar esse enumerable.

```jsx
function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    Object.defineProperty(this, 'estoque', {
        enumerable: false, // Mostra a chave
        value: estoque, // Define o valor
        writable: true, // Permitir alterações
        configurable: true // Permitir configurações
    });
}

const produto = new Produto('Celular', 1500, 2);

console.log(produto);
// Retorno: Produto { nome: 'Celular', preco: 1500 }
```

Neste exemplo, é possível visualizar que o estoque não está sendo mostrado, então sim, podemos dizer que ele não é possível de visualizar. O resto é auto explicativo com os comentários.

Agora, caso você queira visualizar as chaves dentro de um objeto, é possível de duas maneiras. Observe:

```jsx
function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;
    this.estoque = estoque
}

const produto = new Produto('Celular', 1500, 2);

console.log(Object.keys(produto));
// Retorno: [ 'nome', 'preco', 'estoque' ]

for(let i in produto) {
    console.log(i);
}
/* Retorno:
    nome
    preco
    estoque
*/
```

Um retorna as chaves como array, outro como string. Além do Object.defineProperty(), também temos o Object.defineProperties(), observe:

```jsx
function Produto(nome, preco, estoque) {
    Object.defineProperties(this, {
        nome: {
            enumerable: true,
            value: nome,
            writable: true,
            configurable: true
        },
        preco: {
            enumerable: true,
            value: preco,
            writable: true,
            configurable: true
        },
        estoque: {
            enumerable: true,
            value: estoque,
            writable: true,
            configurable: true
        }
    });
}
```
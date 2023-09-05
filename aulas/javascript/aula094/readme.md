## Manipulando o prototype

Vamos supor que temos um objeto Produto, mas também queremos criar um objeto de forma manual e ainda pegar os métodos prototype, observe o nosso objeto primeiramente:

```jsx
function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.darDesconto = function (valor) {
    if(typeof valor === 'number') {
        this.preco = this.preco - (this.preco * (valor / 100));
    } else {
        console.log("O valor não é um número!");
    }
}

Produto.prototype.aumentarPreco = function (valor) {
    if(typeof valor === 'number') {
        this.preco = this.preco + (this.preco * (valor / 100));
    } else {
        console.log("O valor não é um número!");
    }
}

const produto = new Produto("Celular", 1500);

console.log(produto);
// Produto { nome: 'Celular', preco: 1500 }
```

Agora, vamos criar o objeto manualmente:

```jsx
const produto2 = {
    nome: "Outro produto",
    preco: 1500
}

produto2.aumentarPreco(50);
// Retorno: TypeError: produto2.aumentarPreco is not a function
```

Apesar de serem objetos iguais, ainda não possui o mesmo prototype que o objeto Produto, então podemos utilizar um comando que irá fazer este objeto produto2 herdar o prototype do Produto, observe:

```jsx
const produto2 = {
    nome: "Outro produto",
    preco: 1500
}

Object.setPrototypeOf(produto2, Produto.prototype);

produto2.aumentarPreco(50);

console.log(produto2.preco);
// Retorno: 2250
```

Pronto, fizemos o produto2 herdar os métodos prototype do Produto e assim conseguimos usar seus métodos tranquilamente.
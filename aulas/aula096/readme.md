## Herança

No tópico anterior, acabamos dando de cara com um conceito diferente, herança, mas o que é herança? Herança é uma maneira de reaproveitar códigos, buscando uma escalabilidade maior. Imagine que o seu cliente queira um sistema para e-commerce, você pergunta quais produtos você quer vender e ele te responde: “Quero vender roupas e eletrônicos”. Você, como um bom programador, já está imaginando o código e talvez tenha imaginado assim:

```jsx
function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.aumento = function(valor) {
    this.preco += valor;
}

Produto.prototype.desconto = function(valor) {
    this.preco -= valor;
}

function Roupa(nome, preco, cor) {
    this.nome = nome;
    this.preco = preco;
    this.cor = cor;
}

function Eletronico(nome, preco, marca) {
    this.nome = nome;
    this.preco = preco;
    this.marca = marca;
}

Object.setPrototypeOf(Roupa.prototype, Produto.prototype);
Object.setPrototypeOf(Eletronico.prototype, Produto.prototype);
```

Se você imaginou assim, teremos um grande problema de desempenho, pois será criado vários espaços na memória para os mesmos atributos (nome e preço). É aí que a herança entra, vamos reaproveitar o código do **Produto** para a Roupa e **Eletronico** e assim economizarmos um bom espaço na memória. Observe:

```jsx
function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.aumento = function(valor) {
    this.preco += valor;
}

Produto.prototype.desconto = function(valor) {
    this.preco -= valor;
}

function Roupa(nome, preco, cor) {
    Produto.call(this, nome, preco);
    this.cor = cor;
}

function Eletronico(nome, preco, marca) {
    Produto.call(this, nome, preco);
    this.marca = marca;
}

Object.setPrototypeOf(Roupa.prototype, Produto.prototype);
Object.setPrototypeOf(Eletronico.prototype, Produto.prototype);
```

Para realizar a herança, utilizamos o `call()`, onde você diz o objeto que queira herdar (no caso Produto) e informa os atributos a serem respectivamente usados. Entretanto, temos outro problema em relação ao desempenho, leia o que o MDN diz sobre a utilização do `Object.setPrototypeOf()` nessa situação:

> ***Atenção**: Mudar o [[Prototype]] de um objeto é, pela natureza de como os modernos mecanismos JavaScript otimizam os acessos de propriedade, uma operação muito lenta, em todos navegadores e mecanismos JavaScript. O efeito sobre o desempenho de alterar a herança são sutis e vastas e não se limitam simplesmente ao tempo gasto em obj.__proto__ = ... statement, mas pode estender a qualquer código que tem acesso a qualquer objeto cujo [[Prototype]] foi alterado. Se você se preocupa com desempenho, você deveria evitar configurar o [[Prototype]] de um objeto. Em vez disso, crie um novo objeto com o [[Prototype]] desejado usando `Object.create()`.*
> 

Então, em busca de um desempenho melhor, vamos trocar o `Object.setPrototypeOf()` para `Object.create()`, observe o exemplo:

```jsx
function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.aumento = function(valor) {
    this.preco += valor;
}

Produto.prototype.desconto = function(valor) {
    this.preco -= valor;
}

function Roupa(nome, preco, cor) {
    Produto.call(this, nome, preco);
    this.cor = cor;
}

function Eletronico(nome, preco, marca) {
    Produto.call(this, nome, preco);
    this.marca = marca;
}

// Herdar o prototype
Roupa.prototype = Object.create(Produto.prototype);
Eletronico.prototype = Object.create(Produto.prototype);

const celular = new Eletronico("Iphone", 9000, "Apple");

console.log(celular);
// Retorno: Produto { nome: 'Iphone', preco: 9000, marca: 'Apple' }
```

Se você observar com atenção, deve ter visto o retorno. No caso: `Retorno: Produto { nome: 'Iphone', preco: 9000, marca: 'Apple' }`. Por que está retornando **************Produto************** invés de ********************Eletronico********************? Bom, ao herdarmos o ******************prototype******************, herdamos também o **********************constructor**********************. Então para solucionarmos isto, vamos corrigir usando uma linha de código. Observe:

```jsx
function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.aumento = function(valor) {
    this.preco += valor;
}

Produto.prototype.desconto = function(valor) {
    this.preco -= valor;
}

function Roupa(nome, preco, cor) {
    Produto.call(this, nome, preco);
    this.cor = cor;
}

function Eletronico(nome, preco, marca) {
    Produto.call(this, nome, preco);
    this.marca = marca;
}

// Herdar o prototype
Roupa.prototype = Object.create(Produto.prototype);
Eletronico.prototype = Object.create(Produto.prototype);

// Correção do constructor
Roupa.prototype.constructor = Roupa;
Eletronico.prototype.constructor = Eletronico;

const celular = new Eletronico("Iphone", 9000, "Apple");

console.log(celular);
// Retorno: Eletronico { nome: 'Iphone', preco: 9000, marca: 'Apple' }
```

Com o `Eletronico.prototype = Object.create(Produto.prototype);` corrigimos o **********************constructor********************** e assim ficou mostrando o nome correto.
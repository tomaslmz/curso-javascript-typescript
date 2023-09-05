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
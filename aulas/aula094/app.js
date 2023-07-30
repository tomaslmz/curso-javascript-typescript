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

const produto2 = {
    nome: "Outro produto",
    preco: 1500
}

Object.setPrototypeOf(produto2, Produto.prototype);

produto2.aumentarPreco(50);

console.log(produto2.preco);
// Retorno: 2250
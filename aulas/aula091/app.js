function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;
    this.estoque = estoque;

    Object.defineProperty(this, 'nome', {
        enumerable: true,
        configurable: true,
        get: function() {
            return nome;
        },
        set: (valor) => {
            if(typeof valor === `string`) {
                this.nome = valor;
            } else {
                console.log("Nome inválido!");
            }
        } 
    });

    Object.defineProperty(this, 'preco', {
        enumerable: true,
        configurable: true,
        get: function() {
            return preco;
        },
        set: (valor) => {
            if(typeof valor === `number`) {
                this.preco = valor;
            } else {
                console.log("Preço inválido!");
            }
        } 
    })

    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: true,
        get: function() {
            return estoque;
        },
        set: (valor) => {
            if(typeof valor === `number`) {
                this.estoque = valor;
            } else {
                console.log("Estoque inválido!");
            }
        } 
    })
}

const produto = new Produto('Celular', 1500, 5);
console.log(produto.nome);
// Retorno: Celular

produto.nome = 50;
// Retorno: Nome inválido


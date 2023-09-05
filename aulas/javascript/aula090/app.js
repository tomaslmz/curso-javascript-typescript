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
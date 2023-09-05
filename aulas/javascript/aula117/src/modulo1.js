const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 30
}

function sum(x, y) { return x+y }

export default (x, y) => { return x*y }
export {
    pessoa,
    sum
}
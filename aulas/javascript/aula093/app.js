function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    // this.digaMeuNomeCompleto = function() {
    //     return this.nome + ' ' + this.sobrenome;
    // }
}

this.prototype.digaMeuNomeCompleto = function() {
    return this.nome + ' ' + this.sobrenome;
}

const pessoa = new Pessoa("Luiz", "Miranda");

console.log(pessoa.digaMeuNomeCompleto);

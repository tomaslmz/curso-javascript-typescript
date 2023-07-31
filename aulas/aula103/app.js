class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome
    }

    get nomeCompleto() {
        return 'Nome completo: ' + this.nome + ' ' + this.sobrenome;
    }

    set nomeCompleto(nome) {
        nome = nome.split(" ");
        this.nome = nome.shift();
        this.sobrenome = nome.join(" ");
    }
}

const pessoa = new Pessoa("Luiz", "Miranda");
console.log(pessoa.nomeCompleto);
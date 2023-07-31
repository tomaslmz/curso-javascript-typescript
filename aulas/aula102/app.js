class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    falar() {
        console.log(`${this.nome} está falando!`);
    }

    comer() {
        console.log(`${this.nome} está comendo!`);
    }

    beber() {
        console.log(`${this.nome} está bebendo!`);
    }
}

const pessoa = new Pessoa("Luiz Otávio", "Miranda");
console.log(pessoa);
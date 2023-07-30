function criaPessoa(nome) {
    const pessoaPrototype = {
        falar() {
            console.log(`${this.nome} está falando`);
        },
        comer() {
            console.log(`${this.nome} está comendo`);
        },
        beber() {
            console.log(`${this.nome} está bebendo`);
        }
    }

    return Object.create(pessoaPrototype, {
        nome: {
            value: nome
        }
    });
}

const pessoa = criaPessoa("Tomás");
console.log(pessoa.falar());
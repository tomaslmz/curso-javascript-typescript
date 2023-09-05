class DispotivoEletronico {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    }

    ligar() {
        if(this.ligado) {
            console.log(`${this.nome} já está ligado!`);
            return;
        }
        console.log(`${this.nome} ligou!`);
        this.ligado = true;
    }

    desligar() {
        if(!this.ligado) {
            console.log(`${this.nome} já está desligado!`);
            return;
        }
        console.log(`${this.nome} desligou!`);
        this.ligado = false;
    }
}

class Smartphone extends DispotivoEletronico {
    constructor(nome, cor, modelo) {
        super(nome);
        this.cor = cor;
        this.modelo = modelo;
    }
}
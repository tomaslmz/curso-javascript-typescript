## Herança

A herança já foi vista no módulo anterior, entretanto, em classes ela funciona um pouco diferente. Observe:

```jsx
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
```

Já temos uma classe a `DispositivoEletronico`, mas e se quisermos criar uma classe ********************Smartphone******************** herdando toda a classe anterior? É bem simples, utilizaremos um comando, observe:

```jsx
class Smartphone extends DispotivoEletronico {
    constructor(nome, cor, modelo) {
        super(nome);
        this.cor = cor;
        this.modelo = modelo;
    }
}
```

O `extends` serve para indicar ao ********************JavaScript******************** que você está querendo herdar e com isso, obtemos os seus atributos e métodos. O `super()` serve para indicar quais são os atributos que vai para a função construtora da classe pai/superclasse.
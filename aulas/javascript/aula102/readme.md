# Orientação a Objetos

## O que é isso?

O que estivemos fazendo até agora era a criação de um objeto e sua manipulação, já que temos uma boa teoria do que seria um objeto, vamos direto para o que seria uma linguagem de programação orientado a objetos.

Agora, entra um sistema de classes onde podemos fazer a mesma coisa que uma função construtora só que de maneira mais rápida, observe:

```jsx
class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
}

const pessoa = new Pessoa("Luiz Otávio", "Miranda");
console.log(pessoa);
```

Com a classe, criamos um objeto desta maneira. Agora, vamos observar como seria a criação de um método do objeto:

```jsx
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
```

Agora você me pergunta, isso não criaria esses métodos toda hora que criasse um objeto? Invés de explicar, vamos observar como isso se comporta usando o console do Google Chrome:

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/d6adebcd-2e13-493b-8278-ec3fe998e07d/Untitled.png)

Quando usamos sistemas de classe, o JavaScript faz isso automaticamente para nós assim não precisamos nos preocupar com passar o método no ******************prototype******************.
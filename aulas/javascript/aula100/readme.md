## Factory Function

Bom, além de criar um objeto, também podemos usar este método. Onde sua estrutura seria assim:

```jsx
function criaPessoa(nome) {
    return {
        nome: nome
    }
}

const pessoa = criaPessoa("Tomás");
```

Nesta situação, não é necessário o ******new******, mas e se quisermos criar métodos que não causem perda de performance? Seria desta maneira:

```jsx
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
```

d
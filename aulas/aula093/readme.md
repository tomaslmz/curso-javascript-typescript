## Prototype

Quando quisermos definir um método em um objeto, é muito comum realizar tal código:

```jsx
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.digaMeuNomeCompleto = function() {
        return this.nome + ' ' + this.sobrenome;
    }
}

const pessoa = new Pessoa("Luiz", "Miranda");
```

O seu funcionamento é normal, obteremos este resultado caso a função digaMeuNomeCompleto() seja usada:

```jsx
pessoa.digaMeuNomeCompleto();
//Retorno: 'Luiz Miranda'
```

Mas, esse método será criado todas as vezes que um objeto novo for criado, observe pelo console do Google Chrome:

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/633f585f-bc9d-4ffa-b0e8-13bef1a8f72c/Untitled.png)

Para o melhor entendimento, imagine isto em uma escala muito maior. Um sistema tipo Facebook, onde há bilhões de pessoas, isto causaria uma grande perca de performance. Para solucionar este problema, podemos criar uma função prototype, onde será salva apenas uma vez e todos os objetos do mesmo tipo poderão usar. Observe o exemplo:

```jsx
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

this.prototype.digaMeuNomeCompleto = function() {
    return this.nome + ' ' + this.sobrenome;
}

const pessoa = new Pessoa("Luiz", "Miranda");
```

Vamos observar o mesmo no Google Chrome:

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/12f4c67e-149b-456f-9f9d-0b6799823ff2/Untitled.png)

Conforme é possível observar, não foi armazenado no objeto o método, assim obtendo uma performance superior comparado à maneira anterior.
## Getters e Setters

Bom, como mexer em atributos você já sabe, mas como gerar getters e setters para poder realizar ao menos uma validação antes de mudar os dados? É bem simples desse jeito:

```jsx
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
```

Aqui fizemos um `get` e `set` para `nomeCompleto()` apesar de possuir (), não é considerado um método justamente por ter `get` e `set` antes. Observe a manipulação desse objeto usando o `get` e `set` pelo console do Google Chrome:

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/ec2f7165-c2bb-43d8-977c-af0d511d7ca5/Untitled.png)

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/e01415a3-1494-4045-96fe-330989434c2b/Untitled.png)
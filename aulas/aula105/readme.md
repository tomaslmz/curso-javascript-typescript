## Métodos de instância e estático

Método estático é quando o método é referenciado pela classe e não pela instância, observe:

```jsx
class ControleRemoto {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
    }

    aumentarVolume() {
        this.volume += 2;
    }

    diminuirVolume() {
        this.volume -= 2;
    }

    static trocaPilha() {
        console.log("Todas as pilhas de todos os controles foram trocados!");
    }
}

const controle = new ControleRemoto("LG");
controle.aumentarVolume();
controle.aumentarVolume();
console.log(controle);
controle.trocaPilha()
```
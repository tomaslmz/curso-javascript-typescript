## Polimorfismo

Aqui vemos outro conceito muito importante para a questão de objetos, vamos começar analisando o conceito de ************************Polimorfismo************************ do dicionário:

> qualidade ou estado de ser capaz de assumir diferentes formas.
> 

Então, já foi visto a herança, onde podemos herdar atributos e métodos. Mas nem sempre iremos utilizar métodos iguais para todos os objetos e é aí que o ************************polimorfismo************************ entra, trata-se de quando adaptamos os métodos para objetos específicos. Para buscar a melhor compreensão, vamos imaginar um sistema de contas onde haverá conta corrente e conta poupança.

A principal diferença entre elas é que uma possui limite e a outra não, então vamos começar com o código de exemplo:

```jsx
function Conta(agencia, conta, saldo) {
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}

Conta.prototype.sacar = function(valor) {
    if(typeof valor === 'number') {
        if(this.saldo > 0) {
            if(this.saldo >= valor) {
                this.saldo -= valor;
                this.visualizarSaldo();
            } else {
                console.log("Saldo insuficiente!");
            }
        } else {
            console.log("Digite um valor válido!");
        }
    } else {
        console.log("Digite um número!");
    }
}

Conta.prototype.depositar = function(valor) {
    if(typeof valor === 'number') {
        if(this.saldo > 0) {
            this.saldo += valor;
            this.visualizarSaldo();
        } else {
            console.log("Digite um valor válido!");
        }
    } else {
        console.log("Digite um número!");
    }
}

Conta.prototype.visualizarSaldo = function() {
    console.log(`Agência: ${this.agencia}\nConta: ${this.conta}\nSaldo: R$${this.saldo.toFixed(2)}`);
}
```

Aqui temos o objeto **********Conta********** criado, tendo suas funções padrões, agora vamos fazer a conta corrente:

```jsx
function ContaCorrente(agencia, conta, saldo, limite) {
    Conta.call(this, agencia, conta, saldo);
    this.limite = limite
}

ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.prototype.constructor = ContaCorrente;

ContaCorrente.prototype.visualizarSaldo = function() {
    console.log(`Agência: ${this.agencia}\nConta: ${this.conta}\nSaldo: R$${this.saldo.toFixed(2)}\nLimite: R$${this.limite}`);
}

ContaCorrente.prototype.sacar = function(valor) {
    if(typeof valor === 'number') {
        if(this.saldo > 0) {
            if((this.saldo+this.limite) >= valor) {
                this.saldo -= valor;
                this.visualizarSaldo();
            } else {
                console.log("Saldo insuficiente!");
            }
        } else {
            console.log("Digite um valor válido!");
        }
    } else {
        console.log("Digite um número!");
    }
}
```

Se for bem observado, notará que foi especificado o método `sacar()` e `visualizarSaldo()`, mas por quê? É bem simples, realizar as adaptações, pois será necessário considerar o limite na hora de realizar o saque e sua visualização. Agora para a conta poupança, não será necessário, pois irá possuir o mesmo funcionamento, sem limite. Observe:

```jsx
function ContaPoupanca(agencia, conta, saldo) {
    Conta.call(this, agencia, conta, saldo);
}

ContaPoupanca.prototype = Object.create(Conta.prototype);
ContaPoupanca.prototype.constructor = ContaPoupanca;
```

O código da conta poupança ficou infinitamente menor por ser consideravelmente menor. Mas polimorfismo é isso, adaptar-se. Em JavaScript, esse é o único polimorfismo presente até o momento, pois o outro seria com sobrecarga de métodos e não há isso em JavaScript todavia.
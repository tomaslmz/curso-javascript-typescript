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

function ContaPoupanca(agencia, conta, saldo) {
    Conta.call(this, agencia, conta, saldo);
}

ContaPoupanca.prototype = Object.create(Conta.prototype);
ContaPoupanca.prototype.constructor = ContaPoupanca;

const contaPoupanca = new ContaPoupanca(1001, 101, 500);
contaPoupanca.sacar(501);
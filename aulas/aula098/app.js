function ValidarCpf(cpf) {
    this.cpf = cpf;
}



ValidarCpf.prototype.limparCpf = function() {
    return this.cpf.replaceAll(".", "").replace("-", "").split("");
}

ValidarCpf.prototype.isSequencial = function(cpfArray) {
    return cpfArray[0].repeat(11) == cpfArray.join("");
}

ValidarCpf.prototype.realizarEquacoes = function(cpfArray) {
    var resultado = [cpfArray.filter((valor, indice) => {
        return indice<9;
    }).map((valor, indice) => {
        valor = Number(valor);
        valor *= 10-indice;
        return valor;
    }), cpfArray.filter((valor, indice) => {
        return indice<10
    }).map((valor, indice) => {
        valor *= 11-indice;
        return valor;
    })];

    resultado = resultado.map((valor) => {
        return valor.reduce((acumulador, valor) => {
            return acumulador + valor;
        });
    }).map((valor) => {
        return 11-(valor%11) > 9 ? 0 : 11-(valor%11);
    });

    return resultado;
}

ValidarCpf.prototype.validar = function() {
    const cpfArray = this.limparCpf();
    if(!this.isSequencial(cpfArray)) {
        const resultado = this.realizarEquacoes(cpfArray);
        console.log(this.cpf.substring(this.cpf.length - 2) == resultado[0].toString() + resultado[1].toString()  ? "É valido!" : "Não é válido!");
    }
}

const cpf = new ValidarCpf("705.484.450-52");
cpf.validar();
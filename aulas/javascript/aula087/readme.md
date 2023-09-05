## Unindo as forças

Tendo o conhecimento do funcionamento do filter(), map() e reduce(). Podemos realizar tarefas muito complexas de maneira simplificada, observe:

```jsx
// Retorne a soma do dobro de todos os pares
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const numerosFiltrados = numeros.filter((valor) => {
    if(valor%2 == 0) {
        return valor;
    }
});

const numerosDobrados = numerosFiltrados.map(valor => valor*2);

const numerosSomados = numerosDobrados.reduce((acumulador, valor) => {
    return acumulador+=valor;
});

console.log(numerosSomados);
// Retorno: 324
```

A parte legal é que dá pra simplificar mais ainda, olha:

```jsx
const resultado = numeros.filter(valor => valor%2 == 0).map(valor => valor*2).reduce((ac, valor) => ac+=valor);

console.log(resultado);
// Retorno: 324
```

Ambos funcionam de maneiras iguais, mas um é mais simplificado que o outro.
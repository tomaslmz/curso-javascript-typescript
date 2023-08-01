# Promises

Uma promise é um objeto em JavaScript que representa o resultado de uma operação assíncrona. Ela pode estar em um dos três estados: pendente, resolvida ou rejeitada. Quando uma promise é resolvida, ela retorna um valor que pode ser processado no código. Se a promise for rejeitada, um erro é lançado que pode ser tratado com um bloco catch. As promises são amplamente utilizadas em operações assíncronas, como solicitações de rede, para ajudar a simplificar o código assíncrono e torná-lo mais fácil de ler e manter.

Por exemplo, temos um código onde receberá mensagens aleatórias em tempos aleatórios onde deveria ser na ordem, mas por estar aleatório, será em uma ordem aleatória. Observe:

```jsx
const rand = (minimo, maximo) => {
    minimo *= 1000;
    maximo *= 1000;

    return Math.floor(Math.random() * (maximo-minimo) + minimo);
}

const espera = (mensagem, tempo) => {
    setTimeout(() => {
        console.log(mensagem);
    }, tempo);
}

espera("Frase 1", rand(1, 3));
espera("Frase 2", rand(1, 3));
espera("Frase 3", rand(1, 3));
/* Retorno:
    Frase 2
    Frase 3
    Frase 1
*/
```

Agora, vamos adaptar usando Promise, observe:

```jsx
const rand = (minimo, maximo) => {
    minimo *= 1000;
    maximo *= 1000;

    return Math.floor(Math.random() * (maximo-minimo) + minimo);
}

const espera = (mensagem, tempo) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(mensagem);
        }, tempo);
    }); 
}

espera("Frase 1", rand(1, 3)).then(resposta => {
    console.log(resposta);
    return espera("Frase 2", rand(1, 3));
}).then(resposta => {
    console.log(resposta);
    return espera("Frase 3", rand(1, 3));
}).then(resposta => {
    console.log(resposta);
});
/* Retorno:
    Frase 1
    Frase 2
    Frase 3
*/
```

Você pode ter reparado que temos o parâmetro `reject` na Promise, mas ela serve para mostrar erros e mostramos os erros com o catch do `then`, observe:

```jsx
const rand = (minimo, maximo) => {
    minimo *= 1000;
    maximo *= 1000;

    return Math.floor(Math.random() * (maximo-minimo) + minimo);
}

const espera = (mensagem, tempo) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(typeof mensagem !== 'string') reject('Valor inválido!');
            resolve(mensagem);
        }, tempo);
    }); 
}

espera("Conectando ao banco de dados", rand(1, 3)).then(resposta => {
    console.log(resposta);
    return espera('Buscando dados', rand(1, 3));
}).then(resposta => {
    console.log(resposta);
    return espera(222222, rand(1, 3));
}).then(resposta => {
    console.log(resposta);
}).catch((e) => {
    console.log('ERRO:', e);
});
```

Aqui é capturado um erro caso a mensagem não seja uma string.
const rand = (minimo, maximo) => {
    minimo *= 1000;
    maximo *= 1000;

    return Math.floor(Math.random() * (maximo-minimo) + minimo);
}

// const espera = (mensagem, tempo) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(mensagem);
//         }, tempo);
//     }); 
// }

// espera("Frase 1", rand(1, 3)).then(resposta => {
//     console.log(resposta);
//     return espera("Frase 2", rand(1, 3));
// }).then(resposta => {
//     console.log(resposta);
//     return espera("Frase 3", rand(1, 3));
// }).then(resposta => {
//     console.log(resposta);
// });
// /* Retorno:
//     Frase 1
//     Frase 2
//     Frase 3
// */



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
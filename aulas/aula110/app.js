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

async function run() {
    const fase1 = await espera('Fase 1', rand(1, 3));
    console.log(fase1);

    const fase2 = await espera('Fase 2', rand(1, 3));
    console.log(fase2);

    const fase3 = await espera('Fase 3', rand(1, 3));
    console.log(fase3);
}

run();
/* Retorno: 
	Fase 1
	Fase 2
	Fase 3
*/

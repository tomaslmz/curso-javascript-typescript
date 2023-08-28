## Async/Await

Um dos grandes problemas do `then` é que podemos acabar usando em excesso, então acaba dificultando a leitura do código. Com o objetivo de solucionar isto, foi criado uma função assíncrona e o termo await onde é dito pro código quando deve esperar pelo resultado, observe:

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
```

Aqui é possível ver que antes da declaração do function é usado o termo async, assim é dito que a função será assíncrona, já o await é usado para dizer que o código deve esperar pelo resultado.
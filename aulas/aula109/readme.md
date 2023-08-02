## Métodos úteis para Promises

- `Promise.all()`;
    
    Ele serve para realizar vários promises com um comando, ele retorna um array. Observe:
    
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
                resolve(mensagem.toUpperCase() + ' - Passei na promise');
            }, tempo);
        }); 
    }
    
    const promises = [
        'Primeiro valor',
        espera('Promise 1', 3000),
        espera('Promise 2', 500),
        espera('Promise 3', 1000),
        'Outro valor'
    ];
    
    Promise.all(promises).then((valor) => {
        console.log(valor);
    }).catch((e) => {
        console.log(e);
    });
    /* Retorno:
    [
      'Primeiro valor',
      'PROMISE 1 - Passei na promise',
      'PROMISE 2 - Passei na promise',
      'PROMISE 3 - Passei na promise',
      'Outro valor'
    ]
    */
    ```
    
- `Promise.race()`;
    
    Este método serve para que seja entregue apenas a primeira promise, observe:
    
    ```jsx
    const rand = (minimo, maximo) => {
        minimo *= 1000;
        maximo *= 1000;
    
        return Math.floor(Math.random() * (maximo-minimo) + minimo);
    }
    
    const espera = (mensagem, tempo) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if(typeof mensagem !== 'string') { 
                    reject('Valor inválido!'); 
                    return;
                }
                resolve(mensagem.toUpperCase() + ' - Passei na promise');
            }, tempo);
        }); 
    }
    
    const promises = [
        espera('Promise 1', 3000),
        espera('Promise 2', 500),
        espera('Promise 3', 1000),
    ];
    
    Promise.race(promises).then((valor) => {
        console.log(valor);
    }).catch((e) => {
        console.log(e);
    });
    // Retorno: PROMISE 2 - Passei na promise
    ```
    
- `Promise.resolve()`;
    
    Ele retorna que a Promise foi resolvida com o valor que for inserido como parâmetro. Para exemplificar, imagine que temos uma função que irá baixar sites, mas pra isso ele irá verificar se já está no cache ou não. Então vamos simular a função:
    
    ```jsx
    const rand = (minimo, maximo) => {
        minimo *= 1000;
        maximo *= 1000;
    
        return Math.floor(Math.random() * (maximo-minimo) + minimo);
    }
    
    const espera = (mensagem, tempo) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if(typeof mensagem !== 'string') { 
                    reject('Valor inválido!'); 
                    return;
                }
                resolve(mensagem.toUpperCase() + ' - Passei na promise');
            }, tempo);
        }); 
    }
    
    function baixarSite() {
        // Imagine que estamos recebendo o dado se está em cache ou não
        const emCache = true;
    
        if(emCache) {
            return Promise.resolve('Site em cache!');
        } else {
            return espera('Site baixado!', 3000);
        }
    }
    
    baixarSite().then(valor => console.log(valor)).catch(e => console.log(e));
    ```
    
- `Promise.reject()`;
    Ele faz o mesmo que o anterior, mas retorna um erro direto.
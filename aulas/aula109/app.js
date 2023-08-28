// Promise.all Promise.race Promise.resolve Promise.reject
/*
const promises = [
    //'Primeiro valor',
    espera('Promise 1', 3000),
    espera('Promise 2', 500),
    espera('Promise 3', 1000),
    //'Outro valor'
];
*/


/*
Promise.all(promises).then((valor) => {
    console.log(valor);
}).catch((e) => {
    console.log(e);
});
*/

/*
Promise.race(promises).then((valor) => {
    console.log(valor);
}).catch((e) => {
    console.log(e);
});
*/

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
const pessoas = [
    {
        id: 3, nome: "Luiz"
    },
    {
        id: 2, nome: "Maria"
    },
    {
        id: 1, nome: "Helena"
    },
];

// const novasPessoas = {};

// for(const pessoa of pessoas) {
//     const {id} = pessoa;
//     novasPessoas[id] = pessoa;
// }
/* Retorno:
    {
    '1': { id: 1, nome: 'Helena' },
    '2': { id: 2, nome: 'Maria' },
    '3': { id: 3, nome: 'Luiz' }
    } 
*/

const novasPessoas = new Map();

for(const pessoa of pessoas) {
    const {id} = pessoa;
    novasPessoas.set(id, pessoa)
}

console.log(novasPessoas);
/* Retorno:
    Map(3) {
        3 => { id: 3, nome: 'Luiz' },
        2 => { id: 2, nome: 'Maria' },
        1 => { id: 1, nome: 'Helena' }
    }
*/
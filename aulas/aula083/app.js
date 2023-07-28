const meuArray = [1, 2, 3];
const meuArray2 = [4, 5, 6];

// const novoArray = meuArray.concat(meuArray2);

// console.log(novoArray);
// // Retorno: [ 1, 2, 3, 4, 5, 6 ]

// console.log(typeof novoArray);
// // Retorno: object

const novoArray = [...meuArray, ...meuArray2];

console.log(novoArray);
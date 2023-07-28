const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];

// nomes.splice(índice, quantidade de elem para apagar, elem1, elem2, elem3);
// pop
// nomes.splice(3, 1);

//shift
// nomes.splice(0, 1);

// push
// nomes.splice(nomes.length, 0, 'Tomás');

// unshift
nomes.splice(0, 0, 'Tomás');

console.log(nomes);
//Retorno: [ 'Tomás', 'Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia' ]

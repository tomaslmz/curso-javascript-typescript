const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47}
];

for(let i = 0; i<pessoas.length; i++) {
    console.log(pessoas[i].nome);
}
/* Retorno:
    Luiz
    Maria
    Eduardo
    Letícia
    Rosana
    Wallace
*/

for(i in pessoas) {
    console.log(pessoas[i].nome);
}
/* Retorno:
    Luiz
    Maria
    Eduardo
    Letícia
    Rosana
    Wallace
*/

for(pessoa of pessoas) {
    console.log(pessoa.nome);
}
/* Retorno:
    Luiz
    Maria
    Eduardo
    Letícia
    Rosana
    Wallace
*/

pessoas.forEach((pessoa) => {
    console.log(pessoa.nome);
});
/* Retorno:
    Luiz
    Maria
    Eduardo
    Letícia
    Rosana
    Wallace
*/
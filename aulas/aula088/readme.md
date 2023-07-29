# For

A principio, temos apenas 3 for, todos funcionando quase da mesma maneira, apenas tendo pequenas diferenças.

- for tradicional
    
    Esse é o for mais simples e conhecido, observe:
    
    ```jsx
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
    ```
    
- for in
    
    Ele faz a mesma coisa que o anterior, só é mais resumido na hora de digitar.
    
    ```jsx
    const pessoas = [
        {nome: 'Luiz', idade: 62},
        {nome: 'Maria', idade: 23},
        {nome: 'Eduardo', idade: 55},
        {nome: 'Letícia', idade: 19},
        {nome: 'Rosana', idade: 32},
        {nome: 'Wallace', idade: 47}
    ];
    
    for(i in pessoas) {
        console.log(pessoas[i].nome);
    }
    /* Retorno:
        Luiz
        Maria
        Eduardo
        Letícia
        Rosana
        Walla
    ```
    
- for of
    
    Ele já é mais simplificado ainda, se você estiver mexendo com array, ele não recebe o valor do índice e sim o valor do array nesse índice, observe:
    
    ```jsx
    const pessoas = [
        {nome: 'Luiz', idade: 62},
        {nome: 'Maria', idade: 23},
        {nome: 'Eduardo', idade: 55},
        {nome: 'Letícia', idade: 19},
        {nome: 'Rosana', idade: 32},
        {nome: 'Wallace', idade: 47}
    ];
    
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
    ```
    
- forEach
    
    Ele é o for mais completo, pois pode fazer todas as operações de todos os for anteriores, ele funciona por meio de callback e tendo como parâmetro respectivamente: valor, índice e array. Observe:
    
    ```jsx
    const pessoas = [
        {nome: 'Luiz', idade: 62},
        {nome: 'Maria', idade: 23},
        {nome: 'Eduardo', idade: 55},
        {nome: 'Letícia', idade: 19},
        {nome: 'Rosana', idade: 32},
        {nome: 'Wallace', idade: 47}
    ];
    
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
    ```
    
    d
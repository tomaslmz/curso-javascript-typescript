# Array

## O que é um Array?

Um array é um conjunto de variáveis, podemos armazenar tudo que for possível armazenar em uma variável. Por exemplo, um conjunto de nomes

```jsx
const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];
```

Aqui temos um array de strings, nomes. Apesar de ser facilmente declarado, é de suma importância saber manipular os dados de um array, então em diante, você verá três comandos básicos sobre manipulação de arrays.

## Os principais comandos

- pop();
    
    O pop() é uma função que remove o último dado de um array.
    
    ```jsx
    const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];
    
    // Remove o último nome
    nomes.pop();
    
    console.log(nomes);
    //Retorno: [ 'Maria', 'João', 'Eduardo', 'Gabriel' ]
    ```
    
- shift();
    
    Semelhante ao pop(), pois também serve para remover um dado. Mas a sua diferença é: ele remove o primeiro valor invés do último, por exemplo (o shift reloca os índices:
    
    ```jsx
    //                0        1        2           3        4
    const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];
    
    // Remove o primeiro nome
    nomes.shift();
    
    console.log(nomes);
    //              0       1           2         3
    //Retorno: [ 'João', 'Eduardo', 'Gabriel', 'Júlia' ]
    ```
    
- unshift();
    
    Bem semelhante ao shift(), mas seu diferencial é que invés de remover, ele adiciona. Ele desloca todos os valores do array pra direita e atribui um novo valor ao primeiro índice, por exemplo:
    
    ```jsx
    const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];
    
    // Desloca todos os valores e adiciona ao primeiro lugar do array
    nomes.unshift("Lucas");
    
    console.log(nomes);
    //Retorno: [ 'Lucas', 'Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia' ]
    ```
    
- push(value);
    
    Já vimos como remover dados, mas e agora para adicionar? Na real, é bem simples. Em JavaScript temos o comando push() onde além de inserirmos a função, ele possui um parâmetro exigindo o valor. Por exemplo:
    
    ```jsx
    const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];
    
    // Adiciona um valor ao array
    nomes.push("Tomás");
    
    console.log(nomes);
    //Retorno: [ 'Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia', 'Tomás' ]
    ```
    
- length;
    
    Agora, caso você queira saber o tamanho exato do array, é necessário apenas inserir o length no array, sem os parênteses.
    
    ```jsx
    const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];
    
    console.log(nomes.length);
    //Retorno: 5
    ```
    
- slice(onde começa, onde termina);
    
    É uma função que tem o objetivo de cortar um array, conforme o que é exigido nos parâmetro. Por exemplo, você diz onde começa e onde termina, mas o número do índice de onde termina não está incluído.
    
    ```jsx
    const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];
    
    // Corta um array conforme os parâmetros
    const novosNomes = nomes.slice(0, 3);
    
    console.log(novosNomes);
    //Retorno: [ 'Maria', 'João', 'Eduardo' ]
    ```
    
    Algo muito intuitivo e legal, é que você pode usar números negativos, é como se pegasse o array.length-1.
    
    ```jsx
    const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];
    
    // Corta um array conforme os parâmetros
    const novosNomes = nomes.slice(0, -1);
    
    console.log(novosNomes);
    //Retorno: [ 'Maria', 'João', 'Eduardo', 'Gabriel' ]
    ```
    
- split(o que vai separar);
    
    Com ele, podemos transformar uma string com vários valores em um array. Apenas chamando a função e inserindo o seu parâmetro, podemos dividir a string por espaço ou qualquer coisa. Por exemplo:
    
    ```jsx
    const nome = "Luiz Otávio Miranda";
    //Divide uma string e transforma em um array;
    const nomes = nome.split(" ");
    
    console.log(nomes);
    //Retorno: [ 'Luiz', 'Otávio', 'Miranda' ]
    ```
    
- join(o que vai separar);

    Já que podemos separar uma string e transformar em um array, também podemos transformar um array em uma string. Funciona do mesmo jeito que o split, a gente informa o que vai separar os arrays na string, por exemplo:
    
    ```jsx
    const nomes = ["Luiz", "Otávio", "Miranda"];
    //Junta os arrays;
    const nome = nomes.join(" ")

    console.log(nome);
    //Retorno: Luiz Otávio Miranda
    ```
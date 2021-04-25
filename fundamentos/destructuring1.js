// novo recurso do ES2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

/*
    'Destructuring' é um recurso para retirar elementos de uma estrutura,
    essa estrutura pode ser um objeto ou uma array, por exemplo.

    A estrutura de 'destructuring' é a seguinte:
        var { nomeDoElemento } = nomeDaEstrutura

    É importante observar que essa estrutura pode ser iniciada com qualquer
    tipo de declaração de variável e constante, então pode iniciar com 'var',
    'let' ou 'const'.

    No lugar de 'nomeDoElemento' será o nome que será atribuído a variável ou
    constante.

    E no lugar de nomeDaEstrutura será o nome do objeto ou array que se deseja
    retirar o elemento.
*/

const { nome, idade } = pessoa
console.log(nome, idade)

/*
    Aqui se retira os elementos 'nome' e 'idade' da estrutura objeto
    chamado 'pessoa' e se atribui nesse caso a 2 constantes chamadas
    também de 'nome' e 'idade'.
*/

const { nome: n, idade: i } = pessoa
console.log(n, i)

/*
    Aqui temos uma situação de atribuição semelhante a anterior, no
    entanto temos a diferença que os nomes das novas constantes serão
    nesse caso 'n' e 'i'.
*/

const { sobrenome, bemHumorada = true } = pessoa
console.log(sobrenome, bemHumorada)

/*
    Aqui a destructuring irá retirar os elementos 'sobrenome' e 'bemHumorada'
    do objeto 'pessoa'. No entanto esses elementos não estão presente nesse
    objeto, sendo assim por padrão JS retornará 'undefined', mas no caso de
    'bemHumorada' temos a diferença que se não encontrar o elemento 'bemHumorada'
    no objeto ou se 'bemHumorada' é um elemento existente mas não foi definido
    então o valor padrão atribuído a 'bemHumorada' nesse caso será 'true'.
*/

const { endereco: {logradouro, numero, cep} } = pessoa
console.log(logradouro, numero, cep)
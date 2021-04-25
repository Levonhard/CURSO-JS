// FUNÇÃO PADRÃO
let dobro = function (a) {
    return 2 * a
}

// FUNÇÃO ARROW
dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a
console.log(dobro(Math.PI))

/*
    No caso acima o arrow function tem a seguinte estrutura:
        variavel = parametro => expressão
    Nessa estrutura o 'return' é implícito, a expressão da função
    tem apenas uma linha e por isso não há a necessidade de abrir
    bloco com chaves.
*/

ola = () => 'Olá'
ola = _ => 'Olá'
console.log(ola())

/*
    No caso da função com os parenteses vazios se trata de uma função
    sem parâmetros e no caso da função com '_' tem 1 parâmetro, mas que
    como em JS qualquer parametro de qualquer função pode ser ignorado
    esse parâmetro também pode ser ignorado.
    A ideia do caso com '_' é apenas sugerir uma alternativa a função com
    parenteses vazios caso queira criar uma função sem parâmetros.
*/
function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco
}

global.preco = 20
global.desc = 0.1
console.log(getPreco())
console.log(produto.getPreco())

const carro = { preco: 49990, desc: 0.20 }

console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))

console.log(getPreco.call(carro, 0.17, '$'))
console.log(getPreco.apply(global, [0.17, '$']))

/*
    Nas chamadas de funções 'call' e 'apply' o primeiro parâmetro se trata
    do contexto ao qual a função irá operar, os outros parâmetros são os
    valores passados aos parâmetros da função.
    A diferença entre 'call' e 'apply' está nos valores que se passa aos parâmetros
    da função, com 'call' todos os valores são apenas separados por vírgula
    enquanto que no 'apply' os valores são encapsulados com colchetes pois os
    valores passados aos parâmetros da função se dá através de um array.
*/
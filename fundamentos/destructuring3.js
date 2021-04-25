function rand({ min = 0, max = 1000 }) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

/*
    Essa função está recebendo como parâmetro um destructuring de objeto,
    nesse caso está querendo retirar os elementos 'min' e 'max' de um objeto
    qualquer e caso esses elementos não existam ou não estejam definidos no
    objeto os valores padrões para 'min' e 'max' respectivamente será '0' e
    '1000'.
*/

const obj = { max: 50, min: 40 }
console.log(rand(obj))
console.log(rand({ min: 955 }))
console.log(rand({}))

/*
    Esse caso não retornará erro porque ao chamar a função está sendo dado
    um objeto vazio, então o destructuring irá procurar dentro desse objeto
    os elementos 'min' e 'max' e se não encontrar irá atribuir seus valores
    padrões.
*/

console.log(rand())

/*
    Esse último caso retornará erro porque ao chamar a função não está sendo
    dado a função um objeto a ser desestruturado.

    Uma forma dessa chamada não retornar erro seria na declaração dos parâmetros
    da função igualar a um objeto vazio. Seria da seguinte forma:
        function rand({ min = 0, max = 1000 } = {}) {
            ...
        }
*/
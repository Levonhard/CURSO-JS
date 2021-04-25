const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

/*
    "Object.keys" lista as propriedades do objeto.
    "Object.values" lista os valores das propriedades do objeto.
    "Object.entries" lista as propriedades e seus valores do objeto.
*/

Object.entries(pessoa).forEach(e => {
    console.log(`${e[0]}: ${e[1]}`)
})

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,
    writable: false,
    value: '01/01/2019'
})

pessoa.dataNascimento = '01/01/2017'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

/*
    "Object.defineProperty" define uma nova propriedade para um objeto.
    No entanto, essa função tem o poder de definir algumas características
    importantes da propriedade como "enumerable" e "writable".
    "enumerable" define se a propriedade pode ser listada em "Object.keys"
    por exemplo. "writable" define se a propriedade pode ser sobrescrita.
*/

// Object.assign (ECMAScript 2015)
const dest = { a: 1 }
const o1 = { b: 2 }
const o2 = { c: 3, a: 4 }
const obj = Object.assign(dest, o1, o2)

Object.freeze(obj)
obj.c = 1234
console.log(obj)
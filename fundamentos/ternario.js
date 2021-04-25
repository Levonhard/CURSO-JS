const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado'

/*
    Operadores ternários consistem em uma expressão seguida do caractere '?'
    e o resultado caso a expressão seja verdadeira seguida do caractere ':'
    e o resultado caso a expressão seja falsa.
*/

console.log(resultado(7.1))
console.log(resultado(6.7))
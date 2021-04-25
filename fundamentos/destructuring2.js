const [a] = [10]
console.log(a)

const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8]
console.log(n1, n3, n5, n6)

/*
    Aqui o destructuring está solicitando o primeiro elemento da array,
    ignorando o segundo elemento, solicitando o terceiro elemento, ignorando
    o quarto elemento, solicitando o quinto elemento que nesse caso não existe
    e portanto retornará 'undefined' e está solicitando o sexto elemento, mas
    no caso do sexto elemento tem um valor padrão que aqui é '0', sendo assim
    se o sexto elemento não existe na array ou não foi definida o valor padrão
    de 'n6' será '0'.
*/

const [, [, nota]] = [[, 8, 8], [9, 6, 8]]
console.log(nota)

/*
    Aqui o destructuring está ignorando o primeiro elemento da array e solicitando
    o segundo em forma de array, ou seja temos aqui uma matriz que é array dentro de
    outra array, sendo assim dentro dessa array o destructuring está ignorando o
    primeiro elemento e solicitando o segundo elemento.
*/
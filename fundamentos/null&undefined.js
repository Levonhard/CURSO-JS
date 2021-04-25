const a = {nome: 'Leonardo'}
console.log(a)

const b = a
console.log(b)

b.nome = 'Lucas'
console.log(a)

/*
    As constantes 'a' e 'b' recebem o endereço do objeto na memória.
    Por isso que quando se altera o atributo 'nome' a partir de 'b'
    quando se imprime a constante 'a' a alteração está presente, pois
    tanto 'a' quanto 'b' apontam pro mesmo endereço de memória.
*/

// a = 3
/*
    O caso acima apresenta erro porque 'a' é uma constante e portanto
    seu valor não pode ser alterado. Nesse caso a constante 'a' contém
    o endereço do objeto como valor e sendo assim não pode ser substituido
    por outro valor.
*/

let c = 3
let d = c
d++
console.log(c, d)

/*
    Aqui 'c' recebe um valor primitivo e portanto não armazena endereço
    na memória e sim o valor atribuído, então quando 'd' recebe o valor
    de 'c' e 'd' é incrementado, como nesse caso, as variáveis 'c' e 'd'
    são distintas e não armazenam endereço de memória por isso somente 'd'
    tem seu valor alterado.
*/

let valor // não inicializado
console.log(valor)

valor = null // ausência de valor
console.log(valor)
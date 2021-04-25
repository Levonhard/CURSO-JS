console.log('a =', a)
var a = 2
console.log('a =', a)

/*
    Em JS as variáveis declaradas sofrem o efeito de 'hoisting',
    ou seja, as variáveis são "jogadas" para as linhas de cima.

    Então nesse exemplo a primeira impressão da variável 'a' é tida
    como 'undefined' porque pelo o efeito do hoisting apenas a
    declaração da variável foi jogada pro início do código.

    O que o JS fez com o código acima foi o seguinte:

        var a
        console.log('a =', a) <- Essa impressão resulta em 'undefined' porque a variável 'a' apenas foi declarada e não tem valor definido.
        a = 2
        console.log('a =', a) <- Na segunda impressão resulta em '2' porque a variável já foi declarada e possui algum valor.
*/

console.log('b =', b)
let b = 2
console.log('b =', b)

/*
    No entanto o efeito de hoisting não funciona com variáveis
    declarada com 'let'.

    Então no exemplo acima a primeira impressão resultará em erro!
    Pois a variável 'b' não sofreu o efeito de hoisting e portanto
    quando JS tenta imprimir essa variável ele percebe que ela não
    foi declarada ainda e resulta em erro.
*/
var numero = 1
{
    var numero = 2
    console.log('dentro =', numero)
}
console.log('fora =', numero)

/*
    'var' fora das funções "não tem" escopo, sendo assim
    como nesse exemplo, após alterar a variavel 'numero'
    dentro de um bloco a alteração não apenas é visível
    dentro do próprio bloco como fora também.
*/
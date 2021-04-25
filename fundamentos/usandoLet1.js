var numero = 1
{
    let numero = 2
    console.log("dentro =", numero)
}
console.log("fora =", numero)

/*
    Variáveis 'var' tem apenas 2 escopos: global e de função.
    Variáveis 'let' tem 3 escopos: global, de função e de blocos.

    Como se observa no exemplo acima, dentro do bloco a variável
    'numero' foi declarada com 'let', usando o mesmo nome da variável
    'var' declarada fora do bloco, sendo assim essa variável declarada
    com 'let' é distinta da variável declarada fora do bloco, pois tem
    escopos diferentes.
*/
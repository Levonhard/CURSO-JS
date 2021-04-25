{
    {
        {
            {
                var sera = 'Será???'
                console.log(sera)
            }
        }
    }
}

console.log(sera)

function teste() {
    var local = 123
    console.log(local)
}

teste()
console.log(local)

/*
    Em JS variáveis declarada com 'var' são acessíveis fora do seu
    escopo local, com exeção do escopo das funções.
    
    Acima segue um exemplo de uma variavel chamada 'local' declarada
    dentro de uma função chamada 'teste'. É possível acessar essa
    variável dentro da função, mas quando se tenta acessar essa variável
    fora do escopo da função o JS retorna erro.
*/
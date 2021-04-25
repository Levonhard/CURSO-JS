const pessoa = {
    saudacao: 'Bom dia!',
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() 
/*
    Essa situação gera um conflito de paradigmas: funcional e OO.
    Nesse caso 'this' recebe outro contexto e não aponta para o
    objeto que está inserido, que nesse caso é o objeto 'pessoa'.
*/

const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()

/*
    Com a função 'bind()' é possível explicitar ao 'this' o contexto
    ao qual ele deve se associar. Nesse caso o 'bind()' informa ao 'this'
    que o contexto ao qual ele deve se associar é o objeto 'pessoa'.
*/
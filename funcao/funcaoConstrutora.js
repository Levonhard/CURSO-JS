function Carro(velocidadeMaxima = 200, delta = 5) {
    //atributo privado
    let velocidadeAtual = 0

    //método público
    this.acelerar = function () {
        if (velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }

    //método público
    this.getVelocidadeAtual = function () {
        return velocidadeAtual
    }
}

const uno = new Carro
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro(350, 20)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())

console.log(typeof Carro)
console.log(typeof ferrari)

/*
    A função 'carro' constroi objetos com os atributos 'acelerar' e
    'getVelocidadeAtual'. Ambos atributos são funções anônimas, isso é,
    funções sem nome. Por fim, a variável 'velocidadeAtual' declarada com 'let'
    é uma variável de escopo local, ou seja, é uma variável que opera apenas
    na função 'Carro' e por isso não é um atributo dos objetos criados por
    essa função.

    Nas últimas 2 impressões no console podemos confirmar que 'Carro' se trata
    de uma FUNÇÃO e 'ferrari' se trata de um OBJETO.
*/
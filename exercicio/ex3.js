const a = [50, 5, 'str', , 32]
a.sort((x,y) => x - y)
console.log(a)
console.log(typeof(a[3]))

const b = {}

function completar(vetor) {
    if (Array.isArray(vetor)) {
        while ((vetor.length) != (vetor[vetor.length-1] - vetor[0] + 1)) {
            let max = (vetor.length-1)

            for (let i=0; i<max; i++) {
                if (typeof(vetor[i]) != 'number') {
                    vetor.splice(i, 1)
                    if (i != max) {
                        i-=1
                    }
                } else if (typeof(vetor[i+1]) != 'number') {
                    vetor.splice((i+1), 1)
                    i-=1
                } else if ((vetor[i]+1) != vetor[i+1]) {
                    vetor.push(vetor[i]+1)
                }
            }
            
            vetor.sort((x,y) => x - y)
        }

        return vetor
    } else {
        return 'O parâmetro informado não é uma array!'
    }
}

console.log(completar(a))
console.log(completar(b))

/*
    Array.prototype.sort() tem a seguinte estrutura:
        arr.sort([compareFunction])
    Se a função de comparação não for especifícada a array será convertida
    em strings e então será ordenada de acordo com o código UNICODE de cada
    caractére. Por exemplo, segundo a ordem numérica "9" antecede "80", no entanto
    se não for específicada a função de comparação os número serão convertidos
    para string e nesse caso "80" antecederá "9".

    Nesse caso utiliza-se "sort((x,y) => x - y)" onde "(x,y)" são os parâmetros
    de uma função anônima, ou seja uma função sem nome, "=>" representa uma arrow
    function e "x - y" é a expressão dessa função, ainda que o retorno não seja
    declarado o retorno é implícito; então o retorno dessa função é a própria expressão
    "x - y"
*/
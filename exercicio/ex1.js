const a = [15, 12, 11, 16, 14]
console.log(`A: ${a}`)

function ordenarArray(lista) {
    if (typeof(lista) === 'object') {
        for (let loop=0; loop<lista.length; loop++) {
            for (let i=0; i<(lista.length-1); i++) {
                if (lista[i]>lista[i+1]) {
                    let aux = lista[i+1]
                    lista[i+1] = lista[i]
                    lista[i] = aux
                }
            }
        }
    }

    return lista
}

const b = ordenarArray(a)
console.log(`B: ${b}`)

function numeroAusente(lista) {
    if (typeof(lista) === 'object') {
        for (let i=0; i<lista.length; i++) {
            if ((lista[i]+1)!=lista[i+1]) {
                return lista[i]+1
            }
        }
    }
}

console.log(`Número ausente na array: ${numeroAusente(b)}`)
b.push(numeroAusente(b))
console.log(`Array ordenada com a número ausente: ${ordenarArray(b)}`)
//const a = [15, 12, 11, 18, 14]
const a = [50, 32]
console.log(`A-> ${a}`)

function completarEordenarArray(lista) {
    if (Array.isArray(lista)) {
        function ordenar() {
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

        ordenar()
        
        while ((lista.length) != (lista[lista.length-1] - lista[0] + 1)) {
            let max = lista.length

            for (i=0; i<(max-1); i++) {
                if ((lista[i]+1) != lista[i+1]) {
                    lista.push(lista[i]+1)
                }
            }
            
            ordenar()
        }

        return lista
    }
}

console.log(`Lista A completa e ordenada-> ${completarEordenarArray(a)}`)
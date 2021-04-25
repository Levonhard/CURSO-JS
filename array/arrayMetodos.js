const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // 'pop' retira o último elemento da array
console.log(pilotos)

pilotos.push('Verstappen') // 'push' adiciona elemento na última posição da array
console.log(pilotos)

pilotos.shift() // 'shift' remove o primeiro elemento da array
console.log(pilotos)

pilotos.unshift('Hamilton') // 'unshift' adiciona elemento na primeira posição da array
console.log(pilotos)

pilotos.splice(2, 0, 'Bottas', 'Massa') // Esse 'splice' está ADICIONANDO (não está substituindo) elementos a partir da segunda posição da array
console.log(pilotos)

pilotos.splice(3, 1) // Aqui 'splice' está REMOVENDO '1' elemento na '3°' posição
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // 'slice' retorna um novo array a partir da posição declarada de um array existente
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4) // Nesse caso 'slice' retorna array cujo elementos são os do índice do 1 ao 3 (não inclui o 4° elemento) da array 'pilotos'
console.log(algunsPilotos2)
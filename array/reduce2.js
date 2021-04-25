const alunos = [
    {nome: 'João', nota: 7.3, bolsista: false},
    {nome: 'Maria', nota: 9.2, bolsista: true},
    {nome: 'Pedro', nota: 9.8, bolsista: false},
    {nome: 'Ana', nota: 8.7, bolsista: true}
]

// Desafio 1: Todos os alunos são bolsistas?
const bolsistas = alunos.map(e => e.bolsista)
const todosBolsistas = bolsistas.reduce(function(acumulador, atual) {
    return acumulador && atual
})

console.log(`Todos alunos são bolsistas? ${todosBolsistas}`)

// Desafio 2? Algum aluno é bolsista?
const algumBolsista = bolsistas.reduce(function(acumulador, atual) {
    return acumulador || atual
})

console.log(`Algum aluno é bolsista? ${algumBolsista}`)

// -----------------------------------
// RESOLUÇÃO DA AULA
// Desafio 1:
const tBolsistas = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(tBolsistas))

//Desafio 2
const aBolsista = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(aBolsista))
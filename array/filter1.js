const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'iPad Pro', preco: 4199, fragil: true},
    {nome: 'Copo de vidro', preco: 12.49, fragil: true},
    {nome: 'Copo de Plástico', preco: 18.99, fragil: false}
]

console.log(produtos.filter(function(p) {
    //return p.preco > 2400
    return false
}))

const ehFragil = e => e.fragil
const ehCaro = e => e.preco >= 500

console.log(produtos.filter(ehFragil).filter(ehCaro))
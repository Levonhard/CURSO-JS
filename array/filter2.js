Array.prototype.filter2 = function(callback) {
    let arr = []
    for (let i=0; i<this.length; i++) {
        if (callback(this[i], i, this)) {
            arr.push(this[i])
        }
    }
    return arr
}

const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'iPad Pro', preco: 4199, fragil: true},
    {nome: 'Copo de vidro', preco: 12.49, fragil: true},
    {nome: 'Copo de Plástico', preco: 18.99, fragil: false}
]

const ehFragil = e => e.fragil
const ehCaro = e => e.preco >= 500

console.log(produtos.filter2(ehFragil).filter2(ehCaro))
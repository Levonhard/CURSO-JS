const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit de Lapis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.5 }'
]

// Retornar um array apenas com os preços
const parsedCarrinho = carrinho.map(e => JSON.parse(e))

const valores = parsedCarrinho.map(e => `R$ ${e.preco.toFixed(2).replace('.', ',')}`)

console.log(valores)

// -----------------------------------
// Resolução da aula
const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const resultado = carrinho.map(paraObjeto).map(apenasPreco)
console.log(resultado)
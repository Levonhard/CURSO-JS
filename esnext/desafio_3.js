const fs = require('fs')
const { resolve } = require('path')
const path = require('path')

const caminho = path.join(__dirname, 'dados.txt')

//function exibirConteudo(_, conteudo) {
//    console.log(conteudo.toString())
//}

//console.log('Inicio...')
//fs.readFile(caminho, exibirConteudo)
//fs.readFile(caminho, (_, conteudo) => console.log(conteudo.toString()))
//console.log('Fim...')

//console.log('Inicio Sync...')
//const conteudo = fs.readFileSync(caminho)
//console.log(conteudo.toString())
//console.log('Fim Sync...')

function lerArquivo(caminho) {
    return new Promise(resolve => {
        fs.readFile(caminho, function(_, conteudo) {
            resolve(conteudo.toString())
        })
        console.log('Depois de ler')
    })
}

lerArquivo(caminho)
    .then(conteudo => conteudo.split('\n'))
    .then(linhas => linhas.join(', '))
    .then(conteudo => `O valor final é: ${conteudo}`)
    .then(console.log)

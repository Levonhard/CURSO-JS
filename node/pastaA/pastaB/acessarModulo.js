const moduloA = require('../../moduloA')
console.log(moduloA.ola)

/*
    É importante destacar aqui, para Windows e Mac, o nome do arquivo não
    precisa estar com as letras maiúsculas e minúsculas conforme o arquivo
    foi realmente salvo.
    No entanto Linux é um sistema CASE SENSITIVE, ou seja, o nome do arquivo
    precisa ser escrito exatamente como foi salvo, com exeção da extensão
    '.js'.
*/

const c = require('./pastaC')
console.log(c.ola2)

/*
    Caso o arquivo requisitado foi salvo como 'index.js' não há a necessidade
    de informar o nome do arquivo, basta informar a pasta onde se localiza o
    arquivo requisitado.
*/

const http = require('http')
http.createServer((req, res) => {
    res.write('Bom dia!')
    res.end()
}).listen(8080)

/*
    Este módulo 'http' faz parte do módulo core do próprio node.
    Essa mensagem pode ser visualizada no browser a partir do endereço
    localhost na porta 8080: localhost/8080
*/
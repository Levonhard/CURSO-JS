const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const paisChina = e => e.pais == 'China'
const generoFemen = e => e.genero == 'F'
const menorSalario = (func, funcAtual) => {
    return func.salario < funcAtual.salario ? func : funcAtual
}

axios.get(url).then(response => {
    const funcionarios = response.data

    // Desafio: Exibir a mulher chinesa com o menor salário

    const salarioChinesas = funcionarios.filter(paisChina).filter(generoFemen).map(e => e.salario)

    salarioChinesas.sort((x,y) => x - y)
    console.log(funcionarios.filter(paisChina).filter(e => e.salario == salarioChinesas[0]))
    
    //RESOLUÇÃO*DA*AULA********************************
    const func = funcionarios
        .filter(paisChina)
        .filter(generoFemen)
        .reduce(menorSalario)
    
    console.log(func)
})
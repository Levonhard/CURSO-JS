//EXEMPLOS CLÁSSICOS
let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo) 
/*  
    Em JS a "!" é uma negação, portanto sempre que
    a exclamação vier antes de qualquer variável, constante
    ou expressão irá retornar um valor booleano contrário
    pois estará negando seu valor booleano intrínseco, pois
    em tese todo tipo de variável, constante e expressões em
    JS tem um valor booleano intrínseco.

    Nesses casos com duas vezes exclamação, a negação é negada
    portanto a primeira negação anula o efeito da segunda, então
    com duas exclamações retorna o valor booleano original da
    variável, constante ou expressão.
*/

//EXEMPLOS QUE RETORNAM VERDADEIRO
console.log('Os verdadeiros:')
console.log(!!3)
console.log(!!-1)
console.log(!!' ') //Nesse caso temos uma string com um espaço, sendo assim essa expressão tem algum valor e portanto retorna verdadeiro.
console.log(!!'texto')
console.log(!![]) //Arrays vazias retornam verdadeiro.
console.log(!!{}) //Assim como arrays, objetos vazios também retornam verdadeiro.
console.log(!!function(){}) //E função vazia também retorna verdadeiro.
console.log(!!Infinity)
console.log(!!(isAtivo = true)) //É importante observar aqui que o valor booleano dessa expressão se refere à variável e não se a expressão de atribuição funcionou ou não.

/*
    Com relação a arrays vazias, objetos vazios e funções vazias
    retornarem verdadeiro não encontrei explicação para esse comportamento!

    Segue alguns sites que podem ajudar a entender melhor toda essa aula:
    https://www.nfriedly.com/techblog/2009/07/advanced-javascript-operators-and-truthy-falsy/
    https://www.sitepoint.com/javascript-truthy-falsy/
*/

//EXEMPLOS QUE RETORNAM FALSO
console.log('Os falsos:')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

/*
    Em tese, em JS esses são todos os casos que retornam falso.
*/

//OBSERVAÇÕES FINAIS
console.log('Pra finalizar...')
console.log(!!('' || null || 0 || ' ')) //Retorna verdadeiro pois a string com espaço tem valor, portanto a expressão retorna verdadeiro.
console.log('' || null || 0 || 'texto') //Visto que a expressão não tem as exclamações no seu início, essa expressão não irá retornar seu valor booleano e retornará o único valor que é verdadeiro.

let nome = ''
console.log(nome || 'Desconhecido') //Nesse caso visto que a variável 'nome' tem uma string vazia essa expressão retornará 'Desconhecido' porque é uma string com valor e portanto não vazia, ou seja, a variável 'nome' por estar vazia tem o valor booleano falso enquanto que a string 'Desconhecido' tem o valor booleano verdadeiro por conter algum valor.

nome = 'Leonardo'
console.log(nome || 'Desconhecido') //Aqui a variável 'nome' tem uma string com conteúdo, não está vazia, sendo assim essa expressão retorna a primeira coisa que tiver seu valor booleano verdadeiro, então nesse caso retorna o valor da variável 'nome'.
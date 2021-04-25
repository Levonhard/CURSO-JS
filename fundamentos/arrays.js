const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores)
console.log(valores[4]) //Não retorna erro, mas retorna 'undefined' pois nada foi declarado no índice '4' dessa array.

valores[4] = 10
console.log(valores)

valores.push({id: 3}, false, null, 'texto') //A função 'push' insere valores no fim da array.
console.log(valores)
/*
    Em JS uma array aceita qualquer tipo de valor, sendo assim
    numa array podemos ter number, objects, boolean, string, etc.
    Definitivamente não é uma prática recomendada!
*/

console.log(valores.pop()) //A função 'pop' retira o último valor da array, nesse caso a função retira o último valor da array e imprime esse valor.
delete valores[0] //Essa expressão deleta um elemento da array, nesse caso é o elemento que está no índice '0'.
console.log(valores) //Na impressão podemos verificar que o índice '0' está vazio e a ausencia do valor 'texto', que era o último valor da array e que agora o valor passa a ser 'null'.

console.log(typeof valores) //Em JS uma array é considerada como um objeto
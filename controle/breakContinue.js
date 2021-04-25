const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (let i in nums) {
    if (i == 5) {
        break
    }
    console.log(`${i} = ${nums[i]}`)
}

/*
    O comando 'break' tem influência em 'switch' e nos laços 'while' e 'for'
    também. Portanto no exemplo acima, ainda que o comando 'break' esteja
    dentro de 'if' ele irá interromper e sair do laço 'for' quando a condição
    de 'if' for verdadeira.
*/

for (let i in nums) {
    if (i == 5) {
        continue
    }
    console.log(`${i} = ${nums[i]}`)
}

/*
    O comando 'continue' tem influência apenas nos laços 'for' e 'while'.
    Então no exemplo acima, ainda que o comando 'continue' esteja dentro de
    'if' ele irá pular a repetição atual do 'for' para a próxima repetição,
    ou seja, esse comando não irá sair do laço.
    Sendo assim, nesse caso quando o indice for 5, não será impresso o elemento
    do quinto indice da array e a repetição segue a partir do próximo elemento.
*/
/*
    A ideia nesse código é que se os 2 trabalhos derem certo, ou seja serem
    verdadeiros, o resultado é que irá comprar sorvete e TV de 50 pol., se
    apenas um dos trabalhos der certo, ou seja um dos trabalhos for verdadeiro
    e o outro falso, o resultado é que irá comprar sorvete e TV de 32 de pol.,
    mas se o caso for que os 2 trabalhos não deram certo, ou seja os 2 trabalhos
    são falsos, então não compra sorvete, nenhuma TV mas se mantem saudável.
*/

function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTv50 = trabalho1 && trabalho2
    // const comprarTv32 = !!(trabalho1 ^ trabalho2) // bitwise xor
    const comprarTv32 = trabalho1 != trabalho2 // xor
    const manterSaudavel = !comprarSorvete // operador unário

    return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel }

    /*
        O retorno dessa função é um objeto com a seguinte estrutura:

            {
                comprarSorvete: comprarSorvete,
                comprarTv50: comprarTv50,
                comprarTv32: comprarTv32,
                manterSaudavel: manterSaudavel
            }
        
        Ou seja, se aplicar exatamente a estrutura acima no returno
        irá retornar o mesmo objeto.
        Mas se quiser criar um objeto com os nomes dos itens diferentes
        dos nomes das variáveis ou das constantes, como nesse caso, basta
        utilizar a mesma estrutura acima com o nome dos itens do objeto
        da forma como desejar.
    */
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))
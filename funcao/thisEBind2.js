function Pessoa() {
    this.idade = 0

    // OPÇÃO 1
    setInterval(function() {
        this.idade++
        console.log(this.idade)
    }.bind(this), 1000)

    /*
        Aqui a função sem nome está atrelada ao 'bind()' que por sua vez
        está indicando o contexto 'this'.
        O 'this' dentro da função opera no contexto da função, mas o 'this'
        dentro de 'bind()' opera na função 'Pessoa()', sendo assim, o 'bind()'
        está informando o contexto da função 'Pessoa()' para o 'this' que está
        dentro da função sem nome.
    */

    // OPÇÃO 2
    const self = this
    setInterval(function() {
        self.idade++
        console.log(self.idade)
    }, 1000)

    /*
        Nesse caso a constante 'self' está recebendo 'this' dentro do contexto
        da função 'Pessoa()'. Por isso quando self é chamado dentro da função sem
        nome, o resultado é o mesmo que o caso do 'bind()' mais acima.
    */
}

new Pessoa
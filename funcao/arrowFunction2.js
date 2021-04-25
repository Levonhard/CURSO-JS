function Pessoa() {
    this.idade = 0

    setInterval(() => {
        this.idade++
        console.log(this.idade)
    }, 1000)

    /*
        Uma das características do arrow function é manter o 'this'
        dentro do contexto inserido, independente da forma como a função
        seja chamada.
        No caso acima, o 'this' irá sempre apontar para o contexto da função 'Pessoa()'.
    */
}

new Pessoa
let comparaComThis = function (param) {
    console.log(this === param)
}

comparaComThis(global)

/*
    Em uma função tradicional o 'this' por padrão aponta pro contexto global,
    tanto no node quanto no browser.
*/

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(obj)

/*
    Em funções tradicionais é possível alterar seu contexto com o 'bind()'.
    Por isso, no caso acima o 'this' da função não está mais no contexto global
    e passa a estar no contexto de 'obj'.
*/

let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global)
comparaComThisArrow(module.exports)

/*
    Nas arrow functions o 'this' aponta por padrão pro contexto inserido.
    Nesse caso, o 'this' não aponta pro contexto global mas aponta pro contexto
    da própria função que nesse exemplo, como estamos usando o node, é o 'module.exports'.
*/

comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj)
comparaComThisArrow(module.exports)

/*
    No exemplo acima se observa uma tentativa de alterar o contexto da arrow function
    com 'bind()' o que não resulta em erro mas também não altera seu contexto.
    As arrow functions não podem ter seu contexto alterado!
*/
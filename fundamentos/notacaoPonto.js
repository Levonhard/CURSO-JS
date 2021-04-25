function Obj(nome) {
    this.nome = nome
    this.exec = function() {
        console.log('Exec...')
    }
}

const obj1 = new Obj('Cadeira')
const obj2 = new Obj('Mesa')
console.log(obj1.nome)
console.log(obj2.nome)
obj2.exec()
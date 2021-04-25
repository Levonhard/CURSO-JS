// IIFE -> Immediately Invoked Function Expression

(function() {
    console.log('Será executado na hora! Sem precisar invocar a função.')
    console.log('Foge do escopo mais abrangente!')
})()

console.log('Também é executado na hora, mas fica acessível ao escopo mais abrangente!')
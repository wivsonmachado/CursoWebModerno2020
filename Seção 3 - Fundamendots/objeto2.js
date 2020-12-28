console.log(typeof Object)
console.log(typeof new Object)

const Cliente = function(nome, profissao, idade){
    this.nome = nome
    this.profissao = profissao
    this.idade = idade
}
let cliente1 = new Cliente('Wivson', 'Surveyor', 32)
let cliente2 = new Cliente('Michelle', 'Téc Capacitação', 41)
let cliente3 = new Cliente('Beth', 'Não informado', 64)
console.log(cliente3)
console.log(cliente1)
console.log(typeof cliente1)



console.log(cliente2)
console.log(typeof cliente2)



cliente3.profissao = 'Aposentada'
console.log(cliente3)
console.log(typeof cliente3)


console.log(typeof Cliente)
console.log(typeof new Cliente)
class Produto {} //ES 2015 (ES6)
console.log(typeof Produto)
console.log(typeof new Produto())

/*
O new é um operador para instanciar(chamar) uma função e
criar um objeto.

A forma de criar um objeto em JS é a partir de uma função.

A partir da função pode ser criado um molde e ser usado
quantas vezes forem necessárias como objeto.
*/


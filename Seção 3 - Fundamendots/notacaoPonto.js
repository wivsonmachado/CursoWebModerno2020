/*
A notação é um elemento do JS para acessar membros de uma
função, membros de um objeto.

*/

const Soma = function(a = 0, b = 0){
    this.a = a
    this.b = b
    this.result = () => a + b
}

const somatorio = new Soma(5, 10)

console.log(somatorio)
console.log(somatorio.result())
console.log('Quem é a: '+somatorio.a)
console.log('Quem é b: '+somatorio.b)
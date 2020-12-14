/*
O Hoisting é o içamento de uma variavel, ou seja, a
variavel pode ser declarada em qualquer posição do código
que o o JS ira intrepretar, isso só ira acontecer com o VAR
com o LET ele gera um erro.

*/

console.log('a =', a) // sozinha aconteceria um erro ReferenceError: a is not defined

var a = 2
console.log('a =', a)

/*
Após declarar o var:

a = undefined
a = 2
*/
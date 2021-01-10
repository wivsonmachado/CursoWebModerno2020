/*
A estrutura do operador ternario consiste em um operador 
relacional, seguido de '?' para verdadeiro e ':' para falso
*/



const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado'

console.log(resultado(7.1))
console.log(resultado(6.7))
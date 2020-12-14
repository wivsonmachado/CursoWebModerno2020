/*
O let tem escopo de bloco, ou seja, ele funciona dentro de
um bloco independente se está dentro de uma função ou não,
o let procura o menor escopo primeiro, se houver a variavel
dentro do escopo menor ele a executa, se não ele aumenta o
escopo ate achar.

LET TEM ESCOPO GLOBAL, ESCOPO DE FUNÇÃO E ESCOPO DE BLOCO.

*/


let numero = 1
{
    let numero = 2
    console.log('Dentro =', numero)
}

console.log('Fora =', numero)
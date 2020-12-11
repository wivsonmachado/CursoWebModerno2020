/*
O template string ajuda na hora de concatenar muitas strings,
deixando o código mais legivel

O template string permite fazer coisas que a string não faz, como quebras de linhas, lida melhor com espaços em branco, tabs.

*/

const nome = 'Rebeca'
const concatenacao = 'Olá ' + nome + '!'
const template = `
Olá 
${nome}! `


console.log(concatenacao)
console.log(template)

// expressõe
console.log(`1 + 1 = ${1 +1}`)

const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado')}!`) // exemplo de como passar uma função dentro de um template string
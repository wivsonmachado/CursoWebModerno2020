// Armazenando uma função em uma variavel

/*
Para colocar uma função dentro de uma variavel, declare a
variavel como o nome de acordo com a função que deseja 
fazer, essa variavel recebe uma função anonima com os parametros desejados e abrir o bloco de código
*/
const imprimirSoma = function(a, b){
    console.log( a + b)
}

imprimirSoma(2, 3)

// Armazenando uma função arrow em uma variavel

/*
A função arrow, é declarada dentro de um variavel que recebe os parametros, quando colocada a setinha => a variavel se transforma numa função, após a seta abri o bloco de código.

*/

const soma = (a, b) => {
    return a + b
}

console.log(soma( 2, 3))

// retorno implicito

/*
A função arrow com retorno implicito, é declarada dentro de um variavel que recebe os parametros, quando colocada a setinha => a variavel se transforma numa função, após a seta inserir o código que deseja que a função execute, essa
função serve para códigos que tem apenas uma linha, caso contrario usar o bloco de código.
*/

const subtracao = (a, b) => a - b
console.log(subtracao(3, 2))

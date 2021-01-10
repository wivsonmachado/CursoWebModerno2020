/*
Novo recurso do ES2015

O destructuring é um operador de desestruturação,ou seja,
ele retira elementos de dentro de uma estrutura como um
objeto, um array.

ele pode ser escrito de duas formas:

- Quando quer usar o destructuring em um objeto utiliza-se
as chaves {} uma vez que para determinar um objeto são
utilizadas as chaves {}.

- Quando quer usar o destructuring em um array utiliza-se
os colchetes [] uma vez que para determinar um array são
utilizadas os colchetes [].

*/

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }

}

/* 
Sem o destructuring a forma padrão para retirar elementos
do objeto acima seria utilizando a notação ponto
*/

let nomeNP = pessoa.nome
let idadeNP = pessoa.idade
let ruaNP = pessoa.endereco.logradouro
console.log(nomeNP)
console.log(idadeNP)
console.log(ruaNP)

/*
O operador destructuring é uma forma simplificada de retirar
elementos de uma estrutura.
*/

const {nome, idade, endereco:{logradouro: rua, numero: num}} = pessoa
/*
as chaves não representam a criação de um objeto e sim o
 operador de desestruturação para um objeto, dentro das 
 chaves é colocado os atributos que deseja extrair, o 
 operador de atribuição '='  nesse caso aponta para o 
 objeto que devem ser retirado os atributos, dessa forma
 com uma unica linha é possivel tirar varios atributos de 
 um unico objeto.
*/


console.log('Abaixo com o destructuring')
console.log(nome, idade, rua, num)

/*
criando uma nova variavel com o destructuring
*/

const {nome: n, idade: i} = pessoa
console.log(n, i)
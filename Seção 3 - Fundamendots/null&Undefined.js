

let valor // não inicializada
console.log(valor) // retorna undefined

/*
quando é declarada uma variavel, porém não é atribuido um 
valor para ela é retornado undefined.

undefined é diferente da mensagem de erro "is not defined" 
que é quando uma variavel nem está declarada ainda.

*/

valor = null //Não tem nenhum valor e não aponta para nenhum local de memoria

console.log(valor)

/*
quando é necessário zerar a variavel para que ela não 
aponte para nenhum valor ou referencia na memoria o padrão
é setar essa variavel como null, deixar o undefined para a 
linguagem setar quando ela identifica que não há valor
nenhum
*/

/*
É necessário ter cuidado com variaveis tipo nulas, pois ao
tentar acessar algum função da variavel pode gerar um erro
no código
*/

// console.log(valor.toString()) // erro, uma vez que valor foi setado como null

const produto = {}
console.log(produto.preco)
console.log(produto)
produto.preco = 3.50
console.log(produto)

produto.preco = undefined // evitar atribuir undefined
console.log(!!produto.preco)
console.log(produto.preco)

produto.preco = null // sem preço
console.log(!!produto.preco)
console.log(produto)
const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

const avalicao1 = 9.871
const avalicao2 = 6.871

const total = avalicao1 * peso1 + avalicao2 * peso2
const media = total / (peso1 + peso2)

console.log(media)

console.log(media.toFixed(2)) //toFixed(n) para mostrar a quantidade de casas decimais que deseja

console.log(media.toString())
console.log(media.toString(2)) // transforma em binaria
console.log(typeof media)
console.log(typeof Number)

//O dado ou a variavel do dado tem funções agregadas a ele e chamado a partir o operador ponto "."

//number com n minusculo é o tipo do dado quando se tem um valor numerico, Number com N maiusculo é uma função

//Cuidados com tipo numero

console.log(7 / 0) // retorna tipo infinito
console.log("10" / 2) // cuidado com string convertendo pra numero e fazendo operação matematica.
console.log('Show!' * 2) // Retorna um NaN - Not a Number
console.log(0.1 + 0.7) // gera uma impresição ao trabalhar com ponto flutuante, IEEE padrão para precisão do ponto flutuante
//console.log(10.toFixed(2)) não é possivel chamar o literal diretamente
console.log((10.345).toFixed(2))//numero entre parenteses e chamar a função agregada
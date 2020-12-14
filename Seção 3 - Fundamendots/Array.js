/*
Em JavaScript o array é heterogeneo, ou seja, no mesmo
array podem ter dados de diferentes tipo (números, strings, booleans)

O array não tem tamanho fixo

*/

const valores = [7.7, 8.9, 6.3, 9.2]

console.log(valores[0], valores[3])
console.log(valores[4]) /*em outras linguagens fortemente tipadas ao chamar um 
indice que não existe daria erro, em javascript retorna "undefined", isso por um 
lado é bom pois não retorna um erro pro usuario, mas por outro lado pode gerar 
uma dor de cabeça ao tentar acessar algo que não existe.*/
console.log(valores[3])
valores[4] = 10

console.log(valores)
console.log(valores.length) // conta a quantidade de elementos dentro do array

valores.push({id: 3}, false, null, 'teste')

console.log(valores)

console.log(valores.pop(), valores) // A função pop tira do array o ultimo valor
delete valores[0] // outra forma de excluir dados de dentro do array colocando o indice, o delete funciona em cima de um objeto, para tirar o atributo de um objeto
console.log(valores)
valores[0] = 9.3
console.log(valores)
console.log(typeof valores)
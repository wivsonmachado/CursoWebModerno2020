const [a] = [10]
console.log(a)

/*
No exemplo abaixo eu tenho um array de 4 posições e quero
definir de forma rapida variaveis para os elementos desse
array, porém posso ignorar posições (n2 e n4), criar 
variaveis mesmo depois do numero total de elementos do array
(n5) e estipular valores padrões (n6)
*/
const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8]
console.log(n1, n3, n5, n6)
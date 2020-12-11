let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

/*Para tranformar tipos em boolean(true/false),
utiliza o operador lógico de negação "!" uma exclamaçao significa false 
e duas exclamações "!!" not false ou true*/


isAtivo = 1
console.log(!isAtivo)//Neste caso o 1 seria falso
console.log(!!isAtivo)// Neste caso o 1 seria verdadeiro

console.log('Os tipos verdadeiro...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log('Os tipos falso...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('Pra finalizar...')
console.log(!!('' || null || 0 || ' '))

let nome = 'Lucas'

console.log(nome || 'Desconhecido')
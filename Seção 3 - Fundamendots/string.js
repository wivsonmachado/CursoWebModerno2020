/*

String é uma cadeia de caracteres

É possivel delimitado por 3 simbolos:

Aspas duplas ""
Aspas simples ''
Crase `` (template string)

Começou com um simbolo, termine com ele.

*/

const escola = "Cod3r"

console.log(escola.charAt(4)) //Vai dar o caracter que está no indice 4

console.log(escola.charAt(5)) // Mesmo que o indice não exista o javascript não vai gerar um erro

console.log(escola.charCodeAt(3)) // Valor do caracter dentro da tabela ASCII/Unicode, o valor é o indice da palavra

console.log(escola.indexOf('3')) // Procura o indice de um determinado caracter dentro da palavra.

console.log(escola.substring(1)) // imprime a palavra a partir do indice setado

console.log(escola.substring(0,3)) // vai do indice 0 até o indice 3, sem incluir o indice 3 ou vá do indice e 0 e retorne 3 caracteres.

console.log('Escola '.concat(escola).concat("!")) // concatenar strings, diferente do numero a string pode chamar uma função a partir do literal

console.log('Escola ' + escola + "!") // concatenar strings com simbolo de +

console.log(escola.replace(3, 'e')) // primeiro valor indice do que quer trocar e segundo valor, literal que quer substituir

console.log(escola.replace(/\d/, 'e')) // exressão regular - substitua todos digitos 'd' pela letra 'e'
console.log(escola.replace(/\w/g, 'e')) // exressão regular - substitua todos digitos e letras 'w' pela letra 'e'

console.log('Ana, Maria, Pedro'.split(',')) //Função split e apenas dizer com  o delimitador para construir o array

console.log('Ana, Maria, Pedro'.split(/,/)) // COM REGEX Função split e apenas dizer com  o delimitador para construir o array
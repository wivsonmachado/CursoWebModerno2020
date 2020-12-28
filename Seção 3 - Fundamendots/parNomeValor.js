/*
Contexto léxico é o contexto onde o par variavel/valor se encontram, podem estar no escopo global ou local, podem estar dentro de uma função, dentro de um objeto.

um mesmo par/valor não retornam erro estando em contextos léxicos diferentes

*/

const saudacao = 'Opa' // contexto léxico 1

function exec(){
    const saudacao = "Opa" // contexto léxico 2
    return saudacao
}

// Obejtos são grupos aninhados de pares nome/valor

const cumprimento = {
    saudacao: 'Opa'
}

const cliente = {
    nome: 'Wivson',
    idade: 32,
    peso: 54,
    endereco: {
        logradouro: 'Avenida Pilsen',
        numero: 254,
        complemento:'Sobrado'
    }

}

console.log(saudacao)
console.log(exec())
console.log(cumprimento)
console.log(cliente)
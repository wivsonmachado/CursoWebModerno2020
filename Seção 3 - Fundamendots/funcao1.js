/*
A função é um bloco de código nomeado

A função recebe parametro de entrada, que executam o algoritmo e retorna uma saída(resultado)

A função executa uma ação dentro de um bloco de código

Função é um trecho de código e pode ser reutilizado em
qualquer lugar do código

A função pode receber parametros e retornar alguma coisa,
pode não receber nada e retornar alguma coisa,
pode receber algo e não retornar nada.

*/

// Função sem retorno

function imprimirSoma(a, b){ //Essa função sozinha não retorna nada como resposta
    console.log(a + b)       //É preciso chamar a função e passar os parametros
}

imprimirSoma(2, 3)
imprimirSoma(2) // mesmo com os parametros definidos na função é possivel passar apenas um deles, porém o JS vai definir o parametro suprimido como undefined e no caso de uma operação matematica, ira retornar um NaN.
imprimirSoma(2, 10, 4, 5, 7, 8) // É possivel passar mais parametros do que os definidos na função, a função vai pegar os dois primeiro, executar o codigo e ignorar o resto, não retorna erro.
imprimirSoma() // É possivel executar a função sem passar parametro, a função vai executar o código e não retorna erro.

// Função com retorno

function soma(a, b = 1){ // É possivel declarar um valor padrão no parametro, para tratar o erro caso o parametro não seja passado.
    return a + b //o return é para retornar o resultado a função
}

console.log(soma(2, 3)) //para imprimir no terminal é preciso chamar dentro do console.log
console.log(soma(2))
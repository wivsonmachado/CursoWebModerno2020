/*
O escopo é a visibilidade de uma variavel dentro de um bloco
de código, em js quando usada a palavra reservada var, essa
fica visivel para todo o codigo e não apenas no bloco onde
ela foi declarada, ou seja, ela te torna global tanto para
o browser quando para o node, podendo ser sobrescrita a
qualquer momento e isso se torna perigoso para o sistema. 

Porém quando var é declarada dentro de uma função ela fica
visivel apenas dentro daquela função.
*/

//FUJA DO ESCOPO GLOBAL!!!


{
    {
        {
            {
                var sera = 'Será???'
                console.log(sera)
            }
        }
    }
}
console.log(sera)

function teste(){
    var local = 123
}

teste()
console.log(local)

var numero = 1

{
    var numero = 2
    console.log('dentro =', numero)
}

console.log('fora =', numero)
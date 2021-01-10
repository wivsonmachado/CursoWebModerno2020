function compras(trabalho1, trabalho2){
    const comprarSoverte = trabalho1 || trabalho2
    const comprarTv50 = trabalho1 && trabalho2
    //const comprarTv32 = !!(trabalho1 ^ trabalho2) // bitwise xor
    const comprarTv32 = trabalho1 != trabalho2
    const manterSaudavel = !comprarSoverte
    
    return {comprarSoverte, comprarTv50, comprarTv32, manterSaudavel}
}

console.log(compras(true, true))

/*
|| -> OU
&& -> E
! -> Negação lógica
!= uso do diferente para usar o OU Exclusivo


*/
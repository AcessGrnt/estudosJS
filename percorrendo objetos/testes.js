const fichaGuerreiro = {
    nome: "Aragorn",
    classe: "guerreiro"
}
   
   const equipoGuerreiro = {
    espada: "Andúril",
    capa: "capa élfica +2"
}

/////////////////////////////////////////////////////////////////////////////////////////////
//                 "..." fará um aparecer debaixo do outro
//             Se tiver dois "nomes:" o JS irá sobrescrever o valor
//                Exemplo: 2 valores "espada:" estão escritas em dois objetos diferentes:
//                 O java script irá retornar o ultimo "espada:" declarado
/**/             const guerreiro = { ...fichaGuerreiro, ...equipoGuerreiro};
//////////////////////////////////////////////////////////////////////////////////////////////
console.log(guerreiro)
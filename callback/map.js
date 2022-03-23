const notas = [10, 9, 8, 7, 6]

//                                                     tenho que somar antes
//const notasAtualizadas = notas.map( nota => nota == 10 ? nota : ++nota)

const notasAtualizadas = notas.map(function(nota){
    if (nota == 10){ // NÃO ESQUECE DO RETURN SKKSKSKSK
    return 10
    } else {
        return ++nota
    }
})

console.log(notasAtualizadas)
const nomes = ['Ana', 'Marcos', 'Maria', 'Mauro']
const notas = [7, 4.5, 8, 7.5]

//                 filter trabalha apenas com true ou false!
const reprovados = nomes.filter(function(_,indice){ 
    if (notas[indice] < 5) {
        return true
    } else {
        return false
    }
})

console.log(`reprovados: ${reprovados}`)
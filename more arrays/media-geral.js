const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7]
const salaJava = [6, 5, 8, 9, 5, 6]
const salaPython = [7, 3.5, 8, 9.5]

function mediaSala(notasDaSala){

//                              .reduce ira reduzir todos valores da array em 1
//                                       Sempre tem que ter o acum e o atual
//                                         O zero será o inicio do acumulo!

    const somaDasNotas = notasDaSala.reduce((acum, atual) => atual + acum,0)
    return somaDasNotas/notasDaSala.length
}

console.log(`Média da sala de JavaScript ${mediaSala(salaJS)}`)
console.log(`Média da sala de Java ${mediaSala(salaJava)}`)
console.log(`Média da sala de Pythi ${mediaSala(salaPython)}`)

////////////////////////////////////////////////////////////////////
// Testes

const notas = [10, 6.5, 8, 7]

/*const media = notas.reduce(function(acum,atual){
    return acum + atual
}) /notas.length*/

///////////////
//ou

//const media = notas.reduce((acum, atual) => acum + atual,0)/notas.length

///////////////
// ou 
const media = notas.reduce(function(acum,atual){ 
    return atual + acum
},0) /notas.length
console.log(media)
const numeros = [1, 2, 3, 4]

function mutiplicadoPor10(num) {
    return num * 10
}

const numeroSomado = numeros.map(mutiplicadoPor10)

console.log(numeroSomado)

/////////////////////////////////
// Teste com strings

const nomes = ['João', ' Pedro', ' Rafa', ' Lucas']

const aluno = `Primeiro aluno: ${nomes[0]}, Segudo aluno: ${nomes[1]}, Terceiro aluno: ${nomes[2]}, Quarto aluno: ${nomes[3]}`

/*const frase = nomes.map(function(aluno) {
    return aluno + nomes  //Não preciso ultilizar o map para esse teste!
})*/

console.log(aluno)
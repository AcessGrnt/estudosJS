// CODIGO INUTIL, posso apenas criar uma variavel solicitando quantos alunos tem ;-;
const alunos = ['Joao', 'Ana', 'Pedro', 'Juca']

let quantidadeDeAlunos = 0;

alunos.forEach(function(quantidade) {// Usando nomes se eu solicitar a media de alunos por sala retornara NAN
    quantidadeDeAlunos += quantidade
})

let resultado = quantidadeDeAlunos/alunos.length; // Retorna NAN

console.log(resultado)

// Como posso fazer:

const alunosDaSala = ['Joao', 'Ana', 'Pedro', 'Juca']
const outraSala = ['Pedro', 'Raissa', 'Rafa', 'Lucas']

const duasSalas = [alunosDaSala, outraSala] // Isso não funcionara. Retornara 2(usando a ",") ou 1(usando o "+")

let numero = alunosDaSala.length + outraSala.length;

console.log(numero)
////////////////////////////////////////////////////////////////////////////////
// Outros testes
const notas1 = [10, 9, 7.5, 2, 3]
const notas2 = [2, 4, 3, 8, 10]
const notas3 = [9, 6, 7.5, 4, 2]

let todasNotas = [notas1, notas2, notas3]
let media = 0;

for (let i = 0; i < todasNotas.length; i++) {
    for (let o = 0; o < todasNotas[i].length; o++) {
      media += todasNotas[i][o]/todasNotas[i].length;
    }
}

media = media/todasNotas.length

console.log(media)
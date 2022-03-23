const nome = ['Paulo', 'Ana', 'Joao', 'Pedro']

nome.forEach(imprimeNomes)

function imprimeNomes(nome) {
    console.log(nome)
}

////////////////////////////////////////////////////////
// Testes

const notas = [10, 7, 3, 2]
const notas2 = [7, 3.5, 5, 9]

let notasGerais = [notas, notas2]
let media = 0;

for (let i = 0; i < notasGerais.length; i++) {
    for (let j = 0; j < notasGerais[i].length; j++) {
        media += notasGerais[i][j]/notasGerais[i].length
    }
}

media = media/notasGerais.length;

console.log(media)

/////////////////////////////////////////////////////////////////////
// Segunda repetição para gravar :)

const numeros = [10, 10, 10, 10]
const numeros2 = [10, 10, 10, 10]

let doisNumeros = [numeros, numeros2]
let mediaDosNumeros = 0;

for (let i = 0; i < doisNumeros.length; i++) {
    for (let j = 0; j < doisNumeros[i].length; j++) {
        mediaDosNumeros += doisNumeros[i][j]/doisNumeros[i].length
    }
    
} mediaDosNumeros = mediaDosNumeros/doisNumeros.length

console.log(mediaDosNumeros)
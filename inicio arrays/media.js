// medias 10  6,5  8  7,5

 const nota1 = 10;
 const nota2 = 6.5;
 const nota3 = 8;
 const nota4 = 7.5;
            //  0   1   2   3
const notas = [10, 6.5, 8, 7.5]

// let media = (nota1 + nota2 + nota3 + nota4)/4

let media = (notas[0] + notas[1] + notas[2] + notas[3])
/ notas.length

console.log(media)

////////////////////////////////////////////////////////////////////////////////////////////////////
// testes
////////////////////////////////////////////////////////////////////////////////////////////////////

const notaDosAlunos = [2, 8.5, 1, 6.5, 8, 10, 3, 5.5]

let mediaDasNotas = (notaDosAlunos[0] + notaDosAlunos[1] + notaDosAlunos[2] + notaDosAlunos[3] + notaDosAlunos[4] + notaDosAlunos[5] + notaDosAlunos[6] + notaDosAlunos[7]) / notaDosAlunos.length

console.log(mediaDasNotas)
//////////////////////////////////////////////////////////////////////////////////////
// ERROR: NÃO POSSO ADICIONAR STRINGS DENTRO DE UMA MEDIA!!!
//const diasDosMeses = ['abril' = 29, 'março' = 31, 'janeiro' = 30, 'outubro' = 28]

//let mediaDeDias = (diasDosMeses[0] + diasDosMeses[1] + diasDosMeses[2] + diasDosMeses[3]) / diasDosMeses.length

//console.log(mediaDeDias)
///////////////////////////////////////////////////////////////////////////////////////

let horario = 20;

if (horario <= 18) {
    console.log("Bom dia cliente!")
} else {
    console.log("Boa noite cliente!")
}

const diasDosMeses = [20, 27, 40, 21, 31, 29, 28]

let  mediaDeDias = (diasDosMeses[0] + diasDosMeses[1] + diasDosMeses[2] + diasDosMeses[3] + diasDosMeses[4] + diasDosMeses[5] + diasDosMeses[6]) / diasDosMeses.length

console.log(mediaDeDias)

///////////////////////////////////////////////////////////////////////////////////////////////

let pdlParaSubir = 100;
let pdlDoJogador = 70;
let pdlRestantes = pdlParaSubir-pdlDoJogador;

if (pdlDoJogador >= pdlParaSubir) {
    console.log('Você upou de elo')
} else {
    console.log('Falta apenas ' + pdlRestantes + ' PDLS para você subir de elo')

}

////////////////////////////////////////////////

let teclasDigitadas = 310;
let limiteDeTeclas = 300;
let teclasRestantes = limiteDeTeclas-teclasDigitadas;

if (teclasDigitadas >= limiteDeTeclas) {
    console.log('Você exedeu o limte de teclas digitadas')
} else {
    console.log('Você ainda tem ' + teclasRestantes + ' teclas')
}

///////////////////////////////////////////////////


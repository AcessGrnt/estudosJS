const anoEscolar = 6;
const formatura = 12;
const falta = formatura-anoEscolar;

if (anoEscolar >= formatura) {
    console.log('Você está formado')
} else {
    console.log('Faltam ainda ' + falta + ' anos para você se formar na escola!')
}

/////////////////

const notas = [10, 12, 13, 2]
notas.push(8)

const media = (notas[0] + notas[1] + notas[2] + notas[3] + notas[4]) / notas.length

console.log(media)


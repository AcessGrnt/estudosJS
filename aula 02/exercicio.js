let varA = 'A'; // 'B'
let varB = 'B'; // 'C'
let varC = 'C'; // 'A'

let resposta;

resposta = [varA, varB, varC]
console.log(resposta)

if (varA === 'A') {
   varA = 'B'
}
if (varB === 'B') {
    varB = 'C'
}
if (varC === 'C') {
    varC = 'A'
}

resposta = [varA, varB, varC]


console.log(resposta)

/*
const resposta = [varA, varB, varC] = [varB, varC, varA];

const resposta1 = [varA = 'B', varB = 'C', varC = 'A']
*/
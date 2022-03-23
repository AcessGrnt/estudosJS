const salaDePython = ['Melissa', 'Milena', 'Ronaldo']
const salaDeJavascript = ['João', 'Ju', 'Raquel']

const salasJuntas = salaDePython.concat(salaDeJavascript)

console.log(salasJuntas)

////////////////////////////////////////////////////////////
/// Testes

const numerosTeste = [1, 2, 3, 4, 5]
const numeros = [6, 7, 8, 9]
const numeros1 = [10, 11, 12, 13]
const numeros2 = [14, 15, 16, 17, 18]

const numerosJuntos = numerosTeste.concat(numeros, numeros1, numeros2)

console.log(numerosJuntos)

// Oque percebi: Posso ultilizar o "concat" para maus de uma array!
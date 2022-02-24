// Strings (tudo que está entre aspas é considerado string)

const texto1 = "Olá, mundo!";
const texto2 = 'Olá, mundo!!';
const senha1 = "senha123";
const StringDeNumeros = "123456";

const citação = 'O leo disse "oi!"';

console.log(citação)

// Concatenação (+)

const oNome = "o meu nome é: ";
const meuNome = "João";

console.log(oNome + meuNome)

// string \u

const cifrao = '\u0024'
const aMaiusculo = '\u0041'
const tique = '\u2705'
const hiragana = '\u3041'

console.log(cifrao)
console.log(aMaiusculo)
console.log(tique)
console.log(hiragana)

// input

const cidade = "belo horizonte";
const input = "Belo Horizonte";

const inputMinusculo = input.toLowerCase();

console.log(cidade === input); // false

// length

const senha = "minhaSenha1234" // indica quantos caracteres a string tem!
console.log(senha.length) // 13 caracteres

// template string ou template literal
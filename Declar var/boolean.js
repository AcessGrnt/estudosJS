// boolean

const usuarioLogado = true;
const contaPaga = false;
/////////////////////////////////////////////////////////////////////////////////////
// Truthy e falsy

// 0 => false
// 1 => true

console.log(0 == false)
console.log("" == false)
console.log(1 == true)
/////////////////////////////////////////////////////////////////////////////////////
//undefined => Não definido
//null => Vazio ou nada

let minhaVar;
let varNull = null;

console.log(minhaVar)
console.log(varNull)

let numero = 3;
let texto = 'Alura';
/////////////////////////////////////////////////////////////////////////////////////
console.log(typeof numero)
console.log(typeof texto)
//typeof serve para perguntar ao JS qual tipo de dado que está sendo gravado

console.log(minhaVar)
console.log(varNull)

console.log(typeof minhaVar)
console.log(typeof varNull)

let telefone = 12341234;
console.log("O telefone é " + telefone.toString()); // o .toString() é uma outra forma para  fazer essa conversão, que é mais parecida com outras linguagens de programação.

let usuarioConectado = false;
console.log(String(usuarioConectado)); // teremos a conversão da booleana para string, nesse caso teremos uma string “false”.

usuarioConectado = true;
console.log(String(usuarioConectado)); // agora teremos uma string “true”.
/////////////////////////////////////////////////////////////////////////////////////
let minhaLet;
console.log(minhaLet); //undefined

// atribuindo um valor com TIPO DE DADO STRING
minhaLet = "eu sou um texto";
console.log(minhaLet); // "eu sou um texto"

// reatribuindo, desta vez com dado do TIPO NUMBER
minhaLet = 100;
console.log(minhaLet); //100
/////////////////////////////////////////////////////////////////////////////////////
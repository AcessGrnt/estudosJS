const a = [1, 2, 3];
const b = a;

b.push(4, 5, 6); // adiciona valores a array! obs: APENAS ARRAY!

console.log(a, b);

console.log(typeof a) // volta o tipo da const/let

let c = 3;
const d = c;

console.log(c, d); // 3,3

c = 6;

console.log(c, d); // 6,3

///////////////////////////////////////////////////////////////////////////////

/*

RANKING DOS OPERADORES
1- () = vai ser inicializado primeiro
2- ** = elevado a:
3- * = multiplicação
4- / = divisão
5- % = resto
6- + = soma
7- - = subtração

*/

const num1 = 10;
const num2 = 5;

console.log(num1 ** num2);
console.log(num1 % num2);
console.log((num1 + num2) ** num1);

let contador = Number ('1'); // se ele for um numero e estiver dentro de "" será transformado de string para number
contador++; // aqui tera 2
contador--; // aqui tera 1

console.log(contador)

while (contador < 10) {
    contador++;
    console.log(contador)
}

console.log(contador++); // mostra o valor de contador depois adiciona
console.log(++contador); //primeiro adiciona depois mostra

const passo = 10;
let contador1 = 0;

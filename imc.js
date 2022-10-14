/*
Luiz Otavio Miranda tem 30 anos, pesa 84kg
tem 1.8 de altura e seu IMC é de 25.672671278
Luiz nasceu em "1992"
*/

const nome = "Luiz Otavio";
const sobrenome = "Miranda";
const idade = 30;
const peso = 84;
const altura = 1.80;

let IMC;
let anoNascimento;

IMC = peso / (altura * altura);
anoNascimento = 2022 - idade;

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso}kg`);
console.log(`Ele tem ${altura} de altura e seu IMC é de ${IMC}`);
console.log(`${nome} nasceu em ${anoNascimento}`)



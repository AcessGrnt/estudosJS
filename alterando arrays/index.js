const arrayVazia = [];

console.log(arrayVazia);
console.log(arrayVazia.length);
console.log(arrayVazia[0]); //undefined, pois eu ainda não indiquei nenhum valor na array

///////////////////////////////////

const arrayNova = [,,,];

console.log(arrayNova.length) // Ele ira informar o tamanho normalmente pois tem uma separação com virgulas
console.log(arrayNova[0]) //undefined, pois mesmo com virgulas um valor não foi indicado ainda, resultando em um erro de leitura
console.log(arrayNova[1])
console.log(arrayNova[2])

////////////////////////////////////

const arrayTeste = [,,,];
arrayTeste.push(50) // Ele indicara que existem 3 itens vazios na array, mas retornara o numero 50 apos da informação (Resultado: [ <3 empty items>, 50 ] )

console.log(arrayTeste.length)
console.log(arrayTeste)

//////////////////////////////
//testes

let numeros = [1, 2, 3, 4]
numeros.pop()
numeros.pop()

console.log(numeros) 

////////////////////////////

let numeros2 = [1, 2, 3, 4]
numeros2.reverse()
numeros2.reverse()
numeros2.pop()
numeros2.push(11)

const media = (numeros2[0] + numeros2[1] + numeros2[2] + numeros2[3]) / numeros2.length
console.log(media)

let nomeDoUsuario = 'Lucas';
let senhaDoUsuario = '1233';

let usuarioRegistrado = 'Lucas';
let senhaRegistrada = '1233';

if (nomeDoUsuario + senhaDoUsuario === usuarioRegistrado + senhaRegistrada) {
    console.log('Acesso Permitido')
    console.log(`A media das notas dos alunos é ${media}`)
} else {
    console.error('Acesso Negado')
}
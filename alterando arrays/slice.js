const nomes = [' João', ' Ana', ' Juliana', ' Pedro', ' Fagundes', ' Gomes', ' Alicia', ' Anar', ' Anor', ' Anivia', ' Lucas', ' Gabriel', ' Amaral']
const sala1 = nomes.slice(0,nomes.length/2)  
const sala2 = nomes.slice(nomes.length/2)

console.log('Tamanho da array: ', nomes.length)
console.log(`Alunos da sala 1: ${sala1}`)
console.log(`Alunos da sala 2: ${sala2}`)

/////////////////////////////////////////////////////////////////////////
// testes

const listaDoTrabalho = [' Lucas', ' João', ' Pedro', ' Juca', ' Juan', ' Ana', ' Alicia', ' Index', ' Lorem']
const grupo1 = listaDoTrabalho.slice([0[2]], listaDoTrabalho.length/3) 
const grupo2 = listaDoTrabalho.slice(3,6)
const grupo3 = listaDoTrabalho.slice(6,9)

console.log(`Os alunos do primeiro grupo são: ${grupo1}`)
console.log(`Os alunos do segundo grupo são: ${grupo2}`)
console.log(`Os alunos do terceiro grupo são: ${grupo3}`)

const alunos = ['João', 'Juliana', 'Caio', 'Ana']
const medias = [10, 8, 7.5, 9]

let listaDeNotasEAlunos = [alunos, medias]

console.log(`${listaDeNotasEAlunos[0][0]}, a sua media é ${listaDeNotasEAlunos[1][1]}`)

/////////////////////////////////////////////////////////////////////////////
/// Testes

const itens = ['estus', 'espada', 'faca']
const disponiveis = [23, 1, 2]

let itensDisponiveis = [itens, disponiveis]

console.log(`Você ainda tem ${itensDisponiveis[1][1]} ${itensDisponiveis[0][2]}, no seu inventario!`)
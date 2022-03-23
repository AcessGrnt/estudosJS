const alunos = ['João', 'Juliana', 'Caio', 'Ana']
const medias = [10, 8, 7.5, 9]

let listaDeNotasEAlunos = [alunos, medias]

const exibeNomeeNota =  (nomedoaluno) => {
    if (listaDeNotasEAlunos[0].includes(nomedoaluno)) {
        let indice = listaDeNotasEAlunos[0].indexOf(nomedoaluno)
        return listaDeNotasEAlunos[0][indice] + ', sua media é ' + listaDeNotasEAlunos[1][indice]
    } else {
        return "O aluno não consta no registro"
    }
}

console.log(exibeNomeeNota("Juliana"))

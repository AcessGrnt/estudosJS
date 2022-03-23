const listaDeChamada = ['Joao', ' Ana', ' Caio', ' Lara', ' Marjorie', ' Leo']
listaDeChamada.splice(1, 2, ' Rodrigo')

console.log(`Lista de chamada: ${listaDeChamada}`)

////////////////////////////////////////////////////////////////
/// Testes

const nomes = ['Lucas', 'Pedro', 'Juca', 'Nok', 'Joao']
nomes.splice(2, 1, 'Marcelo')
nomes.splice(0, 3, 'Anivia')

console.log(nomes)

const peixes = ['Marrom', 'Dourado', 'Azul', 'Vermelho']
peixes.splice(1,0,'Cinza')
peixes.splice(3,2, 'Carpa')

console.log(peixes)

/////////////////////////////////////////////////////////////////
/// OBS: O splice é ultilizado para alterar coisas dentro da array!!
///////////////////////////////////
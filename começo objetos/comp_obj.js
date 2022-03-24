const cliente = {
    nome: "João",
    idade: 18,
    CPF: "239197827938",
    email: "rufllezrufllez@gmail.com",
    fones: ["553198237821", "553198273123"],
    dependentes: {
        nome: "Sara", 
        parentesco: "Filha",
        dataNascimento: "20/03/2011"
    },    
}

cliente.dependentes = {
    nome: "Sara", 
    parentesco: "Filha",
    dataNascimento: "20/03/2011"
}

cliente.dependentes.nome = "Sara Silva"
console.log(cliente)

////////////////////////////////////////////////////////////////
// Testes

const ficha = {
    Nome: 'Zeri',
    Idade: 29,
    Classe: 'Druida',
    Raça: 'Anão',
    Nivel: 5,
}

ficha.Nivel = 6

ficha.Companheiro = {
    Nome: 'Dugglin',
    Idade: '2 anos de cachorro',
    Nivel: 3,
}

ficha.Nome = "Zeri Da`un"

ficha.Companheiro.Nome = 'Dugglin The Dog'

ficha.Raça = "Elfo"

ficha.Classe = "Druid"

console.log(ficha)
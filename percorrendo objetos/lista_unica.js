const clientes = [
    {
    nome: "João",
    idade: 18,
    CPF: "239197827938",
    email: "rufllezrufllez@gmail.com",
    fones: ["553198237821", "553198273123"],
    dependentes: 
        [{
        nome: 'Sara Silva',
        parentesco: 'Filha',
        dataNascimento: '20/03/2011'
        },
        {
        nome: 'Ana Maria',
        parentesco: 'Filha',
        dataNascimento: '18/03/2009'
        }],
    },
    {
    nome: "Julio",
    idade: 23,
    CPF: "12312314223213",
    email: "rual@gmail.com",
    fones: ["5132133523", "552178390213"],
    dependentes: [
    {
    nome: 'Julia',
    parentesco: 'Filha',
    dataNascimento: '20/03/2011'
    }]
 }
]
                        // fará um aparecer debaixo do outro
const listaDependentes = [...clientes[0].dependentes,...clientes[1].dependentes]

// console.table(), fará uma tabela
console.table(listaDependentes)
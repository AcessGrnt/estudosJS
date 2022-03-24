const cliente = {
    nome: "João",
    idade: 18,
    CPF: "239197827938",
    email: "rufllezrufllez@gmail.com",
    fones: ["553198237821", "553198273123"],
    dependentes: [{
        nome: "Sara Silva", 
        parentesco: "Filha",
        dataNascimento: "20/03/2011"
    }],    
}

cliente.dependentes.push({
    nome: 'Ana Maria',
    parentesco: 'Filha',
    dataNascimento: '18/03/2009'
})

const filhaMaisNova = cliente.dependentes.filter(dependente => dependente.dataNascimento === "20/03/2011")

console.log(cliente)
console.log(`A filha mais nova se chama: ${filhaMaisNova[0].nome}`)
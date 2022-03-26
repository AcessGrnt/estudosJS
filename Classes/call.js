function imprimeNomeEmail (tipoCliente) {
    console.log(`${tipoCliente} - Nome: ${this.nome}, E-mail: ${this.email}
`);
}

const cliente1 = {
    nome: "João",
    email: "joao@example.com",
}

const cliente2 = {
    nome: "Pedro",
    email: "pedro@example.com",
}

// O call passa valores individuais como parametro
// O call vai colocar o valor do parametro
imprimeNomeEmail.call(cliente1, "Cliente VIP")
imprimeNomeEmail.call(cliente2, "Cliente Estudante")
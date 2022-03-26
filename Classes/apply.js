function imprimeNomeEmail (tipoCliente, agencia) {
    console.log(`${tipoCliente} da agência ${agencia}: 
    - Nome: ${this.nome}, E-mail${this.email}
    `);
}

const cliente1 = {
    nome: "João",
    email: "joao@example.com"
}

const cliente2 = {
    nome: "Pedro",
    email: "pedro@example.com"
}

const clienteEspecial = ["Cliente especial", "Itau"]
const clienteEstudante = ["Cliente estudante", "Bradesco"]

// O apply é usado apenas se eu tiver uma array de dados!
imprimeNomeEmail.apply(cliente1, clienteEspecial)
imprimeNomeEmail.apply(cliente2, clienteEstudante)
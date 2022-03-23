const cliente = {
    nome: "João",
    idade: 18,
    CPF: "239197827938",
    email: "rufllezrufllez@gmail.com"
}

const chave = ["nome", "idade", "CPF", "email"]

console.log(cliente[chave[0]])

chave.forEach(info => console.log(cliente[info]))
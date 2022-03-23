const cliente = {
    nome: "João",
    idade: 18,
    CPF: "239197827938",
    email: "rufllezrufllez@gmail.com"
}

console.log(`Meu nome é ${cliente.nome}, e tenho ${cliente.idade}, meu CPF registrado é ${cliente.CPF}`)
console.log(`O CPF REGISTRADO É ${cliente.CPF.substring(0,4)}XXXXXXXXXXXXX`)
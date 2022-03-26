const cliente = {
    nome: "João",
    idade: 18,
    CPF: "239197827938",
    email: "rufllezrufllez@gmail.com",
    fones: ["553198237821", "553198273123"],
    dependentes: [
    {
      nome: 'Sara Silva',
      parentesco: 'Filha',
      dataNascimento: '20/03/2011'
    },
    {
      nome: 'Ana Maria',
      parentesco: 'Filha',
      dataNascimento: '18/03/2009'
    }
  ],

  saldo: 100,

  depositar: function(valor)
  {
    this.saldo += valor
  }
}

let relatorio = "";

//coloca a let info "in"(dentro) do cliente
for ( let info in cliente ) {

//                       typeof ira buscar o tipo
    if(typeof cliente[info] === "object" || typeof cliente[info] === "function"){ 

        continue

    } else {
        // Quebra de linhas:
        relatorio += `
        ${[info]} ==> ${cliente[info]}
        `
    }
}

console.log(typeof cliente.depositar)// Retorna Function
console.log(relatorio)

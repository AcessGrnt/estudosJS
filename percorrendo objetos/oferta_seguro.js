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

let valorSeguro = 300;

function oferecerSeguro (obj){
//            object.keys retornara as chaves do objeto! Ex: nome, idade e etc...
    const propsClientes = Object.keys(cliente);

    if(propsClientes.includes("dependentes")){
        console.log(`Oferta de seguro de vida para ${obj.nome}, valor do seguro: R$${valorSeguro}`)
    }
}

//         Object.values retornara os valores das chaves! Ex: "João", 18 e etc...
console.log(Object.values(cliente))

//      Transforma os indices do objeto em arrays
console.log(Object.entries(cliente))

oferecerSeguro(cliente)

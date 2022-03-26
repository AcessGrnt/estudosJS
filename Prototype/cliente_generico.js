function cliente(nome, cpf, email, saldo) {
  this.nome = nome;
  this.cpf = cpf;
  this.email = email;
  this.saldo = saldo;
  this.depositar = function (valor) {
    this.saldo += valor;
  };
}

//         A função new criara um novo cliente chamado João
const joao = new cliente("João","21831207023781","rufllex@gmail.com", 100);

console.log(João);


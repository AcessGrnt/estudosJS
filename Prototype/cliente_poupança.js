function cliente (nome,cpf,email,saldo) {
    this.nome = nome;
    this.cpf = cpf;
    this.email = email;
    this.saldo = saldo;
    this.depositar = function(valor) {
        this.saldo += valor;
    };
}

function clientepoupanca (nome,cpf,email,saldo,saldopoup) {
    // o .call irá chamar os parametros da função desejada
    cliente.call(this,nome,cpf,email,saldo)
    this.saldopoup = saldopoup;
}

const joao = new clientepoupanca("João", "67812678126783", "rufllez@gmail.com", 100,200)

console.log(joao)

clientepoupanca.prototype.depositarpoup = function(valor) {
    this.saldopoup += valor;
}

joao.depositarpoup(30);

console.log(joao.saldopoup)
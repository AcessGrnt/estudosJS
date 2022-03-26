class cliente {
    constructor(nome, email, cpf, saldo){
        this.nome = nome;
        this.email = email;
        this.cpf = cpf;
        this.saldo = saldo;
    }
    
    depositar(valor) {
        this.saldo += valor;
    }

    exibirSaldo() {
        console.log(this.saldo)
    }
}

class clientePoup extends cliente {
    constructor(nome, email, cpf, saldo, saldoPoupanca){
    super (nome, email, cpf, saldo)
    this.saldoPoupanca = saldoPoupanca;
  }
    depositarPoupanca(valor){
        this.saldoPoupanca += valor;
    }
}

const joao = new clientePoup("João","joao@gmail.com","897123789123", 100, 200);

joao.depositar(60);
joao.depositarPoupanca(200);

console.log(joao)
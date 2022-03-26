class cliente {
    constructor(nome,email,cpf,saldo) {
        this.nome = nome;
        this.email = email;
        this.cpf = cpf;
        this.saldo = saldo;
    }

    depositar(valor){ 
        this.saldo += valor;
    }

    exibirsaldo() {
        console.log(this.saldo)
    }
}

class clientePoupanca extends cliente {
    constructor(nome,email,cpf,saldo,saldoPoupanca) {
        super(nome,email,cpf,saldo);
        this.saldoPoupanca = saldoPoupanca;
    }

    depositarPoupanca(valor){
        this.saldoPoupanca += valor;
    }
}

const joao = new clientePoupanca("João", "joao@example.com", "78901237890", 100, 200);

console.log(joao)

joao.depositar(50)
joao.depositarPoupanca(50)

console.log(joao)


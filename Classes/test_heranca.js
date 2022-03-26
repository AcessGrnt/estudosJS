// Apenas irei replicar o codigo para fixar

class cliente {
    constructor(nome, email, cpf, saldo){
        this.nome = nome;
        this.email = email;
        this.cpf = cpf;
        this.saldo = saldo;
    }

    depositar(valor){
        this.saldo += valor;
    }

    exibirSaldo() {
        console.log(this.saldo);
    }
}

class clientePoupanca extends cliente {
    constructor(nome, email, cpf, saldo, saldoPoupanca) {
        super(nome, email, cpf, saldo)
        this.saldoPoupanca = saldoPoupanca;
    }

    depositarPoupanca(valor) {
        this.saldoPoupanca += valor;
    }
}

const joao = new clientePoupanca("João", "joao@gmail.com", "78901237890312", 100, 200);

joao.depositar(-50);
joao.depositarPoupanca(200);


console.log(joao)

// Feito :)
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

const joao = new cliente("João", "ruflz@gmail.com", "1237866213678", 100);

joao.depositar(400)

console.log(joao)
function cliente (nome,cpf,email,saldo) {
    this.nome = nome;
    this.cpf = cpf;
    this.email = email;
    this.saldo = saldo;
    this.depositar = function (valor) {
        this.saldo += valor;
    }
}

const joao = new cliente("João", "89898129239", "rufllz@gmail.com", 100)

function clientepoupanca(nome, cpf, email, saldo, saldopoup) {
    cliente.call(this, nome, cpf, email, saldo)
    this.saldopoup = saldopoup;
}

const pedro = new cliente("Pedro", "8989812923219", "riza@gmail.com", 100, 200)

clientepoupanca.prototype.depositarpoup = function (valor) {
    this.saldopoup += valor;
}

// Vai verificar se joão e predro tem uma propriedade chamada saldopoup!
console.log(joao.hasOwnProperty("saldopoup"))
console.log(pedro.hasOwnProperty("saldopoup"))

// Explicação a baixo
console.log(joao instanceof cliente)

// Vai verificar o tipo de joão e pedro!
console.log(typeof joao)
console.log(typeof pedro)

///////////////////////////////////////////////////////////////////////////////////////////////////////
//    instaceof(instancia de:) retornara true ou false, se pedro é uma instancia de clientepoupanca
/**/             console.log(pedro instanceof clientepoupanca)
//////////////////////////////////////////////////////////////////

// Pesquisar depois!!!
/**/ console.log(Function.prototype.isPrototypeOf(cliente))

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// Retornara se o constructor de "cliente" é igual a uma função! (Posso verificar usando o prototype)
/**/        console.log(cliente.constructor === Function)
/////////////////////////////////////////////////////////////////
class Pessoa {
    constructor(nome,sobrenome,cpf,email){
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.cpf = cpf;
        this.email = email;
    }

    exibirnomecompleto () {
        console.log(`${this.nome} ${this.sobrenome}`)
    }
}

// A classe programador irá herdar as funções da "Pessoa"
class Programador extends Pessoa {
    constructor(nome,sobrenome,cpf,email,linguagem) {

        // O super é como se fosse um .call!
        super(nome,sobrenome,cpf,email)
        
        this.linguagem = linguagem;
    }
}
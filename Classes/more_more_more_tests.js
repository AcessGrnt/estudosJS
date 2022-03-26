function pessoa(nome,email){
    this.nome = nome;
    this.email = email;
    this.imprimeNomeEmail = function(){
        console.log(`Nome: ${this.nome}, Email: ${this.email}`);
    }
}

const pessoa1 = new pessoa("João", "joao@gmail.com");
const pessoa2 = new pessoa("Pedro", "pedro@gmail.com");

pessoa1.imprimeNomeEmail()
pessoa2.imprimeNomeEmail()
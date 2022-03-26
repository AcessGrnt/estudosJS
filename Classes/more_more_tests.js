const pessoa = {
    nome: "Joao",
    email: "joao@gmail.com",
    imprimeNome: function(){
        console.log(`${this.nome}`)
    }
}

pessoa.imprimeNome()
///////////////////////////////////////////////////////////////////////////


function imprimeNomeEemail() {
    console.log(`Nome: ${this.nome}, Email: ${this.email}`)
}

const pessoa1 = {
    nome: "Pedro",
    email: "pedro@gmail.com",
    imprimeInfo: imprimeNomeEemail
}

const pessoa2 = {
    nome: "José",
    email: "josé@gmail.com",
    imprimeInfo: imprimeNomeEemail
}

pessoa1.imprimeInfo()
pessoa2.imprimeInfo()

////////////////////////////////////////////////////////////////
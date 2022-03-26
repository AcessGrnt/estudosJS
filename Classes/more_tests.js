const pessoa = {
    nome: "João",
    email: "ruajs@gmail.com",

    imprimeNome: function(){
        console.log(`${pessoa.nome}`)
    }
}

pessoa.imprimeNome()

function imprimeNomeEemail () {
    console.log(`nome: ${this.nome}, email: ${this.email}`)
}

const pessoa1 = {
    nome: "Ana",
    email: "wadj@gmail.com",
    imprimeInfo: imprimeNomeEemail
}

const pessoa2 = {
    nome: "Pedro",
    email: "pedro@gmail.com",
    imprimeInfo: imprimeNomeEemail
}

const pessoa3 = {
    nome: "José",
    email: "jos@gmail.com",
    imprimeInfo: imprimeNomeEemail
}

pessoa1.imprimeInfo()
pessoa2.imprimeInfo()
pessoa3.imprimeInfo()

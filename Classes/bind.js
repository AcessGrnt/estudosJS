const personagem = {
    nome: "Os kindred",
    apresentar: function(){
        return `O personagem é: ${this.nome}`;
    }
}

const personagemGenerico = personagem.apresentar;
console.log(personagemGenerico()) // Irá retornar undefined

////////////////
// solução

personagemDefinido = personagemGenerico.bind(personagem)

console.log(personagemDefinido())


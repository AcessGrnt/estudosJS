const pessoa = {
    nome:"Peter Parker",
    dataNascimento:"25/05/1989",
    carteiraIdentidade:"999362-1",
    email:"peterparker@email.com",
    telefone:"+552711112222",
    cidade:"Cariacica",
    estado:"ES"
 }

 pessoa.cpf = "11111111122"

 delete pessoa.cidade

 pessoa.cidade = "São Jorge" // Nos objetos não é possivel mudar a posição da lista!!

 console.log(pessoa)
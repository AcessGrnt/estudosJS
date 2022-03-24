const objPersonagem = {
    nome: "Gandalf",
    classe: "mago",
    nivel: "20"
   }

   //         Criara um objeto, pegando como base o Objeto colocado
   const objPersonagem2 = Object.create(objPersonagem)
   
   //        Aqui estou alterando o nome apenas do meu objeto criado agora
   objPersonagem2.nome = "Gandalf, o Cinzento"

   //        Por outro lado se eu declarar essa const abaixo, qualquer alteração em objPersonagme2,sera
   //                       escrito no objeto primario
   const objPersonagem2 = objPersonagem
   
   console.log(objPersonagem.nome) //Gandalf
   console.log(objPersonagem2.nome) //Gandalf, o Cinzento
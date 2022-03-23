const objPersonagem = {
    nome: "Gandalf",
    classe: "mago",
    nivel: "20",
    aliado: {
      nome: "Saruman",
      classe: "mago"
    },
    status: "desaparecido"
   }

   // posso ultilizar o comando delete

   delete objPersonagem.aliado // Isso removera o objeto aliado

   console.log(objPersonagem.aliado) //undefined
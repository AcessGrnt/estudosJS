const cliente = {
    nome: "João",
    dataNascimento: "27/10/2003",
    CPF: "2167127-12",
    Email: "joao@example.com",
    telefone: ["319852528282","31872626267"],
    cidade: "Belo horizonte",
    estado: "MG",
    dependentes: [{
        nome: "Luisa",
        idade: "22"
    }, {
        nome: "Maria",
        idade: "21"
    }]
}
 // [] = array       {} = objeto     push = adicionar a um objeto algo
cliente.dependentes.push({
    nome: "Luis",
    idade: "23"
})

delete cliente.estado 


console.log(cliente);



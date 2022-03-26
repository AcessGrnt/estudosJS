const catalogo = {
    "editora": "Saraiva",
    "catalogo": [{
        "id": "1",
        "Titulo": "Amanhã",
        "Autor": "Joseph",
        "categoria": "Poesia",
        "versões": ["e-book","Impresso"]
    }]
}
////////////////////////////////////////////////////////////////////////////////
//         Essa função irá mostrar as propriedades dela no Descriptor
//
//     Veja que métodos que começam com getOwnProperty… funcionam apenas 
//             em propriedades “próprias” do objeto.
/**/     console.log(Object.getOwnPropertyDescriptor(catalogo, "editora"))
//
/////////////////////////////////////////////////////////////////
// parametros e funções


//function soma(numero1, numero2) {
//   return  numero1 + numero2;
//}

//console.log(soma(231, -231))
//console.log(soma(1314, 312))

// ordem dos parametros

function nomeIdade(nome, idade) {
    return `meu nome é ${nome} e minha idade é ${idade}`
}

//console.log(nomeIdade('João', 17))

function soma(numero1, numero2) {
    return numero1 + numero2;
}

function mutiplica(numero1, numero2) {
    return numero1 + numero2;
}

console.log(mutiplica(soma(4, 5), soma(2, 3)))

///////////////////////////////////////////////////////////////
function cumprimentar(){
    return 'Oi gente!'
   }
   
   function cumprimentaPessoa(nomePessoa) {
    console.log(`${cumprimentar()} Meu nome é ${nomePessoa}`)
   }
   
   cumprimentaPessoa('João') // “Oi gente! Meu nome é João”



//////////////////////////////////////////////////////////////////////////
   //testes   Como nenhum parâmetro foi passado, a saída do console será undefined.
   function comParametro(param) {
    console.log(param)
}
comParametro()
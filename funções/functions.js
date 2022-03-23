//let x = "";
//console.log(x)

//x = "oi";


// 1) Declarar a função

//         string
function x(texto) {
    console.log(texto)
}

// 2) Executa a função (1 ou mais vezes!)

x(soma());
x("Tudo bem?");

// Tres formas de escrever funções

///////////////////////////////////////

function soma() {
    return 2 + 2;
}

console.log(soma());

///////////////////////////////////////

var idadeMinima = 18;
var idadeDoCliente = 16;

if (idadeDoCliente === idadeMinima) {
    console.log("Cerveja")
} else {
    console.error("Suco")
}

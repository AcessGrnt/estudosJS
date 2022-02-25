const senhaRegistrada = "12345";
const senhaTentada = "1324";

if (senhaTentada === senhaRegistrada) {
    console.log("O acesso foi liberado")
} else {
    console.error("A senha está incorreta")
}

const discordUsername = "bosque#0013";
const discordDigitado = "bosque#0012";

if (discordDigitado === discordUsername) {
    console.log("Pedido de amizade enviado")
} else {
    console.error("O usuario digitado está incorreto")
}

/////////////////////////////////////////////////////////////////////////

let nome = "João";
let idade = "2021-2004";
let bebidaMaior = "cerveja";
let bebidaMenor = "suco";

const resultado = `${nome} solicitou a bebida ${idade >= 18 ? bebidaMaior : bebidaMenor}`
console.log(resultado)
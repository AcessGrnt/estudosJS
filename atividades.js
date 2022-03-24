/////////////////////////////////////////////////////////////////
//Atividades
//////////////////////

// 1 =
function soma(a, b) {
    console.log(`A soma dos valores é: ${a + b}`)
    console.log(`A subtração dos valores é: ${a - b}`)
    console.log(`A mutiplicação dos valores é: ${a * b}`)
    console.log(`A divisão dos valores é: ${a / b}`)
}
soma(3,2) // Não use o console.log se tiver definido isso

//////////////////////////////////////////////////////////////////

// 2 =

function triangulo(a,b,c) {
    if (a == b && a ==c && b == c) {

        console.log("Seu triangulo é Equilatero")

    } else if (a == b || b == c || c == a) {

        console.log("Seu triangulo é Isocelis")

    } else {

        console.log("Seu triangulo é Escaleno")

    }
} 
triangulo(3,5,1)



//////////////////////////////////////////////////////////////////

// 3 =

function bas(base, expoente){
    return base ** expoente
}

console.log(bas(5,5))

//////////////////////////////////////////////////////////////////

// 4 =

function dividindo(divden, divsor) {
    let quo = (divden/divsor)
    let rest = (divden%divsor)
    console.log("Divisão: ",quo, " Resto: ",rest)
}
dividindo(12,8)

//////////////////////////////////////////////////////////////////

// 5 =

function din(dinheiro) {
    console.log(`R$${dinheiro.toFixed(2)}`)
}
din(0.30000000000000004)

//////////////////////////////////////////////////////////////////

// 6 =

function capt(capInic, taxJuro, tempApli) {
    let jurosSimples = (capInic * taxJuro * tempApli);
    console.log(jurosSimples)
}
capt(1200, 0.02, 14)


function capt2(capInic, taxJuro, tempApli){
    this.montante = capInic * (1 + taxJuro) ** tempApli
    console.log(this.montante)
}

capt2(1400,0.07,2)

//////////////////////////////////////////////////////////////////

// 7=

function bhask(ax2,bx,c){
    let resultados = []

    //              8              
    let delta = ((bx ** 2) - (4 * ax2 * c))
    if(delta < 0){
        return "Delta é negativo"
    } 
    let x1 = (-bx + Math.sqrt(delta))/(2*ax2)
    let x2 = (-bx - Math.sqrt(delta))/(2*ax2)
    resultados.push(x1)
    resultados.push(x2)
    return resultados  
}

console.log(bhask(1,2,-15))

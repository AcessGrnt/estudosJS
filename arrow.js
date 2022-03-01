// arrow novo comando

// Function
function salve() {
    return `Meu nome é ${nome}`;
}

// Arrow
const apresentarArrow = nome => `Meu nome é ${nome}`;
const soma = (num1, num2) => num1 + num2;

// Arrow com mais de uma 1 linha de instrução
const somaNumerosPequenos = (numer1, numer2) => numer1 + numer2; {
    if (numer1 || numer2 > 10) {
        return "somente numeros de 1 a 9"
    } else {
        return numer1 + numer2
    }
}
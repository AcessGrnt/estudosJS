||: Operador “ou”, retorna true caso uma condição seja válida;
&&: Operador “e”, retorna true somente se todas as condições forem válidas;
!= e !==: Operadores “não igual” e “estritamente não igual”, utilizados para comparação, da mesma forma que == e === retornam true ou false

------------------------------------------------------------------------------------------------------


Atribuição	x = y	x = y
Atribuição de adição	x += y	x = x + y
Atribuição de subtração	x -= y	x = x - y
Atribuição de multiplicação	x *= y	x = x * y
Atribuição de divisão	x /= y	x = x / y
Atribuição de resto	x %= y	x = x % y
Atribuição exponencial	x **= y	x = x ** y
Atribuição bit-a-bit por deslocamento á esquerda	x <<= y	x = x << y
Atribuição bit-a-bit por deslocamento á direita	x >>= y	x = x >> y
Atribuiçãode bit-a-bit deslocamento á direita não assinado	x >>>= y	x = x >>> y
Atribuição AND bit-a-bit	x &= y	x = x & y
Atribuição XOR bit-a-bit	x ^= y	x = x ^ y
Atribuição OR bit-a-bit	x |= y	x = x | y

------------------------------------------------------------------------------------------------------

COMPARAÇÃO

Igual (==)	Retorna verdadeiro caso os operandos sejam iguais.	3 == var1
"3" == var1

3 == '3'
Não igual (!=)	Retorna verdadeiro caso os operandos não sejam iguais.	var1 != 4
var2 != "3"
Estritamente igual (===)	Retorna verdadeiro caso os operandos sejam iguais e do mesmo tipo. Veja também Object.is e igualdade em JS (en-US).	3 === var1
Estritamente não igual (!==)	Retorna verdadeiro caso os operandos não sejam iguais e/ou não sejam do mesmo tipo.	var1 !== "3"
3 !== '3'
Maior que (>)	Retorna verdadeiro caso o operando da esquerda seja maior que o da direita.	var2 > var1
"12" > 2
Maior que ou igual (>=)	Retorna verdadeiro caso o operando da esquerda seja maior ou igual ao da direita.	var2 >= var1
var1 >= 3
Menor que (<)	Retorna verdadeiro caso o operando da esquerda seja menor que o da direita.	var1 < var2
"12" < "2"
Menor que ou igual (<=)	Retorna verdadeiro caso o operando da esquerda seja menor ou igual ao da direita.	var1 <= var2
var2 <= 5

------------------------------------------------------------------------------------------------------

Arimeticos

Módulo (%)	Operador binário. Retorna o inteiro restante da divisão dos dois operandos.	12 % 5 retorna 2.
Incremento (++)	Operador unário. Adiciona um ao seu operando. Se usado como operador prefixado (++x), retorna o valor de seu operando após a adição. Se usado como operador pósfixado (x++), retorna o valor de seu operando antes da adição.	Se x é 3, então ++x define x como 4 e retorna 4, enquanto x++ retorna 3 e, somente então, define x como 4.
Decremento (--)	Operador unário. Subtrai um de seu operando. O valor de retorno é análogo àquele do operador de incremento.	Se x é 3, então --x define x como 2 e retorna 2, enquanto x-- retorna 3 e, somente então, define x como 2.
Negação (-)	Operador unário. Retorna a negação de seu operando.	
Se x é 3, então -x retorna -3.

Adição (+)	Operador unário. Tenta converter o operando em um número, sempre que possível.	
+"3" retorna 3.

+true retorna 1.

Operador de exponenciação (**) 	Calcula a base elevada á potência do expoente, que é, baseexpoente	
2 ** 3 retorna 8.

10 ** -1 retorna 0.1

------------------------------------------------------------------------------------------------------

Bit a Bit

AND	a & b	Retorna um 1 para cada posição em que os bits da posição correspondente de ambos operandos sejam uns.
OR	a | b	Retorna um 0 para cada posição em que os bits da posição correspondente de  ambos os operandos sejam zeros.
XOR	a ^ b	
Retorna um 0 para cada posição em que os bits da posição correspondente são os mesmos.

[Retorna um 1 para cada posição em que os bits da posição correspondente sejam diferentes.]

NOT	~ a	Inverte os bits do operando.
Deslocamento à esquerda	a << b	Desloca a em representação binária b bits à esquerda, preenchendo com zeros à direita.
Deslocamento à direita com propagação de sinal	a >> b	Desloca a em representação binária b bits à direita, descartando bits excedentes.
Deslocamento à direita com preenchimento zero	a >>> b	Desloca a em representação binária b bits à direita, descartando bits excedentes e preenchendo com zeros à esquerda.

------------------------------------------------------------------------------------------------------

EXEMPLOS

var a1 =  true && true;     // t && t retorna true
var a2 =  true && false;    // t && f retorna false
var a3 = false && true;     // f && t retorna false
var a4 = false && (3 == 4); // f && f retorna false
var a5 = "Gato" && "Cão";   // t && t retorna Cão
var a6 = false && "Gato";   // f && t retorna false
var a7 = "Gato" && false;   // t && f retorna false

var o1 =  true || true;     // t || t retorna true
var o2 = false || true;     // f || t retorna true
var o3 =  true || false;    // t || f retorna true
var o4 = false || (3 == 4); // f || f retorna false
var o5 = "Gato" || "Cão";   // t || t retorna Gato
var o6 = false || "Gato";   // f || t retorna Gato
var o7 = "Gato" || false;   // t || f retorna Gato

var n1 = !true;   // !t retorna false
var n2 = !false;  // !f retorna true
var n3 = !"Gato"; // !t retorna false
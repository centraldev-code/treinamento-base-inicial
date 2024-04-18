let nome = "Marcelo"; // variavel string (texto)
let sobreNome = "Barros"
let helloWorld = "Hello World!"
let numero = 12; // variavel number
let resultado = true; //variavel boolean true ou false

console.log(!resultado);

if(3 != 4) { // ! =
    console.log("verdadeiro")
} else {
    console.log("falso")
}


console.log(typeof nome);
console.log(typeof numero);
console.log(typeof resultado);

// Operador de incremento ++ e --
console.log(numero--); // 12
console.log(numero);  // 11

let nota1 = 7.5;
let nota2 = 8.8;
let nota3 = 6.9;
let nota4 = 6.6;

let media = 7.0;

let mediaFinal = (nota1 + nota2 + nota3 + nota4) / 4;
console.log("A media final é : " + mediaFinal)
// == igual 
// === (3=) igual e do mesmo tipo
// > maior que
// < menor que
// <= maior e igual > =
// >= menor e igual 
// != diferente que
if(mediaFinal >= media) {
    console.log("Aprovado!")
} else {
    console.log("Reprovado")
}


// Java
// string " "
// int  123 
// doublo 12.2

/*
* Isso é um comentario de  
* multiplas linhas
*
*/

// O Console Log imprime uma informação no console do windows
//console.log("Hello World!");
// As Chaves "{}" representão um bloco de codigo
{ 

}

a = "a";
b = "";
let c = null;
const TEST = "Aula";
// As contantes não podem ser alteradas
//TEST = "123"

c = "Marcelo"

console.log(nome + " " + sobreNome)

console.log(c);

nome = "Hello World";
console.log(nome)

valor1 = 5;
valor2 = 2;
console.log("Valor 1 = " + valor1)
console.log("Valor 2 = " + valor2)
// Soma (+)
resultado = valor1 + valor2
console.log("O resultado da soma é = " + resultado)
// Subtração (-)
resultado = valor1 - valor2
console.log("O resultado da subtração é = " + resultado)
// Multiplicação (*)
resultado = valor1 * valor2
console.log("O resultado da multiplicação é = " + resultado)
// Divisão (/)
resultado = valor1 / valor2
console.log("O resultado da divisão é = " + resultado)
// Resto da Divisão (%)
resultado = valor1 % valor2
console.log("O resultado do resto da divisão é = " + resultado)
// Descobrir se um valor inteiro é par
valor = 516465461

resultado = valor % 2

if(resultado == 0) {
    console.log("O resultado, se o valor for é par = " + resultado)
} else {
    console.log("O resultado, se o valor é 0 é impar = " + resultado)
}




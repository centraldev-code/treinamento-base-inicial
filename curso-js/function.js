function escreverNoConsole(nome, sobreNome) {
    console.log("Nome: " + nome + " " + sobreNome)
}

escreverNoConsole("Marcelo", "Barros");
escreverNoConsole("Adriano", "Souza");
escreverNoConsole("João", "Ricardo");
escreverNoConsole("Vinicius", "Queiroz");
escreverNoConsole("Felipe", "Oliveira");

function soma(valor1, valor2) {
    return valor1 + valor2
}
let resultado = soma(3, 5);

console.log(resultado);

function cumprimentar(nome) {
    return "Olá, " + nome + "!"
}
function cumprimentar2(nome) {
    const saudacao = "Olá, ";
    return [saudacao, nome].join(', ').concat("!")
}

let texto = cumprimentar("Marcelo");
console.log(texto);
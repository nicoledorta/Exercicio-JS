/*Exercício 2: Verificação de dia da semana
Escreva um programa que solicita ao usuário um número de 1 a 7 representando um dia da
semana e exibe o nome correspondente a esse dia. Considere que 1 representa segunda-feira,
2 representa terça-feira e assim por diante.*/

//1 passo: solicitar a escolha de um número de 1 a 7 (prompt);
//2 passo: exibe o dia da semana correspondente ao número escolhido (if);

let diaSemana = prompt("Digite um número de 1 a 7: ");

if (diaSemana == 1) {
    console.log("Segunda-feira");
} 
else if (diaSemana == 2) {
    console.log("Terça-feira");
} 
else if (diaSemana == 3) {
    console.log("Quarta-feira");
} 
else if (diaSemana == 4) {
    console.log("Quinta-feira");
} 
else if (diaSemana == 5) {
    console.log("Sexta-feira");
} 
else if (diaSemana == 6) {
    console.log("Sábado");
} 
else if (diaSemana == 7) {
    console.log("Domingo");
}
/*Exercício 3: Ímpar ou par
Faça um programa que receba um número do usuário e informe se este número é par ou
ímpar.*/

//1 passo: solicite um número de 1 a 10
// 2 passo: exibir mensagem se o número é ímpar ou par

let numero = prompt("Digite um número: ");

if (numero % 2 == 0) {
    console.log("Número par")
} 
else {
    console.log("número impar")
}


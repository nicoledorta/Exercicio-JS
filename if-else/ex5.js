/*Exercício 5: Verificação de números em ordem crescente
Escreva um programa que solicita três números ao usuário e verifica se eles estão em ordem
crescente. Exibindo uma mensagem indicando se os números estão em ordem crescente ou
não.*/

//1 passo: solicitar tres números diferentes
//2 passo: exibir mensagem se os números são crescentes ou não

let num1 = prompt("Digite um número: ");

let num2 = prompt("Digite outro número: ");

let num3 = prompt("Digite mais um número: ");

if (num1 < num2 && num2 < num3) {
    console.log("Os números estão em ordem crescente");
}
else {
    console.log("Os números estão em ordem decrescente");
}

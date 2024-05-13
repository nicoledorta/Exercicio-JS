/*Exercício 6: Verificação de idade
Escreva um programa que solicita o ano de nascimento de uma pessoa e verifica se ela é maior
de 18 anos. Exiba uma mensagem indicando se a pessoa é maior de idade ou não.*/

//1 passo: solicitar o ano de nascimento do usuário
//2 passo: verificar se é maior de 18 anos
//3 passo: exibir mensagem indicando se a pessoa é maior de idade ou não

let idade = prompt("Digite o seu ano de nascimento: ");

if (idade <2006) {
    console.log("Você é maior de idade")
}
else {
    console.log ("Você é menor de idade")
}
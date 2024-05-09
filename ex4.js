/*Exercício 4: Notas escolares
Faça um programa que receba 4 notas de um aluno, calcule e imprima a média aritmética das
notas e a mensagem de APROVADO para média superior ou igual a 7,0 RECUPERAÇÃO para
notas entre 5.0 e 7,0 ou a mensagem de REPROVADO para média inferior a 5,0.*/

//1 passo: digitar 4 notas de um aluno
//2 passo: calcular a média aritmética das notas
//3 passo: exibir mensagem se o aluno foi aprovado ou não (em recuperacao ou reprovado) de acordo com sua média

let nota1 = parseFloat(prompt("Digite a primeira nota do aluno: ")); 

let nota2 = parseFloat(prompt("Digite a segunda nota do aluno: "));

let nota3 = parseFloat(prompt("Digite a terceira nota do aluno: ")); 

let nota4 = parseFloat(prompt("Digite a quarta nota do aluno: ")); 

let media = (nota1 + nota2 + nota3 + nota4) / 4;

if (media >= 7.0) {
    console.log("Aluno APROVADO");
} 
else if (media >4 && media <7.0) {
    console.log("Aluno em RECUPERAÇÃO");
}
else {
    console.log("Aluno REPROVADO");
}
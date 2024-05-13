//Apresentar uma mensagem na tela, pop-up
alert("Hello World!");

console.log("Hello World!");

//Escreva um programa que solicite o nome do usuário
//e lhe de boas vindas, exibindo uma mensagem pelo console

//prompt() -> recebe uma entrada digitada
let nome = prompt("Olá, digite o seu nome: ");

//Concatenação -> juntar texto
console.log("Seja bem-vindo " + nome + "!!!");

let pontos = 100;

//parseInt() -> transforma o que está entre () em número inteiro.
let bonus = parseInt(prompt("Quantos pontos voce deseja somar?"));

//Adição -> num1 + num2
//Subtração -> num1 - num2
//Multiplicação -> num1 * num2
//Divisão -> num1 / num2

let totalPontos = pontos + bonus;

console.log(totalPontos);


//camelCase - js
let notaAluno = parseFloat(prompt("Digite a nota do aluno: "));
console.log(notaAluno);


//== compara valor / ex: 1 == "1" (true)
//=== compara tipo e valor / ex: 1 === "1" (false)

//https://dontpad.com/lista-if


//parseFloat -> Transforma o que está entre () em número decimal (utilizando . no lugar da ,)
let produto1 = parseFloat(prompt("Digite o valor do produto: "));

let produto2 = parseFloat(prompt("Digite o valor do segundo produto: "));

let soma = produto1 + produto2;

console.log(soma);
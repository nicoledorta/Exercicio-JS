/*Exercício 1: Verificação de login
Escreva um programa que solicita ao usuário um nome de usuário e uma senha. Verifique se o
nome de usuário é "admin" e a senha é "senha123". Exiba uma mensagem indicando se o login
foi bem-sucedido ou não.*/

//1 passo: solicitar o nome do usuário (prompt);
//2 passo: solicitar a senha (prompt);
//3 passo: verificar SE o nome do usuário e senha são os que foram pedidos (if);
//4 passo: Exibir mensagem de o login foi bem-sucedido ou não:
//CASO SIM -> Login bem-sucedido
//CASO NÃO -> Usuário ou senha incorretos

let username = prompt("Digite um nome de usuário: ");

let senha = prompt("Digite a senha: ");

if (username == "admin" && senha == "senha123") {
    console.log("Login bem-sucedido!");
} else {
    console.log("Usuário ou senha incorretos");
}
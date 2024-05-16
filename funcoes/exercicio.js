// construir um menu em que é possível escolher um exercício entre os exercícios anteriores, para ser executado. 
// Faça com que o menu repita a sua execução, disponibilize as opções pro usuário, até que seja digitado "sair".

// \n : quebra de linha


//if-else
function exercicioPar() {
    let numero = prompt("Digite um número: ");

    if (numero % 2 == 0) {
        console.log("Número par")
    }
    else {
        console.log("número impar")
    }
}

function boletim() {
    let nota1 = parseFloat(prompt("Digite a primeira nota do aluno: "));

    let nota2 = parseFloat(prompt("Digite a segunda nota do aluno: "));

    let nota3 = parseFloat(prompt("Digite a terceira nota do aluno: "));

    let nota4 = parseFloat(prompt("Digite a quarta nota do aluno: "));

    let media = (nota1 + nota2 + nota3 + nota4) / 4;

    if (media >= 7.0) {
        console.log("Aluno APROVADO");
    }
    else if (media > 4 && media < 7.0) {
        console.log("Aluno em RECUPERAÇÃO");
    }
    else {
        console.log("Aluno REPROVADO");
    }
}

function desconto() {
    let valorTotal = parseFloat(prompt("Digite o valor total da compra: "));

    let desconto;

    if (valorTotal <= 100) {
        desconto = 0;
        console.log("O valor de desconto foi: " + desconto);
    }
    else if (valorTotal <= 200) {
        desconto = 0.1;
        console.log("O valor de desconto foi: " + (desconto * 100) + "%");
    }
    else {
        desconto = 0.2;
        console.log("O valor de desconto foi: " + (desconto * 100) + "%");
    }

    let valorFinal = valorTotal - (valorTotal * desconto);

    console.log("O valor final da compra com o desconto é de: R$" + valorFinal.toFixed(2));
}

//loop

function tabuada() {
    let numero = parseInt(prompt("Digite um número e veja sua tabuada até o 10: "));


    if (!isNaN(numero)) {
        for (let cont = 1; cont <= 10; cont++) {
            console.log(numero + "X" + cont + " = " + (numero * cont));
        }
    }
    else {
        console.log("Número invalido. Por favor, digite um número válido.")
    }

    console.log(isNaN("Hello World"));
    console.log(isNaN(123));
}

function fibonacci() {
    let fib1 = 1;
    let fib2 = 1;

    console.log("OS primeiros 10 números da sequência de Fibonacci são: ");
    console.log(fib1);
    console.log(fib2);

    for (let i = 2; i < 10; i++) {
        let nextFib = fib1 + fib2;
        console.log(nextFib);

        fib1 = fib2;
        fib2 = nextFib;
    }
}

function idade() {
    let idade = parseInt(prompt("Informe sua idade: "));

    while (idade < 18) {
        idade = parseInt(prompt("Você é menor de idade. Digite sua idade novamente: "));
    }

    console.log("Você é maior de idade. Sua idade é: " + idade);
}

let opcao = window.prompt("MENU\nDigite a opção desejada:\n\n1- Exercicio par ou ímpar\n2- Exercício boletim do aluno\n3- Exercício de descontos\n4- Exercício de tabuada\n5- Exercício da sequência de Fibonacci\n6- Exercício da maioridade\n Digite 'sair' para encerrar")

switch (opcao) {
    case "1":
        exercicioPar()
        break;

    default:
        break;

}

switch (opcao) {
    case "2":
        boletim()
        break;

    default:
        break;

}

switch (opcao) {
    case "3":
        desconto()
        break;

    default:
        break;

}

switch (opcao) {
    case "4":
        tabuada()
        break;

    default:
        break;

}

switch (opcao) {
    case "5":
        fibonacci()
        break;

    default:
        break;

}

switch (opcao) {
    case "6":
        idade()
        break;

    default:
        break;

}




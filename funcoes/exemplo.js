// FUNÇÕES

// de bom dia para alguém 

/*let nomePessoa = prompt("Digite o seu nome: ");

window.alert("Bom dia, " + nomePessoa + "!");

function saudacao() { // define um nome e coisas a serem executadas dentro dele
    let nomePessoa = prompt("Digite o seu nome: ")

    let horaAtual = new Date().getHours()

    if (horaAtual > 6 && horaAtual < 13) {
        window.alert("Bom dia, " + nomePessoa + "!")
    }
    else if (horaAtual >= 13 && horaAtual < 18) {
        window.alert("Boa tarde, " + nomePessoa + "!")
    }
    else {
        window.alert("Boa noite, " + nomePessoa + "!")
    }
}

saudacao()

function somar (num1, num2, num3) {
    let soma = num1 + num2 + num3 // variável chamada soma
    
    return soma // relaciona o resultado com a variável
}

let resultado = somar(5,6,9)

console.log("O resultado é: " + resultado);*/

// são funções (método):
//window.alert("jdjdjd")
//console.log("jsjkks")
//window.prompt("jskkksk")

// OBJETO -> conjunto de propriedades (conjunto entre {} e valores (x=y))

let professor = {
    nome: "Thiago",
    sobrenome: "Nascimento",
    idade: 25
}

professor.nome = prompt("Digite o nome:")
professor.sobrenome = prompt("Digite o sobrenome:")

// For - loop contato

/*contando do 0 ao 10
for(let num = 0; num <= 10; num++){
    console.log(num);
}

contagem regressiva
for(let cont = 10; cont >= 0; cont--){
    console.log(cont);
}*/

//um é num e outro cont para não repetir o nome da variável

//While - repete >>até que<< 

/*let salario = 1000

while( salario < 5000){
    salario += 100;

    console.log("O salário ainda é R$" + salario);
}*/

//Do While - loop condicional

/*let saldo = 1000;

do{
    console.log("Esse é o saldo: " + saldo);
    saldo += 100;
}
while(saldo < 5100);*/

//Array
// para cada = forEach -> percorre uma lista

// elementos com suas posicoes contadas a partir de 0. ex.: Pitaya está na posicao 3
let frutas = ["Banana", "Laranja", "Maçã", "Pitaya", "Melancia", "Caju"]

//console.log(frutas[3]);

/*frutas.forEach(fruta => {
    console.log("A fruta é: " + fruta)
});*/

for(let indice = 0; indice < frutas.length; indice++){ //indice =+ 2 (2 em 2 etc)
    console.log(frutas[indice]);
    if(frutas[indice] == "Pitaya"){
        console.log("Eu gosto de: " + frutas[indice]);
    }
}




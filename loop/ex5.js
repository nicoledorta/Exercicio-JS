// 5. Imprimir os primeiros 10 números da sequência de Fibonacci.
// "1,1,2,3,5,8,13,21,34,55"
// fn= fn − 1 + fn − 2

let fib1 = 1;
let fib2 = 1;

console.log("OS primeiros 10 números da sequência de Fibonacci são: ");
console.log(fib1);
console.log(fib2);

//Itera para calcular e imprimir os próximos 8 números da sequencia.
for (let i = 2; i < 10; i++) {
    let nextFib = fib1 + fib2;
    console.log(nextFib);

    //Atualizar os valores de fib1 e fib2 para os próximos cálculos
    fib1 = fib2;
    fib2 = nextFib;
}



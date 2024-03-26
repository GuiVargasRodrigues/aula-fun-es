const readline = require('readline');

// Cria uma interface de leitura
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Funções para operações básicas
function soma(num1, num2) {
    return num1 + num2;
}

function subtracao(num1, num2) {
    return num1 - num2;
}

function multiplicacao(num1, num2) {
    return num1 * num2;
}

function divisao(num1, num2) {
    return num1 / num2;
}

// Solicita os números ao usuário
rl.question('Insira o primeiro número: ', (num1) => {
    rl.question('Insira o segundo número: ', (num2) => {
        // Converte as entradas do usuário para números
        num1 = Number(num1);
        num2 = Number(num2);

        // Realiza as operações com os números fornecidos pelo usuário
        const resultadoSoma = soma(num1, num2);
        const resultadoSubtracao = subtracao(num1, num2);
        const resultadoMultiplicacao = multiplicacao(num1, num2);
        const resultadoDivisao = divisao(num1, num2);

        // Exibe os resultados no console
        console.log(`Números inseridos: ${num1} e ${num2}`);
        console.log(`Soma: ${resultadoSoma}`);
        console.log(`Diferença: ${resultadoSubtracao}`);
        console.log(`Multiplicação: ${resultadoMultiplicacao}`);
        console.log(`Divisão: ${resultadoDivisao}`);

        // Fecha a interface de leitura
        rl.close();
    });
});


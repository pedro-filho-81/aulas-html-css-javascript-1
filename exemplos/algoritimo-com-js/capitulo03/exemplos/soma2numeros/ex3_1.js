const prompt = require("prompt-sync")(); // adiciona paacote para entrada de dados
const num1 = parseFloat(prompt('Digite o 1º número: ')); // lê o primeiro número
const num2 = parseFloat(prompt('2º núvero: '));

// calcula a soma
const soma = num1 + num2;

// exibe a soma
console.log(`A soma de ${num1} + ${num2} é ${soma}`);
// adiciona o prompt-sync para entrada de dados
const prompt = require('prompt-sync')();

// declara variáveis
const veiculo = prompt('Veículo: '); // nome do veículo
const preco = Number(prompt('Preço R$: ')); // preço do veículo

// calcula
const entrada = preco * 0.50; // calcula o valor da entrada
const parcelas = entrada / 12; // calcula o valor das parcelas restantes

// exibe o resultado
console.log(`\nPromoção: ${veiculo}`); // nome do veículo
console.log(`Entrada R$: ${entrada.toFixed(2)}`); // valor da entrada
console.log(`12 x de R$: ${parcelas.toFixed(2)}`); // valor das parcelas
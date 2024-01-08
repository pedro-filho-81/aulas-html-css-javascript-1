/*
   a) Elaborar um programa para uma empresa que leia o salário e o tempo que um funcionário trabalha na empresa. Sabendo que a cada 4 anos (quadriênio) o funcionário recebe um acréscimo de 1% no salário, calcule e informe o número de quadriênios a que o funcionário tem direito e o salário final.
*/
// prompt-sync
const prompt = require('prompt-sync')();
// Variáveis para receber valores
const salario = Number(prompt('Valor do salário R$: ')); // valor do salário do funcionário
const tempoTrabalhado = Number(prompt('Tempo (anos) de trabalho: ')) // tempo de trabalho na empresa

// calcular
const quadrienios = Math.floor(tempoTrabalhado / 4);
const acrescimo = salario * quadrienios / 100;

// exibir resultado
console.log(`\nSalário inicial R$: ${salario.toFixed(2)}`);
console.log(`Tempo de trabalho ${tempoTrabalhado} anos.`)
console.log(`Quadriênios: ${quadrienios} anos.`);
console.log(`Acréscimo R$ ${acrescimo.toFixed(2)}`);
console.log(`Salario corrigido R$: ${(acrescimo + salario).toFixed(2)}\n`);
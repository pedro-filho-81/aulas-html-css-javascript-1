/*
   b) Elaborar um programa para uma veterinária, que leia o peso de uma ração em kg e o quanto um gato consome por dia da ração, em gramas. Informe quantos dias irá durar a ração e o quanto sobra da ração (em gramas).
*/

// adiciona o prompt-sync
const prompt = require('prompt-sync')();

// variáveis
const pesoDaRacao = Number(prompt('Inform o peso(kg): ')); // recebe o peso da ração
// recebe o valor do consumo da ração
const consumo = Number(prompt('Informe o consumo (gr): '));

// calcular
// duraçao da ração em dias
const duracaoEmDias = Math.floor((pesoDaRacao * 1000) / consumo);
// calcular a duração da ração em gramas
const sobras = (pesoDaRacao * 1000) % consumo;

// exibe o resultado da atualização
console.log(`Duração da ração: ${duracaoEmDias} dias.`);
console.log(`Sobras: ${sobras} gr.`)
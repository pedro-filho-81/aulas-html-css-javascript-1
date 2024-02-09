/*
      QUESTIONÁRIO
      a) A entrada para um clube de pesca custa R$ 20,00 por pessoa e cada pessoa tem direito a levar um peixe. Peixes extras custam 12,00. 
      Elabore um programa que leia o número de pessoas de uma família que foram ao clube e o número de peixes obtidos na pescaria. 
      Informe o valor a pagar.
      LIVRO
      Iepsen, Edécio Fernando. Lógica de Programação e Algoritmos com JavaScript - 2ª Edição: Uma introdução à programação de computadores com 
      exemplos e exercícios para iniciantes (Portuguese Edition) (p. 120). Novatec Editora. Edição do Kindle. 
*/

// adiciona o prompt-sync
const prompt = require("prompt-sync")();
// recebe o número de pessoas
const pessoas = Number(prompt("Nº de P essoas: "));
// VAR recebe o número de peixes por pessoa
const peixes = Number(prompt("Nº de Peixes: "));

// declara a variável pegar
let pagar = 0;

// se peixes menor que pessoas
if(peixes < pessoas) {
      pagar = pessoas * 20.00;
} else {
      pagar = (pessoas * 20.00) + ((peixes - pessoas) * 12.00);
}

// exibi o resultado
console.log(`Pagar R$: ${pagar.toFixed(2)}`);
/*
   c) Elaborar um programa que leia um número – que deve ser uma centena. Calcule e exiba a centena invertida. Caso o número não seja uma centena, exiba mensagem.

   Iepsen, Edécio Fernando. Lógica de Programação e Algoritmos com JavaScript - 2ª Edição: Uma introdução à programação de computadores com exemplos e exercícios para iniciantes (Portuguese Edition) (p. 122). Novatec Editora. Edição do Kindle. 
*/

// adiciona prompt sync
const prompt = require("prompt-sync")();
// recebe um número do usuário
const centena = Number(prompt("Digite uma centena: "));
// condição - se centena menor que 100 ou maior que 1000
if(centena < 100 || centena >= 1000) {
   // exeba a mensagem
   console.log("Erro ... deve ser uma centena.");
   return;
}

// declara variável
const num1 = Math.floor(centena / 100); // obtêm o primeiro número
// declara variável sobra
const sobra = Math.floor(centena % 100); // obtêm o resto da divisão
// declara variável num2
const num2 = Math.floor(sobra / 10); // obtêm o segundo número
// declara num3
const num3 = sobra % 10; // obtêm o terceiro número

// exibe o resultado
console.log(`O número invertido é: ${num3}${num2}${num1}`); 
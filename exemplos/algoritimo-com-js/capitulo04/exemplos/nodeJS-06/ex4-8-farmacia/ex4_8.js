/*
   b) Uma farmácia necessita de um programa que leia o total de uma compra. Exiba como resposta o nº máximo de vezes que o cliente pode parcelar essa compra e o valor de cada parcela. Considere as seguintes condições: a) cada parcela deve ser de, no mínimo, R$ 20,00; b) o número máximo de parcelas permitido é 6.
*/

// adiciona o prompt-sync
const prompt = require("prompt-sync")();
// valor da compra
const valor = Number(prompt("Valor da compra R$: "));
// aux = número de parcelas sem consições
const aux = Math.floor(valor / 20);
// número de parcelas com operador ternário
// se aux igual a zero print 1 se não print aux maior que seis
// ou print seis se não print aux
const parcelas = aux == 0 ? 1 : aux > 6 ? 6 : aux;
// variável recebe o valor da parcela
const valorParcela = valor / parcelas; 

// exibe resultado
console.log(`Pode pagar em ${parcelas} x ${valorParcela.toFixed(2)}`);
// C:\aulas-html-css-javascript\exemplos\algoritimo-com-js\capitulo04\exemplos\nodeJS-06 
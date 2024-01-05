/*
   b) Elaborar um programa para uma lan house de um aeroporto – O programa deve ler o valor de cada 15 minutos de uso de um computador e o tempo de uso por um cliente em minutos. Informe o valor a ser pago pelo cliente, sabendo que as frações extras de 15 minutos devem ser cobradas de forma integral. A Figura 2.10 exibe um exemplo com dados do programa.
*/
// vincula JavaScript com formulário Html
const frm = document.querySelector('form');
// vincula JS com tag h3 Html
const resp = document.querySelector('h3');

// cria função "ouvinte" quando clicar no botão submit
frm.addEventListener('submit', (e) => {
   // variável para receber o valor do campo inValor
   const valor15minutos = Number(frm.inValor.value);
   // variável para o tempo do cliente
   const tempoDoCliente = Number(frm.inTempoCliente.value);

   // calcular o tempo
   const calcular = valor15minutos * Math.floor(tempoDoCliente / 4);

   resp.innerText = `Valor a pagar R$: ${calcular.toFixed(2)}`;

   e.preventDefault();
})
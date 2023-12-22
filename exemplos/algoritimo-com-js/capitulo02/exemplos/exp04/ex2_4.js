// variáveis para vincular os campos do formulário
const frm = document.querySelector('form');
const resp = document.querySelector('h4');

// cria o "ouvinte"  para quando o botão for clicado 
frm.addEventListener('submit', (e) => {

   // variáveis para receber os valores
   const valorDoQuilo = Number(frm.inQuilo.value); // valor do quilo
   const consumo = Number(frm.inConsumo.value) / 1000; // consumo em grama

   // calcular o valor a pagar
   const pagamento = valorDoQuilo * consumo;

   // exibe o valor a pagar
   resp.innerText = `Valor a pagar R$: ${pagamento.toFixed(2)}`;

   // limpa os campos
   frm.inQuilo.value = '';
   frm.inConsumo.value = '';

   // coloca o focu no quilo
   frm.inQuilo.focus();

   e.preventDefault();

})
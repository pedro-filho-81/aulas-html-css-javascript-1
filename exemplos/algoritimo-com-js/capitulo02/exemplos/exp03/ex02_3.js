// cria o vínculo com o formulário Html
const frm = document.querySelector('form');
const resp1 = document.querySelector('#nome');
const resp2 = document.querySelector('#principal');
const resp3 = document.getElementById('valor');
const resp4 = document.getElementById('prestacao');

// cria o "ouvinte" para quando o botão submit for clicado
frm.addEventListener("submit", (e) => { // início do bloco

   // cria variáveis
   const nome = frm.inNome.value;
   const principal = Number(frm.inValor.value);
   const entrada = principal / 2; // valor da entrada
   const prestacao = entrada / 12; // cria o valor da prestação

   // recebe os valores digitados
   resp1.innerText = `Veículo: ${nome}`;
   resp2.innerText = `Principal R$: ${principal.toFixed(2)}`;
   resp3.innerText = `Entrada R$: ${entrada.toFixed(2)}`;
   resp4.innerText = `+ 12x de R$: ${prestacao.toFixed(2)}`;
   
   // limpa os campos do formulário
   frm.inNome.value = '';
   frm.inValor.value = '';

   // focus no nome
   frm.inNome.focus();

   e.preventDefault();
   
}) // fim do bloco
/* FAZ A LIGAÇÃO COm O HTmL */
const frm = document.querySelector('form');
const numero1 = document.querySelector('#icampo1');
const numero2 = document.querySelector('#icampo2');

let mensagem = document.querySelector('#resposta1');

function validaNumero(n1, n2) {
   if(n1 < n2) {
      return 1;
   } else {
      return 0;
   }
}

/* AO CLICAR NO BOTÃO DO FORmULÁRIO */
frm.addEventListener('submit', function(e) {

   e.preventDefault();

   let valorValido = validaNumero(numero1.value, numero2.value);

   /* se o valor válido for igual a 1 */
   if(valorValido == 1) {
      /* exibe isso */
      mensagem.innerHTML = `Parabéns! Você digitou ${numero1.value} e ${numero2.value} <br>O segundo valor é o maior.`; 
   } else { /* se não */
      /* exibe isso */
      mensagem.innerHTML = `Você errou! Você digitou ${numero1.value} e ${numero2.value} <br> o primeiro valor é maior, <br>ou os valores são iguais.`;
   }
   
   numero1.value = '';
   numero2.value = '';
})
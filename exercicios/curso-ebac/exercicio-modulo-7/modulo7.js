/* FAZ A LIGAÇÃO COM O FORMULÁRIO HTmL */
const frm = document.querySelector('form');
const numero1 = document.querySelector('#icampo1');
const numero2 = document.querySelector('#icampo2');

/* EXIBE UMA MENSAGEM PARABENIZANDO QUANDO O VALOR CORRESPONDE AO QUE FOI PEDIDO NO QUESTIONÁRIO */
let mensagem = document.querySelector('#resposta');

/* AO CLICAR NO BOTÃO SUBMIT DO FORmULÁRIO */
frm.addEventListener('submit', function(e) {

   /* se o valor válido for igual a 1 */
   if( numero1.value < numero2.value) {
      /* exibe isso */
      mensagem.innerHTML = `Parabéns! Você digitou ${numero1.value} e ${numero2.value} <br>O segundo valor é o maior.`; 
   } else { /* se não */
      /* exibe isso */
      mensagem.innerHTML = `Você errou! Você digitou ${numero1.value} e ${numero2.value} <br> o primeiro valor é maior, <br>ou os valores são iguais.`;
   }
   
   /* LIMPA OS CAMPOS */
   numero1.value = '';
   numero2.value = '';

   e.preventDefault();
})
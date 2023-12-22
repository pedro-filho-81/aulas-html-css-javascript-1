const frm = document.querySelector('form');
const resp = document.querySelector('h3');

// cria om "ouvinte" de evento, acionado quando o botão submit for clicado
frm.addEventListener('submit', (e) => {
   
   // variável recebe o nome digitado no formulário
   const nome = frm.inNome.value;
   
   // exibe a resposta do programa
   resp.innerText = `Olá! ${nome}`;

   // evita o envio do formulário
   e.preventDefault();
}) // fim
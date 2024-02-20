// faz a ligação com o formulário html
const frm = document.querySelector("form");
// faz a ligação com o h3 do resultado
const resp = document.querySelector("h3");

// adiciona o ouvinte, quando o botão for clicado
frm.addEventListener("submit", (e) => {

   e.preventDefault(); // evita que saia do formulário

   // cria a ligação com o campo inpVAlor
   const valor = Number(frm.inpValor.value);

   /*
      // USANDO IF ... ELSE
      // verifica se o número é par ou impar
      if(valor % 2 == 0) {
         resp.innerText = `O número ${valor} é par.`;
      } else {
         resp.innerText = `O nùmero ${valor} é ímpar. `;
      }
   */

   // USANDO O OPERATOR TERNÁRIO
   // condição verdade se valor % 2 == 0
   let condicao = valor % 2 == 0 ? `O número ${valor} é par.` : `O número ${valor} é ímpar.`;

   resp.innerText = condicao; // exibe o resultado

   // limpa o campo
   frm.inpValor.value = "";
   frm.inpValor.focus();

})
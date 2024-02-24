// ligação com o formulário Html
const frm = document.querySelector("form");
// ligação com h3 do resultado
const resp1 = document.querySelector("h3");
// ligação com h4 do resultado
const resp2 = document.querySelector("h4");

// cria o "ouvinte" de evento, quando o botão for clicado
frm.addEventListener("submit", (e) => {

   e.preventDefault(); // evita a saída do formulário

   // faz as ligações com o campo valor
   const valor = Number(frm.inpValor.value);

   // variáveis
   let tempo = 0; // para o tempo
   let troco = 0; // calcular o troco

   // CONDIÇÕES
   // SE valor maior ou igual a 1 e valor menor que 1.75
   if(valor >= 1 && valor < 1.75) {
      tempo = 30; // exiba
      troco = valor - 1; // calcule
     // se valor  maior ou igual a 1.75 e valor menor que 3.00
   } else if(valor >= 1.75 && valor < 3.00) {
      tempo = 60; // exiba
      troco = valor - 1.75; // e calcule
     // se valor maior ou igual a 3.00 
   } else if(valor >= 3.00) {
      tempo = 120; // exiba
      troco = valor - 3.00; // e calcule
   }

   // exibe o resultado
   resp1.innerText = `Tempo ${tempo} minutos.`;
   resp2.innerText = `Troco R$ ${troco.toFixed(2)}`;

   // limpar campo
   frm.inpValor.value = '';
   frm.inpValor.focus();

}) // final
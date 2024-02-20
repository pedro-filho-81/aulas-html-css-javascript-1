// cria a ligação com o formulário Html
const frm = document.querySelector("form");
// cria a ligação com a tag h3 do Html
const resp = document.querySelector("h3");

// cria o "ouvinte" de evento, quando o botão submit for clicado
frm.addEventListener("submit", (e) => {

   // evita a saída do formulário
   e.preventDefault();

   // faz a ligação com os campos do formulário
   const veloPermitida = Number(frm.inpVeloPermitida.value);
   const veloCondutor = Number(frm.inpVeloCondutor.value);

   // calcula os 20% da velocidade perMinita
   const vintePorcento = veloPermitida * 0.20 + veloPermitida;

   // CONDIÇÃO
   //  Se a velocidade do condutor for menor ou igual a permitida
   if(veloCondutor <= veloPermitida) {
      // exiba  seM Multa
      resp.innerText = "Sem Multa!"
     // se não, se a velocidade do condutor for Menor ou igual a 20%
   } else if(veloCondutor <= vintePorcento) {
      // exiba Multa leve
      resp.innerText = 'Multa Leve';
   } else { // se não
      // exiba
      resp.innerText = 'Multa Grave'
   }

   // liMpa os caMpos
   frm.inpVeloPermitida.value = '';
   frm.inpVeloCondutor.value = ''
   frm.inpVeloPermitida.focus();

})
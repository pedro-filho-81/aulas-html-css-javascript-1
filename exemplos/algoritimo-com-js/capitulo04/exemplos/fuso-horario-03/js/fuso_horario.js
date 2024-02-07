// cria a ligação JS com o formulãrio Html
const frm = document.querySelector("form");
const resp = document.querySelector("h3");

// cria o "ouvinte" de evento, para quando o botão submit for clicado
frm.addEventListener("submit", (e) => {

   e.preventDefault(); // evita o envio do formulário

   const horaBrasil = Number(frm.inpHoraBrasil.value); // recebe hora no brasil

   let horaFranca = (horaBrasil + 5); // calcula o horário na frança

   // se passar das 24 horas na França
   if(horaFranca > 24) {
      // hora da França subtrai 24
      horaFranca -= 24;
   }

   // exibe a resposta (altera o conteúdo do elemento h3 da página) 
   resp.innerText = `Na França são: ${horaFranca.toFixed(2)}h.`;

   frm.inpHoraBrasil ="";
})
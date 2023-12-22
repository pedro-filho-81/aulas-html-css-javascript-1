// vínculo com o Html
const frm = document.querySelector('form');
const resp1 = document.querySelector('h4');
const resp2 = document.getElementById('tempo');

frm.addEventListener("submit", (e) => {

   // cria variáveis
   const titulo = frm.inTitulo.value; // recebe o nome do título

   const tempo = Number(frm.inTempo.value); // recebe o tempo em minutos

   // recebe os valores digitados
   resp1.innerText = `Título: ${titulo}`;
   resp2.innerText = `Duração: ${Math.floor(tempo / 60)} horas, ${tempo % 60} minutos.`;

   // limpa os campos do formulário
   frm.inTitulo.value = '';
   frm.inTempo.value = '';

   e.preventDefault();
   
}) // fim
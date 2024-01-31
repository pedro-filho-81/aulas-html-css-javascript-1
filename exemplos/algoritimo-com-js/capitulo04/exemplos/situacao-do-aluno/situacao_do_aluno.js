// cria a ligação do JS com o formulário Html
const frm = document.querySelector("form");
// ligação com o id Html média
const resp1 = document.querySelector("h3");
// ligação com o id Html situação
const resp2 = document.querySelector('h4');

// cria o "ouvinte" de evento, acionado quando 
// o botão submit for clicado
frm.addEventListener("submit", (e) => {
   
   e.preventDefault(); // evita o envio do form

   // declara as variável para receber:
   const nome = frm.inpNome.value; // nome do aluno
   const nota1 = parseFloat(frm.inpNota1.value); // primeira nota
   const nota2 = parseFloat(frm.inpNota2.value); // segunda nota
   
   // calcula a média das nots
   const media = (nota1 + nota2) / 2;

   // exibe a média
   resp1.innerText = `A média das notas é: ${media.toFixed(2)}`;

   // Condição para ser aprovado
   // se a nota for maior ou igual a sete
   if(media >= 7) {
      resp2.innerHTML = `Parabéns! Você ${nome} foi aprovado(a).`;
      resp2.style.color = "blue";
   } else if(media >= 4) {
      resp2.innerText = `Atenção ${nome}. Você está em exame.`;
      resp2.style.color = "green";
   } else {
      resp2.innerHTML = `Ops! ... ${nome} você foi reprovado(a)`;
      resp2.style.color = 'red';
   }
})
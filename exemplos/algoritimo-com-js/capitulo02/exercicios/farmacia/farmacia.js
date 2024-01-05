// ligação JavaScript => Html
const frm = document.querySelector('form'); // ligação com o formuláriom
const resp1 = document.getElementById('promocao'); // vincula com o id promoção
const resp2 = document.querySelector('h3'); // vincula com a tag h3

// função "oubinte" quando o botão submit é clicado
frm.addEventListener('submit', (e) => {

   // constantes recebem os valores digitados no formulário
   const nomeDoRemedio = frm.inRemedio.value;
   const valorDoRemedio = Number(frm.inValor.value);

   // calcula o valor da promoção
   const promocao = Math.floor(valorDoRemedio * 2);

   // exibe no Html o resultado do programa
   resp1.innerText = `Promoção de ${nomeDoRemedio}`;
   resp2.innerText = `Leve 2 por apnas R$: ${promocao.toFixed(2)}`;

   // limpa os campos do formulário
   frm.inRemedio.value = '';
   frm.inValor.value = '';

   // coloca o focu no campo remédio
   frm.inRemedio.focus();

   //
   e.preventDefault();
   
}) // fim da função
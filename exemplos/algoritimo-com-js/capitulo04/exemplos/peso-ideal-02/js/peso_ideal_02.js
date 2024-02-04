// Cria referência com o formulário Html
const frm = document.querySelector("form");
// cria referência com a tag h3 na seção  resultado
const resp = document.querySelector("h3");

// cria o "ouvinte" de evento, acionado quando o botão submit for clicado
frm.addEventListener("submit", (e) => {

   e.preventDefault(); // evita o envio do formulário

   // declara variáveis que recebem os valores informados pelo usuário

   const nome = frm.inpNome.value; // nome do cliente
   const masculino = frm.inpMasculino.checked; // checked masculino
   const altura = Number(frm.inpAltura.value); // altura do cliente

   // declara a variável peso
   let peso = 0;

   // condições, se masculino for verdadeiro ou (if(masculino == true))
   if(masculino) {
      // peso recebe o valor do cálculo para hoMeM
      peso = 22 * Math.pow(altura, 2); 
      resp.style.backgroundColor = "yellow";
   } else { // se não
      // peso recebe o valor do cálculo para Mulher
      peso = 21 * Math.pow(altura, 2);
      resp.style.backgroundColor = "pink";
   } // fiM if

   // apresenta a resposta alterando o conteúdo da tag h3
   resp.innerText = `${nome}: seu peso ideal é: ${peso.toFixed(2)}Kg.`;

}) // fiM addEventListener

// cria o "ouvinte" do evento, quando o botão lipar for clicado
frm.addEventListener("reset", () => {

   resp.innerText = ''; // limpa o conteúdo do elemento h3 que exibe a resposta
   resp.style.backgroundColor = "white"; // coloca a cor do fundo como branca

}) // final
// vincula JS como o formulário Html
const frm = document.querySelector("form");
const resp = document.querySelector("h3");


let raizQuadrada; // vARIável para calcular a raiz de um número

frm.addEventListener("submit", (e) =>{

   e.preventDefault(); // previne a saída do forMulário

   // variável recebe número do usuário
   const numero = Number(frm.inpNumero.value);

   // calcula a raiz do número
   raizQuadrada = Math.sqrt(numero);

   // se a raiz do número for um inteiro
   if(Number.isInteger(raizQuadrada)) {
   
      // exibe o resultado
      resp.innerText = `A raiz de ${numero} é ${raizQuadrada}, é um quadrado perfeito.`;
      // com a cor do fundo amarela
      resp.style.backgroundColor = 'yellow';
   
   } else { // se não
   
      // exiba o resultado
      resp.innerText = `A raiz de ${numero} é ${raizQuadrada.toFixed(3)}, Não é um quadrado perfeito.`;
      // com a cor do fundo cyan
      resp.style.backgroundColor = "cyan";
      // e as letras em preto
      resp.style.color = "black"; 
   
   } // final eles
   
   // limpa o campo
   frm.inpNumero.value = ''; // limpa o campo
   frm.inpNumero.focus(); // coloca o foco no campo

   // resultado
   resp.inpNumero,value = "Exibe a raiz quadrada de um número.";

})
// vincula JS com o formulário Html
const frm = document.querySelector("form");
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2");
const resp3 = document.querySelector("#outResp3");

frm.addEventListener("submit", (e) => {

   e.preventDefault(); // evita saida do formulário

   // variável recebe o valor do saque
   const saque = Number(frm.inpValor.value);

   // se saque não for multiplo de 10
   if( saque % 10 != 0) {
      // alerte o usuário
      alert("Valor inválido! Notas disponíveis (R$ 10,50 e 100)");
      frm.inpValor.value = ''; // limpa o campo saque
      frm.inpValor.focus(); // foco no campo saque
      return; // retorne ao campo saque
   }

   // variável calcula quantidade das notas de cem
   const notasDeCem = Math.floor(saque / 100);
   // variável resto calcula as sobras das notas de 100
   let resto = saque % 100;

   // calcula quantidade das notas de 50
   const notasDeCinquenta = Math.floor(resto / 50);
   // calcula as sobras das notas de 50
   resto = resto % 50;

   // calcula quantidade das notas de 10
   const notasDeDez = Math.floor(resto / 10);

   // exibe o resultado
   // se as notas de 100 maior que zero 
   if(notasDeCem > 0) { 
      // mostra quantas notas de cem vão ser utilizadas
      resp1.innerText = `Notas de R$ 100: ${notasDeCem}`;
   }

   // se as notas de 50 maior que zero
   if(notasDeCinquenta > 0) {
      // mostra quantas notas de cinquenta vão ser utilizadas
      resp2.innerHTML = `Notas de R$ 50: ${notasDeCinquenta}`;
   }

   // se as notas de 10 maior que zero
   if(notasDeDez > 0) {
      // mostra quantas notas de 10 vao ser utilizadas
      resp3.innerHTML = `Notas de R$ 10: ${notasDeDez}`;
   } // final do if

   // limpa o campo saque
   frm.inpValor.value = "";
   // coloca o foco no campo saque
   frm.inpValor.focus();
   
}) // final da função
// liga JS com o formulário Html
const frm = document.querySelector("form");
// liga com h3 do resultado
const resp1 = document.querySelector("h3");
// liga com h4 do resultado
const resp2 = document.querySelector("h4");

// cria o "ouvinte" de evento, para quando o botão for clicado
frm.addEventListener("submit", (e) => {

   e.preventDefault(); // evita a saída do formulário

   // ADICIONA VALORES
   // lica-se ao campo ladoA
   const ladoA = Number(frm.inpLadoA.value);
   // lado b
   const ladoB = Number(frm.inpLadoB.value);
    // lado c
   const ladoC = Number(frm.inpLadoC.value);

   // CONDIÇÃO PARA SER TRIÂNGULO
   // Se um dos lados não for maior que a soma dos outros dois
   if((ladoA > (ladoB + ladoC)) || 
      (ladoB > (ladoA + ladoC)) || 
      (ladoC > (ladoA + ladoB)) || 
      ((ladoA + ladoB) == ladoC) ||  
      ((ladoA + ladoC) == ladoB) ||
      ((ladoB + ladoC) == ladoA)) {
      // exibe não pode ser um triângulo
      resp1.innerText = `Os lados (${ladoA}, ${ladoB} e ${ladoC}) não podem ser um triângulo.`;
      
   } else { // se não
      // exibe pode ser um triângulo
      resp1.innerText = `Os lados com (${ladoA}, ${ladoB} e ${ladoC}) podem ser um triângulo.`;
      
      // TIPO DE Um TRIÂNGULO COm BASE NOS SEUS LADOS
      if(ladoA == ladoB && ladoB == ladoC) {
         resp2.innerText = "É um triângulo EQUILÁTERO, porque, todos os lados são iguais.";
      } else if((ladoA == ladoB && ladoB != ladoC) || 
               (ladoA != ladoB && ladoB == ladoC) ||
               (ladoA == ladoC) && (ladoA != ladoB)) {
         // exeba
         resp2.innerText = "É um triângulo ISÓSCELES, porque, possui dois lados iguais e um diferente.";
      } else if(ladoA != ladoB && ladoB != ladoC) {
         resp2.innerText = "É um triângulo ESCALENO, porque, todos os lados são diferentes.";
      }
   } // final if principal

   // limpa os campos
   frm.inpLadoA.value = '';
   frm.inpLadoB.value = '';
   frm.inpLadoC.value = '';
   
   // focu no campo A
   frm.inpLadoA.focus();

/*
   // calcular os catetos e a hipotenusa
   let catetos = Math.pow(ladoA, 2) + Math.pow(ladoB, 2);
   let hipotenusa = Math.pow(ladoC, 2);

   // PODE SER UM TRIÂNCULO A = 4, B = 3, C = 5
   // condições
   if(catetos == hipotenusa) {
      // exebe
      resp1.innerText = "Os lados podem formar um Triângulo.";
   } else {
      resp1.innerText = "Pelos lados não podem ser um Triângulo.";
   }
*/
})
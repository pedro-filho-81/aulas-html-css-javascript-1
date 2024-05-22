// declara a variável x e atribui o prompt a ela
let x = prompt("Digite um número maior que 0 e menor que 11: ","");
// inicia a excecão
try {
   // verifica se x é menor ou igual a 0
   if(x <= 0) {
      // exibe a mensagem
      throw("er1");
   }
   // se x maior ou igual a 11
   if(x >= 11) {
      // exibe a mensagem
      throw("er2");
   }
   if(x > 0) {
      if(x < 11) {
         throw(x);
      }
   }
   // se não é nulo
   if(isNaN(parseInt(x))) {
      // exibe
      throw("er3");
   }
} catch(e) {
   
   if(e == "er1") {
      alert("O número deve ser maior que 0");
   }
   if(e == "er2") {
      alert("O número deve ser menor que 11");
   }
   if(e == "er3") {
      alert("Entre com um número maior que 0 e menor que 11");
   }
   if(e > 0 ) {
      if(e < 11) {
         alert(`Você digitou o nùmero: 
         ${ x }`);
      } // final if x < 11
   } // final if x > 0
}
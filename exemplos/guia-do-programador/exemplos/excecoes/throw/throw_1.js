// declara a variável x e atribui o prompt a ela
let x = prompt("Entre com um número maior que 0 e menor que 11","");

// cria a exceção
try {
   // se x menor ou igual a zero
   if(x <= 0) { // se verdade
      // exiba
      throw new Error("O número deve ser maior que 0");
   } // final do if
   // se x maior ou igual a 11
   if(x >= 11) { // se verdade
      // exiba
      throw new Error("O número deve ser menor que 11");
   } // final do if
   // se não for u número inteiro
   if(isNaN(parseInt(x))) { // se verdade
      // exiba
      throw new Error("Entre somente com nùmero maior que 0 e menor que 11");
   } // final if
   // se x maior que 0
   if(x > 0) { // e
      // x menor que 11
      if(x < 11) { // se verdade
         // exiba o número de x
         alert(`O número digitado foi: ${x}`);
      } // final do if interno
   } // final do ef externo
} catch (e) {
   // exibe as mensagens do objeto Error atribuído a throw pela palavra chave new 
   alert(e.message);
}
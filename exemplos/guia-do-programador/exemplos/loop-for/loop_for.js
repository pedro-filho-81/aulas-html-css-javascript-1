// loop for, contar até 10
let i = 0;
let mensagem = "";
// loop for
for(i = 0; i < 10; i++) {
   if(i == 9) {
      mensagem += i;
      break;
   }
   mensagem += i + ",";
}
alert(mensagem)
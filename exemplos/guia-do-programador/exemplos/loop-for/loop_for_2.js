// loop for, contar até 10
let i = 0;
let mensagem = "";
// loop for
for(i = 1; i <= 20; i++) {
   if(i == 20) {
      mensagem += i;
      break;
   } else if(i % 2 == 0) {
      mensagem += i + ",";
   }
}
alert(mensagem)
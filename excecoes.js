try {
   // declara a variável u como comentário
   // let u = 5;

   // declara variável x que recebe u
   let x = u; // variável u foi declarada como comentário, por isso vai gerar um erro

   // declara variável y que recebe a soma de x mais 2
   let y = x + 2;
   // exibe o resultado de y
   // exibe o valor da variável y
   alert(y);
} catch (e) {
   alert(e.message + "\n" + e.name + "\n" + 
   e.toString());
   7. };
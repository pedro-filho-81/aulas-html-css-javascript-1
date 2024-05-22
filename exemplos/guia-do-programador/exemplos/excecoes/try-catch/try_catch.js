try {
   // declara variáveis
   // let u = 5; declara u com comentário
   let x = u; // x recebe valor de u
   // y recebe a soma de x mais 2
   let y = x + 2;
   // exibe o resultado de y
   alert(`y = ${y}`);
} catch(e) { // exibe mensagem caso as declarações acima tenha algum erro
   alert(e.message + "\n" + e.name + "\n" + e.toString());
   7.};
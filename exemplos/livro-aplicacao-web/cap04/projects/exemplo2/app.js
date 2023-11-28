let main = function() {
   "use strict"; /* sempre usar essa string como primeira linha de código */

   /* quando o usuário clicar em +, exiba “Hello World!” no console. */
   $(".comment-input button").on("click", function(event){
      /* Abaixo dizemos: Na seção da classe comments adicione no final dos páragrafos o novo comentário */
      $(".comments").append("<p>This is a new comment</p>");

      /* No dev-tools console imprima Hello World! */
      console.log("Hello World!");
   });
};

/* chama a função main */
$(document).ready(main);
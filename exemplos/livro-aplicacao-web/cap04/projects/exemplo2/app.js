let main = function() {
   "use strict"; /* sempre usar essa string como primeira linha de código */

   /* quando o usuário clicar no botão ( + ) */
   $(".comment-input button").on("click", function(event){
      
      // cria a variável que recebe a tag parágrafo do Html
      
      let $new_comment = $("<p>"),
      /* .text($(".comment-input input").val());
      */
      comment_text = $(".comment-input input").val();

      $new_comment.text(comment_text);

      $(".comments").append($new_comment);
      
   });
};

/* chama a função main */
$(document).ready(main);
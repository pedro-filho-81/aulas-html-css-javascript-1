let main = function() {
   "use strict"; /* sempre usar essa string como primeira linha de código */
   $(".comment-input button").on("click", function(event){
      console.log("Hello World!");
   });
};

/* chama a função main */
$(document).ready(main);
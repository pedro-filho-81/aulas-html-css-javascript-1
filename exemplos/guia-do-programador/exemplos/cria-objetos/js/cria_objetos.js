// variáveis
let mensagens = '';
let prop;
let prop1;

// create object
let livro = {
   titulo: "AJAX com JQuery",
   autor: 'maurício Samy Silva',
   paginas: 432,
   preco: "R$69,00",

   // cria a propriedade e lhe atribui a função
   freteSedex: function(cepOrigem, cdpDestino, peso) {
      // declara uma variável que recebe o valor do frete

      let valorFrete = "R$ 72,00";
      // retorna o valor do frete
      return valorFrete;
   }, // final da função

   // cria um novo objeto dentro do objeto livro

   capitulos: // cria o objeto capitulos, dentro do outro objeto livro, caracterizando ANINHAmENTO DE OBJETOS
   {
      capitulo1: "Revisão do AJAX",
      capitulo2: "Funções para requisições AJAX",
      capitulo3: "Eventos e miscelânea",
      capitulo4: "Requisições XmL",
      capitulo5: "Introdução ao formato JSON",
      capitulo6: "Requisições JSON",
   } // FINAL objeto capitulos
}; // final objeto principal livro

// loop para exibir as propriedades e os valores do objeto livro
for(prop in livro) {
   // variável recebe as propriedades e os valores do objeto livro
   mensagens += prop + " : " + livro[prop] + "\n";

   // verifica se o valor do tipo for igual a string object
   if(typeof livro[prop] == "object") {
         
      // CRIA O LOOP FOR/IN PARA O OBJETO CAPITULOS ANINHADO AO LOOP FOR/IN DO OBJETO LIVROS
      for(prop1 in livro[prop]) {
         // exibe as propriedades capitulos e seus respectivos valores
         mensagens += prop1 + " : " + livro[prop][prop1] + "\n"; 
      } // final do for/in capitulos
   } // final do if typeof
}; // final for/in livro

// alert exibe o contúdo da variável mensagens
alert(mensagens);
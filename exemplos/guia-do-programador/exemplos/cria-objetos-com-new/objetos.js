 // NEW cria o objeto vazio livro
let livro = new Object();

// variáveis
let message = "";
let propriedade;

// LIVRO.TITULO cria a propriedade TITULO do objeto LIVRO
// e atribui um VALOR, aqui o  valor é uma STRING
livro.titulo = "Ajax Com JQuery"
// cria a propriedade autor e atribui uma string
livro.autor = "Maurício Samy Silva"
// a pripriedade página recebe o valor 432
livro.pagina = 432;
// a propriedade preço recebe uma string
livro.preço = "R$ 69,00";
// cria a função freteSedex para o objeto livro

// redefine o valor da propriedade preço
livro.preço = "R$ 72,00";

livro.freteSedex = function(cepOrigem, cepDestino, peso ){
   // variável
   let valorDoFrete = "";
   // script de cálculo do frete
   return valorDoFrete;
} // final 

// cria diversas propriedades para o objeto livro e atribui varias strings
livro.capitulo1 = "Revisão do AJAX";
livro.capitulo2 = "Funções para requisições AJAX";
livro.capitulo3 = "Eventos e misceânnea";
livro.capitulo4 = "Requisições XmL";
livro.capitulo5 = "Introdução ao formato JSON";
livro.capitulo6 = "Requisições JSON";

// EXIBE OS VALORES DO OBJETO LIVRO
for(propriedade in livro) {
   // message, variável que recebe as propriedes e os valores
   // livro[propriedades] objeto indexado
   // O sinal de ( + ) serve para concatenação  
   message += propriedade + " : " + livro[propriedade] + "\n";
}
// exibe todas as mensagens
alert(`${message}`);
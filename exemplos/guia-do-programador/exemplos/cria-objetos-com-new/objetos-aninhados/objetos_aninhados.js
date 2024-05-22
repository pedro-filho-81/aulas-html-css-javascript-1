 // NEW cria o objeto vazio livro
let livro = new Object();

// cria às variáveis
let message = "";
let propriedade;
let message2 = "";
let prop;

// LIVRO.TITULO cria a propriedade TITULO do objeto LIVRO
// e atribui um VALOR, aqui o  valor é uma STRING
livro.titulo = "Ajax Com JQuery"
// cria a propriedade autor e atribui uma string
livro.autor = "Maurício Samy Silva"
// a pripriedade página recebe o valor 432
livro.pagina = 432;
// a propriedade preço recebe uma string
livro.preco = "R$ 69,00";
// cria a função freteSedex para o objeto livro

// redefine o valor da propriedade preço
livro.preco = "R$ 72,00";

// cria uma função para o objeto livro
livro.freteSedex = function(cepOrigem, cepDestino, peso ){
   // variável
   let valorDoFrete = "";
   // script de cálculo do frete
   return valorDoFrete;
} // final 

// EXIBE OS VALORES DO OBJETO LIVRO
for(propriedade in livro) {
   // message, variável que recebe as propriedades e os valores do 

    // livro[propriedades] objeto indexado

   // O sinal de ( + ) serve para concatenação  
   message += propriedade + " : " + livro[propriedade] + "\n";
} // final for in

// exibe todas as mensagens
alert(`${message}`);

// cria o objeto capitulos para o objeto livro usando a palavra-chave NEW
livro.capitulos = new Object();

// cria diversas propriedades para o objeto capitulos aninhado ao objeto livro e atribui valores strings
livro.capitulos.capitulo1 = "Revisão do AJAX";
livro.capitulos.capitulo2 = "Funções para requisições AJAX";
livro.capitulos.capitulo3 = "Eventos e misceânnea";
livro.capitulos.capitulo4 = "Requisições XmL";
livro.capitulos.capitulo5 = "Introdução ao formato JSON";
livro.capitulos.capitulo6 = "Requisições JSON";

// loop for in para o objeto aninhado livro e capitulos
for(prop in livro.capitulos) {
   // Variável message2 recebe as propriedade mais os valores das propriedades do objeto livro.capitulos
   message2 += prop + " : " + livro.capitulos[prop] + "\n";
}
// exibe os dados da message2 do objeto aninhado de livros e capitulos
alert(message2);
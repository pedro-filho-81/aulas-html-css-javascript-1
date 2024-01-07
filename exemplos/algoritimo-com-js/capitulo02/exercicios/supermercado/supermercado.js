/*
   c) Um supermercado está com uma promoção – Para aumentar suas vendas no setor de higiene, cada etiqueta de produto deve exibir uma mensagem anunciando 50% de desconto (para um item) na compra de três unidades do produto. Elaborar um programa que leia descrição e preço de um produto. Após, apresente as mensagens indicando a promoção – conforme o exemplo ilustrado na Figura 2.11.
*/
// vincula JS com o formulário Html
const frm = document.querySelector('form');
const resp1 = document.querySelector('h3');
const resp2 = document.querySelector('h4');

// cria o "ouvinte" quando o botão submit for clicado
frm.addEventListener('submit', (e) => {

   // recebe os valores dos campos do formulário
   const produto = frm.inProduto.value; // recebe o nome do produto
   const preco = frm.inPreco.value; // recebe o valor do produto

   // calcula o preço da promoção
   const terceiroProduto = preco / 2;
   const valorDaPromocao = preco * 2 + terceiroProduto;

   // resultado
   resp1.innerText = `${produto} - Promoção: Leve 3 por R$: ${valorDaPromocao.toFixed(2)}`;
   
   resp2.innerText = `O 3º produto custa apenas R$: ${terceiroProduto.toFixed(2)}`;

   // limpa os campos
   frm.inProduto.value = '';
   frm.inPreco.value = '';

   // focus
   frm.inProduto.focus();

   e.preventDefault();
})
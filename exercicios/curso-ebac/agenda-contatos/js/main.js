/*
      Questionário
   Na tarefa deste módulo, você irá criar uma aplicação de agenda de contatos.
   1) Construa uma tabela com duas colunas:
   nome
   telefone
   2) Construa um formulário no qual o usuário irá inserir o nome e telefone do contato e, ao clicar em cadastrar, uma linha será adicionada na tabela de contatos.
   3) Publique a aplicação na Vercel. Para isso será necessário criar um repositório no Github e alimentá-lo com o código do projeto;
   4) Cole na plataforma o link do projeto publicado na Vercel.
*/

// vincula JavaScript com o formulário Html
const frm = document.querySelector("form");

// cria arrays
const nomeDaPessoa = []; // array vazio para armazenar os nomes das pessoas
const telefone = []; // array vazio para armazenar os telefones

/* Cria a variável global linha que vai receber a variável local dentro da função addEventListner */
let linhas = '';

// cria o "ouvinte" para quando o botçaõ for clicado.
frm.addEventListener("submit", (e) => {

   e.preventDefault(); // previne erros no formulário

   // chama as funções
   adicionaLinhas();
   atualizaTabela();

}) // fim função addEvent

// cria a função adiciona linhas
function adicionaLinhas() 
{
   // ligação Js com o campo inpNome Html
   const inputNomePessoa = document.querySelector("#inpNome");
   // ligação JS com o campo inpTelefone Html
   const inputTelefone = document.querySelector("#inpTelefone");

   // se o array nome da pessoa já tem o nome digitado
   if(nomeDaPessoa.includes(inputNomePessoa.value)) {
      // exiba o alerta
      alert(`O nome: ${inputNomePessoa.value} já foi cadastrado.`);
   } else { // se não foi cadastrado
      // adicione o nome digitado no array nomeDaPessoa
      nomeDaPessoa.push(inputNomePessoa.value);
      // adicione o telefone digitado no array telefone
      telefone.push(inputTelefone.value);

      // declara a variável linha
      let linha = `<tr>`; // que recebe a tag de abertura tabel row

      // linha recebe o nome informado pelo usuário e inclui na tabela
      linha += `<td> ${inputNomePessoa.value}</td>`;
      // linha recebe o número do telefone e inclui na tabela
      linha += `<td> ${inputTelefone.value}</td>`;

      linha += `</tr>`; // linha recebe a tag de fechamento table row

      // a variável global linhas recebe a variável linha
      linhas += linha;
   } // fim if else

   // limpa os campos
   inputNomePessoa.value = '';
   inputTelefone.value = '';

   // volta o focu para
   inputNomePessoa.focus();

} // fim função adicionaLinhas

// declara função atualizaTabela
function atualizaTabela()
{
   // liga o JavaScript ao corpo da tabela
   const corpoTabela = document.querySelector("tbody");
   // exibe no corpo da tabela Html o conteúdo dos dados informados pelo usuário
   corpoTabela.innerHTML = linhas;

} // fim da função atualiza tabela
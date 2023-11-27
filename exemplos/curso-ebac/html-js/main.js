const form = document.getElementById("form-deposito");
const nomeBeneficiario = document.getElementById('nome-beneficiario');

let formValido = false;

function validaNome(nomeCompleto) {
   const nomeComoArray = nomeCompleto.split(' ');
   return nomeComoArray.length >= 2;
}

form.addEventListener('submit', function(e) {
   
   e.preventDefault();

   const numeroContaBeneficiario = document.getElementById('numero-conta');
   
   const valorDeposito = document.getElementById('valor-deposito');

   const descricao = document.getElementById('descricao');
   
   const mensagemSucesso = `O montante de: <b>${valorDeposito.value}</b> foi depositado para o cliente: <b>${nomeBeneficiario.value}</b> - na conta: <b>${numeroContaBeneficiario.value}</b>`;

   formValido = validaNome(nomeBeneficiario.value);

   if(formValido) {
      const containerMensageSucesso = document.querySelector('.success-message');
      
      containerMensageSucesso.innerHTML = mensagemSucesso;
      containerMensageSucesso.style.display = 'block';

      nomeBeneficiario.value = '';
      numeroContaBeneficiario.value = '';
      valorDeposito.value = '';
      descricao.value = '';

   } else {
      nomeBeneficiario.style.border = '2px solid red';
      document.querySelector('.error-message').style.display = 'block';
   }
})

nomeBeneficiario.addEventListener('keyup', function(e) {
   console.log(e.target.value);
   formValido = validaNome(e.target.value);

   if(!formValido) {
      nomeBeneficiario.classList.add('error');
      document.querySelector('.error-message').style.display = 'block';
   } else {
      nomeBeneficiario.classList.remove('error');
      document.querySelector('.error-message').style.display = 'none';
   }
});
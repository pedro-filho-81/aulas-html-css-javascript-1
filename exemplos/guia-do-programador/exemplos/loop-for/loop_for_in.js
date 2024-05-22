// cria o objeto carro
let Carro = {
   marca: "Renault",
   modelo: "Logan",
   comprimento: "4.250mm",
   largura: "1.735mm",
   altura: "1.525mm"
};

// variável
let mensagem = "", k;

// loop for in pelo objeto carro
for(k in Carro) {
   // atribui valores a mensagem
   // k = propriedade
   // Carro[k] = valor da propriedade
   mensagem += k + "; " + Carro[k] + "\n"; // \n = pula linha;
} // final for in

// mostra o conteúdo da mensagem
alert(mensagem);
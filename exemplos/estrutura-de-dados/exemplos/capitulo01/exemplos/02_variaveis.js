alert('Hello World!')

console.log("// Tudo que vem após barras normais duplas é um comentário em linguagem JavaScript.");

console.log('// Leia os comentários atentamente: eles explicam o código JavaScript.');

console.log('// variável é um nome simbólico para um valor.')  ;

console.log('// As variáveis são declaradas com a palavra-chave var variável; let variável; const variável = valor;');

var x;// Declara uma variável chamada x.
console.log(`var x; Declara variável com var, podendo ser let x; ou const x = 2;`);  

console.log('const x = valor; // => toda constante ao ser declarada tem que ter um valor e este não se altera durante a execução do programa.');

console.log('// Valores podem ser atribuídos às variáveis com o sinal de igual ( = )');

x = 0;// Agora a variável x tem o valor 0 
console.log(`x = 0; // Agora a variável x tem o valor 0 => ${x}`);

x // => 0: Uma variável é avaliada com seu valor.  
console.log(`aqio x vale: ${x}`);

// JavaScript aceita vários tipos de valores  
x = 1;// Números.  
console.log(`x = 1 => lê-se: x recebe 1 => ${x}`);

x = 0.01;// Apenas um tipo Number para inteiros e reais.  
console.log(`x = 1,01 \nx vale: ${x}`);

x = "hello world";
console.log(`x = "hello world"; // Tudo entre aspas duplas, aspas simples e apostrofos são Strings.\naqui x é a string: ${x} `);

x = 'JavaScript';// Apóstrofos também delimitam strings.
console.log(`x = 'JavaScript';// Apóstrofos também delimitam strings. \naqui x vale: ${x}`);

x = true;// Valores booleanos.
console.log(`x = true; // Valores booleanos.\naqui x vale: ${x}`);

x = false;// Outro valor booleano.
console.log(`x = false; // Outro valor booleano.\naqui x vale: ${x}`);

x = null;// Null é um valor especial que significa "nenhum valor".
console.log(`x = null; // Null é um valor especial que significa "nenhum valor".\naqui x vale: ${x}`);

x = undefined;// Undefined é como null. 
console.log(`x = undefined; // Undefined é como null.\naqui x vale: ${x}`);

// @ts-check
/* eslint-disable */

var num = 1; // Declara uma variável e atribui um valor 
num = 3; // {2}

var price = 1.5; // {3}
var myName = 'Packt'; // {4}
var trueValue = true; // {5}
var nullVar = null; // {6}
var und; // {7}

// você pode colocar o sinal de mais ( + ) para CONCATENAR (juntar, unir, etc) uma variável a uma string entre aspas simples ou duplas, conforme abaixo
console.log('// você pode colocar o sinal de mais ( + ) para CONCATENAR (juntar, unir, etc) uma variável a uma string entre aspas simples ou duplas, conforme abaixo:\n');
console.log('num: + num: ' + num);
console.log('myName: + myName: ' + myName);
console.log('trueValue:  + trueValue: ' + trueValue);
console.log('price: + price: ' + price);
console.log('nullVar: + nullVar' + nullVar);
console.log('und: + und: ' + und);

// ******* Variable Scope - escopo de variável
console.log('// ******* Variable Scope - escopo de variável')

var myVariable = 'global'; // mayVariable recebe a string global
console.log('var myVariable = \'global\'; // cria a variável mayVariable que recebe a string global. ' + myVariable);

myOtherVariable = 'global'; // mayOtherVariable recebe outra string global

console.log('myOtherVariable = \'global\'; // mayOtherVariable recebe outra string global' + myOtherVariavle);

// cria a função myFunction
function myFunction() {
  // dentro da função cria a variável local myVariable que recebe a string local.
  var myVariable = 'local';
  return myVariable; // a função retorna o valor da variável local myVariable
} // fim da função myFunction

// cria a função myOtherFunction
function myOtherFunction() {
  // cria a variável myOtherVariable que recebe a string local.
  myOtherVariable = 'local';
  // a função retorna o valor da variável local myOtherVariable
  return myOtherVariable;
} // fim da função myOtherVariable.

// mostra os valores das variáveis criadas acima
console.log(myVariable); // exibe o valor da variável myVariabel

// exibe o valor da função myFunction
console.log(myFunction());

// exibe o valor da variável global myOtherVariable
console.log(myOtherVariable);

// exibe o valor da função myOtherFunction
console.log(myOtherFunction());

// exibe o valor da variável global myOtherVariable
console.log(myOtherVariable);
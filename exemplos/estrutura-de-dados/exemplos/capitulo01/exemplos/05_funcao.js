// As funções são blocos de código JavaScript parametrizados que podemos chamar.
console.log('// As funções são blocos de código JavaScript parametrizados que podemos chamar.');

console.log('\nfunction plus1(x) {// Define uma função chamada "plus1", com o parâmetro "x"');
console.log('return x + 1;// Retorna um valor uma unidade maior do que o que foi passado')
console.log('}// As funções são incluídas entre chaves');

function plus1(x) {// Define uma função chamada "plus1", com o parâmetro "x"  
   return x + 1;// Retorna um valor uma unidade maior do que o que foi passado 
}// As funções são incluídas entre chaves 

let y = 3; // cria a variável y e atribui o valor 3
console.log('\nlet y = 3; // cria a variável y e atribui o valor 3');

// chama a função e atribui o valor 3 ao parâmetro x
console.log('\n// chama a função plus1 e atribui o valor 3 ao parâmetro x');

plus1(y) // => 4: y é 3; portanto, essa chamada retorna 3+1 = 4
console.log('plus1(y) // => 4: y é 3; portanto, essa chamada retorna 3 + 1 = 4');

console.log('\nvar square = function(x) { // As funções são valores e podem ser atribuídas a um variável.');
console.log('return x * x; // Calcula o valor atribuido ao parâmetro x da função');
console.log('};// Um ponto e vírgula marca o fim da atribuição.');

var square = function(x) { // As funções são valores e podem ser atribuídas a  
   // variáveis  
   return x * x; // Calcula o valor da função  
};// Um ponto e vírgula marca o fim da atribuição.  

console.log('\nsquare(plus1(y)); // a função square recebe o resultado da função plus1 que é o valor 4 => então multiplica 4 * 4 = 16: chama duas funções em uma única expressão');

square(plus1(y)); // a função square recebe o resultado da função plus1 que é o valor 4 => então multiplica 4 * 4 = 16: chama duas funções em uma única expressão
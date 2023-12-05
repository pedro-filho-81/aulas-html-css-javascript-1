// As funções são blocos de código JavaScript parametrizados que podemos chamar.
console.log('// As funções são blocos de código JavaScript parametrizados que podemos chamar.');

console.log('\nfunction plus1(x) {// Define uma função chamada "plus1", com o parâmetro "x"');
console.log('return x + 1;// Retorna um valor, uma unidade maior do que o que foi passado')
console.log('}// As funções são incluídas entre chaves');

function plus1(x) {// Define uma função chamada "plus1", com o parâmetro "x"  
   return x + 1;// Retorna um valor x mais uma unidade maior do que o que foi passado 
}// As funções são incluídas entre chaves 

let y = 3; // cria a variável y e atribui o valor 3
console.log('\nlet y = 3; // cria a variável y e atribui o valor 3');

// chama a função plus1 e atribui o valor 3 ao parâmetro x
console.log('\n// chama a função plus1 e atribui o valor 3 ao parâmetro x');

// chama a função plus1()
plus1(y) // y é 3; portanto, essa chamada retorna 3 + 1 = 4
console.log('plus1(y); // y é 3; portanto, essa chamada retorna 3 + 1 = 4');

console.log('\n// cria a variável square e atribui a ela uma função')
console.log('\nvar square = function(x) { // As funções retornam valores que podem ser atribuídas a um variável.');
console.log('return x * x; // Calcula e retorna o valor atribuido ao parâmetro x da função');
console.log('};// Um ponto e vírgula marca o fim da atribuição.');

// cria a variável square e atribui a ela a uma função
var square = function(x) { // As funções são valores e podem ser atribuídas a  
   // variáveis  
   return x * x; // Calcula e retorna o valor atribuido ao parâmetro x da função

};// Um ponto e vírgula marca o fim da atribuição.  

console.log('// chama a função square, a ela é atribuido como valor do parâmetro a função plus1()');

console.log('square(plus1(y)); // a função square recebe o valor retornado da função plus1 que é o valor 4 => então multiplica 4 * 4 = 16: chama duas funções em uma única expressão');

// chama a função square, a ela é atribuido como valor do parâmetro a função plus1()
square(plus1(y)); // a função square recebe o valor retornado da função plus1() que é o valor 4 => então multiplica 4 * 4 = 16: chama duas funções em uma única expressão.
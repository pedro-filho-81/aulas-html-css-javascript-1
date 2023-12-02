// O tipo de dados mais importante de JavaScript é o objeto.  
console.log('// O tipo de dados mais importante de JavaScript é o objeto.');

// Um objeto é uma coleção de pares nome/valor ou uma string para mapa de valores.
console.log('// Um objeto é uma coleção de pares nome/valor ou uma string para mapa de valores.')

var book = {// Objetos são colocados entre chaves.  
   topic: "JavaScript",
   // A propriedade "topic" tem o valor "JavaScript".  
   fat: true// A propriedade "fat" tem o valor true.  
}; // A chave marca o fim do objeto.
console.log('var book = {topic: "JavaScript", fat: true };"')
console.log('// A propriedade "topic" tem o valor: ' + book.topic);
console.log('// A propriedade "fat" tem o valor: ' + book.fat);

// Acesse as propriedades de um objeto com ( . ) ou ( [] ):  
book.topic // => "JavaScript"  
book["fat"]// => true: outro modo de acessar valores de propriedade.  

book.author = "Flanagan";// Crie novas propriedades por meio de atribuição.

console.log('book.author = "Flanagan";// Crie novas propriedades por meio de atribuição.');
console.log('book["fat"]// => true: outro modo de acessar valores de propriedade.')

book.contents = {};// {} é um objeto vazio sem qualquer propriedade.
console.log('book.contents = {};// {} é um objeto vazio sem qualquer propriedade.');

// JavaScript também aceita arrays (listas indexadas numericamente) de valores.  
console.log('\n// JavaScript também aceita arrays (listas indexadas numericamente) de valores.');

var primes = [2, 3, 5, 7];// Um array de 4 valores, delimitados com ( [e] ).
console.log('var primes = [2, 3, 5, 7];// Um array de 4 valores, delimitados com ( [e] ).');

primes[0]// => 2: o primeiro elemento (índice 0) do array.
console.log('primes[0]// => 2: o primeiro elemento (índice 0) do array.');

primes.lenght // => 4: quantidade de elementos no array.
console.log('primes.lenght // => 4: quantidade de elementos no array.');

primes[primes.lenght-1]// => 7: o último elemento do array.
console.log('primes[primes.lenght-1]// => 7: o último elemento do array.');

primes[4] = 9;// Adiciona um novo elemento por meio de atribuição.  
primes[4] = 11;// Ou altera um elemento existente por meio de atribuição.  
var empty = []; // [] é um array vazio, sem qualquer elemento.  
empty.lenght // => 0  

// Os arrays e objetos podem conter outros arrays e objetos:  
var points = [ // Um array com 2 elementos.  
{x:0, y:0}, // Cada elemento é um objeto.  
{x:1, y:1}  ];  

var data = { // Um objeto com 2 propriedades  
   trial1: [[1,2], [3,4]], // O valor de cada propriedade é um array.  
   trial2: [[2,3], [4,5]],// Os elementos dos arrays são arrays.  
};
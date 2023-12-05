// Dois outros tipos muito importantes que programas em JavaScript podem manipular são objetos e  arrays.

// O tipo de dados mais importante de JavaScript é o objeto.  
console.log('// O tipo de dados mais importante de JavaScript é o objeto.');

// Um objeto é uma coleção de pares nome/valor ou uma string para mapa de valores.
console.log('// Um objeto é uma coleção de pares nome/valor ou uma string para mapa de valores.')

var book = {// Objetos são colocados entre abre  chaves.  
   topic: "JavaScript",
   // A propriedade "topic" tem uma string como valor chamada "JavaScript".  
   fat: true// A propriedade "fat" tem com valor true.  
}; // A chave fechada marca o fim do objeto.

console.log('var book = {(abre chave) topic: "JavaScript", fat: true }(fecha chaves);"')
console.log('// A propriedade "topic" tem uma string como valor: ' + book.topic);
console.log('// A propriedade "fat" tem como valor booleano: ' + book.fat);

// Acesse as propriedades de um objeto com ( . )
// ou ( [] ):
// abaixo o objeto book chama a propriedade topic que vai exibir a string "JavaScript".
book.topic

// abaixo o objeto book chama a propriedade fat entre colchetes, essa é outra maneira de chamar uma propriedade
book["fat"]// => true: outro modo de acessar valores de propriedade.  

book.author = "Flanagan";// Crie novas propriedades por meio de atribuição.

console.log('book.author = "Flanagan";// Crie novas propriedades por meio de atribuição.');
console.log('book["fat"]// => true: outro modo de acessar valores de propriedade.')

book.contents = {};// {} é um objeto vazio sem qualquer propriedade.
console.log('book.contents = {};// {} é um objeto vazio sem qualquer propriedade.');

// JavaScript também aceita arrays (listas indexadas numericamente) de valores.  
console.log('\n// JavaScript também aceita arrays (listas indexadas numericamente) de valores.');

var primes = [2, 3, 5, 7];// Um array de 4 valores, delimitados com colchetes [ valores do array sempre entre colchetes ].
console.log(`var primes = ${primes}`);

console.log('var primes = [2, 3, 5, 7];// Um array de 4 valores, delimitados com abre colchetes[ valores ]fecha colchetes.');

// mostra o valor do array que está na posição 0.
primes[0]// => 2 é o primeiro elemento que está na posição 0 do array.
console.log(`primes[0] = ${primes[0]}`);

console.log('primes[0]// => 2: o primeiro elemento (índice 0) do array.');

primes.length // => 4: quantidade de elementos no array.
console.log(`primes.length = ${primes.length}`)

console.log('primes.length // => 4: quantidade de elementos no array.');

primes[primes.length-1]// => 7: o último elemento do array.
console.log(`primes[primes.length-1] = ${primes[primes.length-1]}`);

console.log('primes[primes.lenght-1]// => 7: mostra o último elemento do array.');

primes[4] = 9;// Adiciona um novo elemento por meio de atribuição.
console.log(`primes[4] = ${primes[4]}`);
console.log(`primes = ${primes}`);

console.log('primes[4] = 9;// Adiciona um novo elemento por meio de atribuição na posição 4 do array.');

primes[4] = 11;// Ou altera um elemento existente por meio de atribuição.
console.log(`primes[4] = ${primes[4] = 11}`);
console.log(`primes[] = ${primes}`);

console.log('primes[4] = 11;// adiciona o elemento 11 no lugar do elemento 9 do array.');

var empty = []; // [] é um array vazio, sem qualquer elemento.
console.log(`var emppty = [] // cria um array vazio`);

empty.lenght // => 0
console.log(`empty.length = ${empty.length}`);

// Os arrays e objetos podem conter outros arrays e objetos:  
var points = [ // Um array com 2 elementos.  
{x:0, y:0}, // Cada elemento é um objeto.  
{x:1, y:1}  ];

console.log(`var points = [{x:0, y:0},{x:1, y:-1}] ${points}`);

var data = { // Um objeto com 2 propriedades  
   trial1: [[1,2], [3,4]], // O valor de cada propriedade é um array.  
   trial2: [[2,3], [4,5]],// Os elementos dos arrays são arrays.  
}; // fim do objeto data
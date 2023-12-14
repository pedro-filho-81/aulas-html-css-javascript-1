// usando o alert no arquivo JavaScript
alert('Hello World JavaScript! Dentro do arquivo .js');

// Tudo que vem após barras normais duplas é um comentário em linguagem natural.  
console.log('\n*** COMENTÁRIOS ***\n// Tudo que vem após barras normais duplas é um comentário em linguagem natural.');

// Leia os comentários atentamente: eles explicam o código JavaScript.
console.log('// Leia os comentários atentamente: eles explicam o código JavaScript.');  

// variável é um nome simbólico para um valor.  
console.log('\n*** VARIÁVEIS ***\n// variável é um nome simbólico para um valor.');

// As variáveis são declaradas com a palavra-chave var, let ou const:
console.log('// As variáveis são declaradas com a palavra-chave var, let ou const:');

var x;// Declara uma variável chamada x.  
console.log('var x;\t// Declara uma variável chamada x.');

// Valores podem ser atribuídos às variáveis com o sinal =
console.log('// Valores podem ser atribuídos às variáveis com o sinal (=)');

x = 0; // Agora a variável x tem o valor 0  
console.log('x = 0; // Agora a variável x tem o valor 0');

x  // => 0: Uma variável é avaliada com seu valor.  
console.log('x Uma variável é avaliada com seu valor.Aqui x é ' + x);

// JavaScript aceita vários tipos de valores  
console.log('// JavaScript aceita vários tipos de valores');

x = 1;   // Números.  
console.log('x = 1;   // Números.');

x = 0.01;   // Apenas um tipo Number para inteiros e reais.  
console.log('x = 0.01;   // Apenas um tipo Number para inteiros e reais.');

x = "hello world";   // Strings de texto entre aspas.  
console.log('x = "hello world";   // Strings de texto entre aspas.');

x = 'JavaScript'; // Apóstrofos também delimitam strings.  
console.log('x = \'JavaScript\'; // Apóstrofos também delimitam strings.');

x = true;   // Valores booleanos.  
console.log('x = true;   // Valores booleanos.');

x = false;// O outro valor booleano.
console.log('x = false;// O outro valor booleano.');

x = null;// Null é um valor especial que significa "nenhum valor".  
console.log('x = null;// Null é um valor especial que significa "nenhum valor".');

x = undefined;  // Undefined é como null. 
console.log('x = undefined;  // Undefined é como null.');

/* 
   Dois outros tipos muito importantes que programas em JavaScript podem manipular são objetos e  arrays.
*/

// OBJETOS
console.log('\n*** OBJETOS ***\n/* \n\tDois outros tipos muito importantes que programas em JavaScript \n\tpodem manipular são objetos e  arrays. \n*/');

// O tipo de dados mais importante de JavaScript é o objeto.  
console.log('// O tipo de dados mais importante de JavaScript é o objeto.');

// Um objeto é uma coleção de pares nome/valor ou uma string para mapa de valores.  
console.log('// Um objeto é uma coleção de pares nome/valor ou uma string para mapa de valores.');

console.log('// cria o objeto book: ')
console.log('var book = {// Objetos são colocados entre chaves.');
console.log('\ttopic: "JavaScript",// A propriedade "topic" tem o valor "JavaScript".');
console.log('\tfat: true   // A propriedade "fat" tem o valor true.');
console.log('};// A chave marca o fim do objeto.');

var book = {// Objetos são colocados entre chaves.  
   topic: "JavaScript",// A propriedade "topic" tem o valor "JavaScript".  
   fat: true   // A propriedade "fat" tem o valor true.  
};// A chave marca o fim do objeto.

// Acesse as propriedades de um objeto com. ou []:  
console.log('// Acesse as propriedades de um objeto com ponto. ou com abre colchetes[ valores ]fecha colchetes: ');

book.topic  // exebe a string "JavaScript"  
console.log('book.topic exibe a string  "JavaScript"  ');

book["fat"] // => true: outro modo de acessar valores de propriedade.  
console.log('book["fat"] // outro modo de acessar valores de propriedade fat.');

book.author = "Flanagan";  // Crie novas propriedades por meio de atribuição.  
console.log('book.author = "Flanagan";  // O objeto book, Crie novas propriedade author que recebe a string "Flanagan".');

book.contents = {};  // {} é um objeto vazio sem qualquer propriedade. 
console.log('book.contents = {};  // {} é um objeto vazio sem qualquer propriedade.');

// ARRAYS
// JavaScript também aceita arrays (listas indexadas numericamente) de valores.  
console.log('\n*** ARRAYS ***\n// JavaScript também aceita arrays (listas indexadas numericamente) de valores.');

var primes = [2, 3, 5, 7]; // Um array de 4 valores, delimitados com [e].  
console.log('var primes = [2, 3, 5, 7]; // Um array de 4 valores, delimitados com [e].');

primes[0]   // o primeiro elemento (índice 0) do array.   
console.log('primes[0] exibe o primeiro elemento (índice 0) do array, que é ' + primes[0]);

primes.lenght  // => 4: quantidade de elementos no array.  
console.log('primes.lenght => exibe a quantidade de elementos no array, que é ' + primes.length);

primes[primes.lenght-1] // => 7: o último elemento do array.  
console.log('primes[primes.lenght-1] exibe o último elemento do array, que é ', primes[primes.length -1]);

primes[4] = 9; // Adiciona um novo elemento por meio de atribuição.  
console.log('primes[4] = 9; // Adiciona um novo elemento por meio de atribuição.');
console.log(`exibe o conteúdo do array: primes = ${primes}`);

primes[4] = 11;   // altera um elemento existente por meio de atribuição; sai o 9 entra o 11 no lugar.  
console.log('primes[4] = 11; //  altera um elemento existente por meio de atribuição;  sai o 9 entra o 11 no lugar.');
console.log(`exibe o conteúdo do array: primes = ${primes}`);

var empty = [];   // [] é um array vazio, sem qualquer elemento.  
console.log('var empty = []; // cria um array vazio, sem qualquer elemento.');

empty.lenght // => 0 exibe a quantidade de elementos dentro do array empty
console.log(`empty.lenght // exibe a quantidade de elementos dentro do array empty; que é ${empty.length}`);

// Os arrays e objetos podem conter outros arrays e objetos:
console.log('\n// Os arrays e objetos podem conter outros arrays e objetos:');
console.log('var points = [// Um array com 2 elementos.')
console.log('{x:0, y:0}, // Cada elemento é um objeto.');
console.log('{x:1, y:1}  ]; // colchete fechado é o fim do array points');

var points = [// Um array com 2 elementos.  
{x:0, y:0}, // Cada elemento é um objeto.  
{x:1, y:1}  ]; // colchete fechado é o fim do array points 

console.log('\nvar data = {// Um objeto com 2 propriedades');
console.log('\ttrial1: [[1,2], [3,4]],// O valor de cada propriedade é um array.');
console.log('\ttrial2: [[2,3], [4,5]],// Os elementos dos arrays são arrays.');
console.log('}; // chave fechada é o fim de um objeto');

var data = {// Um objeto com 2 propriedades  
   trial1: [[1,2], [3,4]],// O valor de cada propriedade é um array.  
   trial2: [[2,3], [4,5]],// Os elementos dos arrays são arrays.  
}; // chave fechada é o fim de um objeto

// OPERADORES
/*
   Uma das maneiras mais comuns de formar expressões em JavaScript é usar operadores, como segue:  
*/
console.log('\n/*\n\tUma das maneiras mais comuns de formar expressões em JavaScript \n\té usar operadores, como segue:\n*/');

// Os operadores atuam sobre os valores (operandos) para produzir um novo valor.  
console.log('// Os operadores atuam sobre os valores (operandos) para produzir um novo valor.');

// Os operadores aritméticos são os mais comuns:  
console.log('// Os operadores aritméticos são os mais comuns:');

3 + 2// => 5: adição 
console.log(`Adição => 3 + 2 = ${3 + 2}`);

3 - 2// => 1: subtração  
console.log(`Subtração => 3 - 2 = ${3 - 2}`);

3 * 2// => 6: multiplicação
console.log(`multiplicação => 3 * 2 = ${3 * 2}`);  

3 / 2// => 1.5: divisão
console.log(`Divisão => 3 / 2 = ${3 / 2}`);

3 % 2 // resto da divisão
console.log(`resto da divisão => 3 % 2 = ${3 % 2}`);

points[1].x - points[0].x  // => 1: operandos mais complicados também funcionam  
console.log(`points[1].x - points[0].x = ${points[1].x - points[0].x}  // operandos mais complicados também funcionam`);

"3" + "2"// => "32": + soma números, ou concatena strings
console.log('"3" + "2" = "32"; // o sinal de adição (+) pode ser soma números, ou concatena (unine, junta) strings');


// JavaScript define alguns operadores aritméticos de forma abreviada 
console.log('\n// JavaScript define alguns operadores aritméticos de forma abreviada ');

var count = 0; // Define uma variável 
console.log('var count = 0; // Define uma variável com o valor zero'); 

count++; // Incrementa a variável em 1
console.log(`count++, count = ${count}; // Incrementa a variável em 1`);

count--; // Decrementa a variável em 1 
console.log(`count--; count = ${count}; // Decrementa a variável em 1`);

count += 2; // Soma 2: o mesmo que count = count + 2;
console.log(`count += 2; count = ${count}; // Soma 2: o mesmo que count = count + 2;`);

count *= 3; // Multiplica por 3: o mesmo que count = count * 3;  
console.log(`count *= 3;  count = ${count}; // Multiplica por 3: o mesmo que count = count * 3;`);

count;   // => 6: nomes de variáveis também são expressões.
console.log(`count é ${count}; // exibe o valor de count / nomes de variáveis também são expressões.`);

// Os operadores de igualdade e relacionais testam se dois valores são iguais,  
console.log('\n// Os operadores de igualdade e relacionais testam se dois valores são iguais,');

// desiguais, menores que, maiores que, etc. São avaliados como verdadeiros ou falsos.  
console.log('// desiguais, menores que, maiores que, etc. São avaliados como verdadeiros ou falsos.');

var x = 2, y = 3; // Esses sinais = são atribuições e não testes de igualdade.  
console.log('var x = 2, y = 3; // Esses sinais = são atribuições e não testes de igualdade.');

x == y   // => falso: igualdade  
console.log(`Sinal de igual (==): x == y? ${x == y}`);

x != y   // => verdadeiro: desigualdade  
console.log(`Sinal de diferente (!=): x != y? ${x != y}`);

x < y    // => verdadeiro: menor que  
console.log(`Sinal de menor que (<): x < y? ${x < y}`);

x <= y   // => verdadeiro: menor ou igual a  
console.log(`Sinal de menor ou igual a (<=): x <= y? ${x <= y}`);

x > y    // => falso: maior que  
console.log(`Sinal de maior que (>): x > y? ${x > y}`);

x >= y   // => falso: maior ou igual a  
console.log(`Sinal de maior ou igual a (>=): x >= y? ${x >= y}`);

"two" == "three"  // => falso: as duas strings são diferentes  
console.log(`Sinal de igual (==): "two" == "three"? ${"two" == "three"}`);

"two" > "three"   // => verdadeiro: "tw" é alfabeticamente maior do que "th"  
console.log(`Sinal de maior que (>): "two" > "three"? ${"two" > "three"}`);

false == (x > y)  // => verdadeiro: falso é igual a falso 
console.log(`Sinal de igual (==): false == (x > y)? ${false == (x > y)}`);

// Os operadores lógicos combinam ou invertem valores booleanos  
console.log('\n// Os operadores lógicos combinam ou invertem valores booleanos');

(x == 2) && (y == 3)  // => verdadeiro: as duas comparações são verdadeiras. && é E  
console.log(`(x == 2) && (y == 3) = ${(x == 2) && (y == 3)} // as duas comparações são verdadeiras. && é E`);

(x > 3) || (y < 3)   // => falso: nenhuma das comparações é verdadeira. || é OU  
console.log(`(x > 3) || (y < 3) = ${(x > 3) || (y < 3)}  // nenhuma das comparações é verdadeira. || é OU`);

!(x == y)   // => verdadeiro: ! inverte um valor booleano 
console.log(`!(x == y) = ${!(x == y)} // Negação ( ! ) inverte um valor verdadeiro para falso ou falso para verdadeiro.`);

// FUNÇÕES
/*
   Uma função é um bloco de código JavaScript nomeado e parametrizado que você define uma vez  e, então, pode chamar repetidamente.
*/
console.log('/*\n\tUma função é um bloco de código JavaScript nomeado e parametrizado que você define uma vez  e, então, pode chamar repetidamente.\n*/');

// As funções são blocos de código JavaScript parametrizados que podemos chamar.  
console.log('\n// As funções são blocos de código JavaScript parametrizados que podemos chamar.');

function plus1(x) {// Define uma função chamada "plus1", com o parâmetro "x"  
   return x + 1;// Retorna um valor uma unidade maior do que o que foi passado  
}// As funções são incluídas entre chaves 

console.log(`function plus1(x) {// Define uma função chamada "plus1", com o parâmetro "x"`);
console.log(`return x + 1;// Retorna um valor uma unidade maior do que o que foi passado;`)
console.log('}// As funções são incluídas entre chaves ');

// chama a função plus1 e passa o valor 3 para a propriedade x
console.log('// chama a função plus1 e passa o valor 3 para a propriedade x');

console.log(`plus1(3) = ${plus1(3)} // o valor 3 é processado pela função e retorna o resultado.`);

console.log('\nVariável square recebe o valor da função.')
console.log("var square = function(x) {// As funções são valores e podem ser atribuídas a  variáveis");
console.log('return x * x;// Calcula o valor da função  ');
console.log('};// Um ponto e vírgula marca o fim da atribuição.');

var square = function(x) {// As funções são valores e podem ser atribuídas a  variáveis  
   return x * x;// Calcula o valor da função  
};// Um ponto e vírgula marca o fim da atribuição.  

console.log(`square(plus1(y)) = ${square(plus1(y))} // chama duas funções em uma única expressão e exibe o resultado.`);
square(plus1(y)); // => 16: chama duas funções em uma única expressão 

// Quando combinamos funções com objetos, obtemos métodos:  
// Quando funções recebem as propriedades de um objeto, as  chamamos de "métodos".

console.log('\n// Quando combinamos funções com objetos, obtemos métodos:');
console.log('// Quando funções recebem as propriedades de um objeto, as  chamamos de "métodos".');
console.log('// Todos os objetos de JavaScript têm métodos:');

// Todos os objetos de JavaScript têm métodos:  
var a = []; // Cria um array vazio  
console.log('var a = []; // Cria um array vazio');

a.push(1,2,3); // O método push() adiciona elementos em um array  

console.log('a.push(1,2,3); // O método push() adiciona elementos em um array');
console.log(`a = ${a}`);

a.reverse(); // Outro método: inverte a ordem dos elementos 

console.log('a.reverse(); // Outro método: inverte a ordem dos elementos');
console.log(`a = ${a}`);

// Também podemos definir nossos próprios métodos. A palavra-chave "this" se refere ao    
console.log('\n// Também podemos definir nossos próprios métodos.\nA palavra-chave "this" se refere ao');

// objeto no qual o método é definido: neste caso, o array de pontos anterior.
console.log('// objeto no qual o método é definido: neste caso, o array de pontos anterior.');
console.log('points.dist = function() {// Define um método para calcular a distância entre pontos');
console.log('var p1 = this[0]; // Primeiro elemento do array que chamamos');
console.log('var p2 = this[1]; // Segundo elemento do objeto "this"')
console.log(`var a = p2.x-p1.x; // Diferença em coordenadas X`);
console.log(`var b = p2.y-p1.y; // Diferença em coordenadas Y`);
console.log('return Math.sqrt(a*a + b*b) // O teorema de Pitágoras;');
console.log('// Math.sqrt() calcula a raiz quadrada; \n};');

points.dist = function() {// Define um método para calcular a distância entre pontos  
      var p1 = this[0]; // Primeiro elemento do array que chamamos  
      var p2 = this[1]; // Segundo elemento do objeto "this"  
      var a = p2.x-p1.x; // Diferença em coordenadas X  
      var b = p2.y-p1.y;// Diferença em coordenadas Y  
      return Math.sqrt(a*a + b*b) // O teorema de Pitágoras  b*b);
      // Math.sqrt() calcula a raiz quadrada  
   };  
   
   points.dist()// => 1,414: distância entre nossos 2 pontos
   console.log(`points.dist() = ${points.dist()} // distância entre nossos 2 pontos.`);

   /* 
      Aqui estão algumas funções cujos corpos demonstram instruções de  estruturas de controle JavaScript comuns:
   */ 
   // As instruções JavaScript incluem condicionais e laços que usam a sintaxe  
   // das linguagens C, C++, Java e outras.  
   
   function abs(x) {// Uma função para calcular o valor absoluto  
      if (x >= 0) {// A instrução if...  
         return x;// retorna o valor de x, se a comparação for verdadeira.  
      }// Este é o fim da cláusula if.  
      else {// A cláusula opcional else executa seu código se  
         return -x; // se a comparação for falsa.  
      } // Chaves são opcionais quando há 1 instrução por cláusula.  
   } // Observe as instruções return aninhadas dentro  de if/else.
   
   abs(-7); // chama a função abs para o valor -7
   console.log(`abs(-7) = ${abs(7)} // calcula o valor absoluto de -7\n\n`);

   function factorial(n) {// Uma função para calcular fatoriais  
      var product = 1;// Começa com o produto de 1  
      while(n > 1) {// Repete as instruções que estão em {}, enquanto a  
         // expressão em () for verdadeira  
         product *= n;// Atalho para product = product * n;  
         n--;// Atalho para n = n – 1  
      }// Fim do laço  
      return product; // Retorna o produto  
   }  // fim da função fatorial
   
   // chama a função fatorial para calcular o fatorial de 4
   // factorial(4)// => 24: 1*4*3*2 

console.log(`factorial(4) = ${factorial(4)} // calcula o fatorial de 4.`);

console.log(``);
console.log('');
// Os operadores atuam sobre os valores (operandos) para produzir um novo valor.
console.log('// Os operadores atuam sobre os valores (operandos) para produzir um novo valor.')

// Os operadores aritméticos são os mais comuns:  
console.log('// Os operadores aritméticos são os mais comuns:  ')

console.log(`Adição: 3 + 2 = ${3 + 2}`);
console.log(`Subtração: 3 - 2 = ${3 - 2}`);
console.log(`multiplicação: 3 * 2 = ${3 * 2}`);
console.log(`Divisão: 3 / 2 = ${3 / 2}`);

console.log(`points[1].x - points[0].x`);
console.log(`=> 1: operandos mais complicados também funcionam.`)

console.log(`"3" + "2" = "${"3" + "2"}" // (+) o sinal de mais aqui é concatenação => união de duas strings`);
console.log(`"32": + soma números, ou concatena strings\n`);

// JavaScript define alguns operadores aritméticos de forma abreviada
console.log('\n// JavaScript define alguns operadores aritméticos de forma abreviada')  
var count = 0; // Define uma variável e atribui o valor 0
console.log('var count = 0; // Define uma variável e atribui o valor zero.');
count++; // Incrementa a variável em 1
console.log('count++; // Incrementa a variável em 1');

count--;// Decrementa a variável em 1
console.log('count--;// Decrementa a variável em 1');

count += 2; // Soma 2: o mesmo que count = count + 2; 
console.log('count += 2; // Soma 2: o mesmo que count = count + 2; ');

count *= 3; // Multiplica por 3: o mesmo que count = count * 3;
console.log('count *= 3; // count vale 2 e Multiplica por 3: o mesmo que count = count * 3;');

count // => 6: nomes de variáveis também são expressões.
console.log('count // => 6 é o resultado de 2 * 3: nomes de variáveis também são expressões.');  

// Os operadores de igualdade e relacionais testam se dois valores são iguais,
console.log('\n// Os operadores de igualdade e relacionais testam se dois valores são iguais,');
console.log('// desiguais, menores que, maiores que, etc. São avaliados como verdadeiros ou falsos.')
// desiguais, menores que, maiores que, etc. São avaliados como verdadeiros ou falsos. 

var x = 2, y = 3; // Esses sinais ( = ) são atribuições e não testes  de igualdade.
console.log('var x = 2, y = 3; // Esses sinais ( = ) são atribuições e não testes  de igualdade');

x == y// => falso: igualdade  
console.log('x == y // x igual a y => falso: igualdade');

x != y// => verdadeiro: desigualdade
console.log('x != y // x diferente de y => verdadeiro: desigualdade')

x < y// => verdadeiro: menor que   
console.log('x < y// x menor que y => verdadeiro: menor que');

x <= y// => verdadeiro: menor ou igual a
console.log('x <= y // x é menor ou igual a y => verdadeiro: menor ou igual a');

x >= y// => falso: maior ou igual a
console.log('x >= y // x é maior ou  igual a y => falso: maior ou igual a');

"two" == "three"// => falso: as duas strings são diferentes
console.log('"two" == "three"// a string two é igual a string three => falso: as duas strings são diferentes');

"two" > "three"// => verdadeiro: "tw" é alfabeticamente maior do que "th"
console.log('"two" > "three" // a string two é maior que three => verdadeiro: "tw" é alfabeticamente maior do que "th"')  

false == (x > y)// => verdadeiro: falso é igual a falso
console.log('false == (x > y) // false é igual a x maior que y => verdadeiro: falso é igual a falso');

// Os operadores lógicos combinam ou invertem valores booleanos
console.log('\n// Os operadores lógicos combinam ou invertem valores booleanos'); 

console.log('(x == 2) && (y == 3) // => verdadeiro: as duas comparações são verdadeiras. && é E');

(x > 3) || (y < 3)   // => falso: nenhuma das comparações é verdadeira. || é OU
console.log('(x > 3) || (y < 3)   // => falso: nenhuma das comparações é verdadeira. || é OU');

!(x == y) // => verdadeiro:! inverte um valor booleano
console.log('!(x == y) // (x e igual a y é falso) (!falso - não falso é verdadeiro) => verdadeiro:! inverte um valor booleano');
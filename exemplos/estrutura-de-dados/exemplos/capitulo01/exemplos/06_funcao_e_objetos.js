// Quando funções recebem as propriedades de um objeto, as  
// chamamos de "métodos". Todos os objetos de JavaScript têm métodos:  
var a = []; // Cria um array vazio
console.log('var a = []; // Cria um array vazio')

a.push(1,2,3); // O método push() adiciona elementos em um array
console.log('a.push(1,2,3); // O método push() adiciona elementos em um array');

console.log(`array a = ${a} // exibe os valores do array após o método push()`); 

a.reverse();// Outro método: inverte a ordem dos elementos
console.log('a.reverse();// Outro método: inverte a ordem dos elementos\n');

/*
   Também podemos definir nossos próprios métodos. A palavra-chave "this" se refere ao objeto no qual o método é definido: neste caso, o array de pontos anterior.  
*/

points.dist = function() {// Define um método para calcular a distância entre
   // pontos  
   var p1 = this[0];// Primeiro elemento do array que chamamos  
   var p2 = this[1];// Segundo elemento do objeto "this"  
   var a = p2.x-p1.x;// Diferença em coordenadas X  
   var b = p2.y-p1.y;// Diferença em coordenadas Y  
   return Math.sqrt(a*a + b*b); // O teorema de Pitágoras 
   // Math.sqrt() calcula a raiz quadrada  
};  
console.log(`point.dist() ${points.dist()}`)
points.dist()// => 1,414: distância entre nossos 2 pontos 

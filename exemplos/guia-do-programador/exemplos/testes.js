// operador IN
// cria objeto
MeuObjeto = {
   x: "Olá",
   y: 45,
   z: 90
};
let a = "x" in MeuObjeto;
// exibe o conteúdo de x
alert(MeuObjeto.x);
alert(`Tem a letra x em MeuObjeto? ${a} `);
// tem y em meuObjeto?
a = "y" in MeuObjeto;
alert(MeuObjeto.y)
alert(`Tem a y in meuObjeto? ${a}`);

/***********************/

alert(`typeof "Olá" é uma: ${ typeof "Olá"}`);


alert(`typeof 25 é uma: ${ typeof 25}`);
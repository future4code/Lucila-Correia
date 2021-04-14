//Exercicio 1

//a. O que vai ser impresso no console?

function minhaFuncao(variavel) {
  return variavel * 5;
}

console.log(minhaFuncao(2));
console.log(minhaFuncao(10));

// Resp: Será impresso o número 10 e 50, pois ambos multiplicados por 5

//b. O que aconteceria se retirasse os dois `console.log` e simplesmente invocasse a função `minhaFuncao(2)` e `minhaFuncao(10)`? O que apareceria no console?

function minhaFuncao(variavel) {
  return variavel * 5;
}

minhaFuncao(2);
minhaFuncao(10);

// Resp: Vai dar erro , meu console não tem como verificar o que acontece, só sei que dá erro.

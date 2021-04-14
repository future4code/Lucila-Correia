//Exercicio 2

//a. Explicite quais são as saídas impressas no console

let arrayDeNomes = ["Darvas", "Caio", "João", "Paulinha", "Chijo"];

const outraFuncao = function (array) {
  for (let i = 0; i < 2; i++) {
    console.log(array[i]);
  }
};

outraFuncao(arrayDeNomes);

// resp: Caio e Darvas

// ----------------------------------------------

//b. Se `arrayDeNomes` mudasse de valor para `["Amanda", "Caio"]`, o que vai ser impresso no console?

let arrayDeNomes = ["Amanda", "Caio"];

const outraFuncao = function (array) {
  for (let i = 0; i < 2; i++) {
    console.log(array[i]);
  }
};

outraFuncao(arrayDeNomes);

// Resp: Amanda e Caio

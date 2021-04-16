//Exercicio 4

// a. A função não deve receber nenhum parâmetro e deve imprimir uma mensagem falando algumas informações sobre você, como:

const primeiroNome = "Lucila";

const idade = "27";

const localização = "são Paulo";

const formação = "estudante";

console.log(
  "Eu sou",
  primeiroNome,
  "tenho",
  idade,
  "moro em",
  localização,
  "e sou",
  formação
);

// b.  Agora escreva uma função que receba 4 parâmetros que correspondem às informações de uma pessoa: o nome (`string`), a idade (`number`), a cidade (`string`) e um `boolean` que representa se é estudante ou não. Ela deve retornar uma `string` que unifique todas as informações da pessoa em uma só mensagem com o template:

function imprimirDados(nome, number, cidade, formado) {
  console.log(
    "Meu" + nome,
    "Tenho" + number,
    "moro em" + cidade,
    "sou" + formado
  );
}

imprimirDados("Lucila");
imprimirDados(27);
imprimirDados("são Paulo");
imprimirDados("estudante");

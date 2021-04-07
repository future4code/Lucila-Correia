// Exercicio 3

const numero = Number(prompt("Digite o primeiro número."));

if (numero > 0) {
  console.log("Esse número passou no teste");
  let mensagem = "Essa mensagem é secreta!!!";
}

console.log(mensagem);

/* Perguntas e Respostas

a. O que a primeira linha está fazendo?
-Resp: Está definindo um nome da variável e pedindo um informação para usuário

b. Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?
-Resp: "Esse número passou no teste" 
Ocorre um erro no console

c. Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.
-Resp: 

const numero = Number(prompt("Digite o primeiro número."));

if (numero > 0) {
  console.log("Esse número passou no teste");
  let mensagem = "Essa mensagem é secreta!!!";
  else {
    console.log ("Esse núemro não passou no teste")
  }
}
*/

// Exercicio 2

let fruta = prompt("Escolha uma fruta");
let preco;
switch (fruta) {
  case "Laranja":
    preco = 3.5;
    break;
  case "Maçã":
    preco = 2.25;
    break;
  case "Uva":
    preco = 0.3;
    break;
  case "Pêra":
    preco = 5.5;
  default:
    preco = 5;
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco);

/* Perguntas e Respostas

a. Para que serve o código acima?
-Resp: para simplicar 

b. Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?
-Resp: O produto da fruta maça é 5

c. Considere que um usuário queira comprar uma `Pêra`, qual seria a mensagem impressa no console se retirássemos o `break` que está logo acima do `default` (o `break` indicado pelo comentário "BREAK PARA O ITEM c.")?
-Resp: O produto da fruta Pêra é 5.5
*/

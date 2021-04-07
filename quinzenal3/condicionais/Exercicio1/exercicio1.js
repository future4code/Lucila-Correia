// Exercicio 1

const respostaDoUsuario = prompt("Digite o número que você quer testar");
const numero = Number(respostaDoUsuario);

if (numero % 2 === 0) {
  console.log("Passou no teste.");
} else {
  console.log("Não passou no teste.");
}

/* Perguntas e Respostas 
Qual o teste que ele realiza? 
-Resp: Ele faz a pergunta para o usuário para atribuir um número

Para que tipos de números ele imprime no console "Passou no teste"?
-Resp: para os números pares

Para que tipos de números a mensagem é "Não passou no teste"? 
-Resp: para os numeros impares
*/

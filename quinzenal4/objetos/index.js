let postagem {

}
const post = []
function postagemUsuario() {
  titulo = document.getElementById("titulo-post").value;
  autor = document.getElementById("autor-post").value;
  conteudo = document.getElementById("conteudo-posts").value;

  let blog = document.getElementById("container-de-posts");
  blog.innerHTML += `<h1>${post.titulo}</h1>`;
  const inputTitulo = document.getElementById("titulo-post");
  inputTitulo.value = "";

  blog.innerHTML += `<h2>${post.autor}</h2>`;
  const inputAutor = document.getElementById("autor-post");
  inputAutor.value = "";

  blog.innerHTML += `<h3>${post.conteudo}</h3>`;
  const textoArea = document.getElementById("conteudo-post");
  textoArea.value = "";

  console.log(post.titulo);
  console.log(post.autor);
  console.log(post.conteudo);
  console.log(post);

  novaPostagem.push(post);
  console.log(novaPostagem);
}

class Post {
    constructor (
        titulo,
        autor,
        urlImagem,
        conteudo
    ) {
        this.titulo = titulo;
        this.autor = autor;
        this.urlImagem = urlImagem
        this.conteudo = conteudo
    }
}

const bancoDePosts = [];

const cadastrar = () => {
    let titulo = document.getElementById("titulo").value;
    let autor = document.getElementById("autor").value;
    let imagem = document.getElementById("imagem").value;
    let conteudo = document.getElementById("conteudo").value;

    let post = new Post(titulo, autor, imagem, conteudo)

    bancoDePosts.push(post);
    
    const listaDePosts = document.getElementById("lista-de-posts");
    listaDePosts.innerHTML = "";
    
    for (let postCadastrado of bancoDePosts) {
        listaDePosts.innerHTML += "<h2 class='titulo-de-post'>" + postCadastrado.titulo + "</h2>";
        listaDePosts.innerHTML += "<p class='autor-do-post'>" + postCadastrado.autor + "</p>";
        listaDePosts.innerHTML += "<img src=" + postCadastrado.imagem + ">";
        listaDePosts.innerHTML += "<p class='conteudo-do-post'>" + postCadastrado.conteudo + "</p>";
    }

    document.getElementById("titulo").value = "";
    document.getElementById("autor").value = "";
    document.getElementById("imagem").value = "";
    document.getElementById("conteudo").value = "";
}

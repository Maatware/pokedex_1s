const botaoAlterarTema = document.getElementById("botao_alterar_tema");
const body = document.querySelector("body");
const imagemBotaoTrocaTema = document.querySelector(".imagem_botao");

botaoAlterarTema.addEventListener("click", () => {
    const ModoEscuroAtivo = body.classList.contains("modo_escuro");
    body.classList.toggle("modo_escuro")
    
    if (ModoEscuroAtivo) {
        imagemBotaoTrocaTema.setAttribute("src", "./src/imagens/sun.png");
    }
    else {
        imagemBotaoTrocaTema.setAttribute("src", "./src/imagens/moon.png");
    }
});
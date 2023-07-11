const personagens = document.querySelectorAll(".personagem");

personagens.forEach((personagem) => {
  personagem.addEventListener("mouseenter", () => {
    if (window.innerWidth < 450) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    removerSelecaoDoPersonagem();

    personagem.classList.add("selecionado");

    alterarImagemPersonagemSelecionado(personagem);

    alterarNomePersonagemSelecionado(personagem);

    alterarDescricaoPersonagem(personagem);
  });
});

function alterarDescricaoPersonagem(personagem) {
  const descricaoPersonagem = document.querySelector("#descricaoPersonagem");
  descricaoPersonagem.innerText = personagem.getAttribute("data-description");
}

function alterarNomePersonagemSelecionado(personagem) {
  const nomePersonagem = document.querySelector("#nomePersonagem");
  nomePersonagem.innerText = personagem.getAttribute("data-name");
}

function alterarImagemPersonagemSelecionado(personagem) {
  const imgPersonagemGrande = document.querySelector(".personagemGrande");
  const idPersonagem = personagem.attributes.id.value;
  imgPersonagemGrande.src = `./src/img/card-${idPersonagem}.png`;
}

function removerSelecaoDoPersonagem() {
  const personagemSelecionado = document.querySelector(".selecionado");
  personagemSelecionado.classList.remove("selecionado");
}

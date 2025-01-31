let listaJogos = [];
function alterarStatus(id) {
  let gameClicado = document.getElementById(`game-${id}`);
  let imagem = gameClicado.querySelector(".dashboard__item__img");
  let botao = gameClicado.querySelector(".dashboard__item__button");
  let nomeJogo = gameClicado.querySelector(".dashboard__item__name");
  let acao = "";

  function imprimirQuantidadeJogosAlugados() {
    console.log(`Total de jogos alugados: ${listaJogos.length}`);
  }

  if (imagem.classList.contains("dashboard__item__img--rented")) {
    acao = "devolver";
    let confirmar = prompt(
      `Tem certeza que quer ${acao} este jogo? digite ${acao} `
    );
    if (confirmar === acao) {
      imagem.classList.remove("dashboard__item__img--rented");
      botao.classList.remove("dashboard__item__button--return");
      botao.textContent = "Alugar";
      // Remover jogo da lista
      listaJogos = listaJogos.filter((jogo) => jogo !== id);
      console.log("Jogos devolvido com sucesso!");
      imprimirQuantidadeJogosAlugados();
    }
  } else {
    acao = "alugar";
    confirmar = prompt(
      `Tem certeza que quer ${acao} este jogo? digite ${acao} `
    );
    if (confirmar === acao) {
      imagem.classList.add("dashboard__item__img--rented");
      botao.classList.add("dashboard__item__button--return");
      botao.textContent = "Devolver";
      // Adicionar jogo à lista
      if (!listaJogos.includes(id)) {
        listaJogos.push(id);
        console.log("Jogos alugados:", listaJogos);
        imprimirQuantidadeJogosAlugados();
      }
    }
  }
}

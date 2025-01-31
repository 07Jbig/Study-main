function sortear() {
  let quantidade = parseInt(document.getElementById("quantidade").value);
  let de = parseInt(document.getElementById("de").value);
  let ate = parseInt(document.getElementById("ate").value);

  if (isNaN(quantidade) || isNaN(de) || isNaN(ate)) {
    alert("Por favor, insira apenas números válidos.");
    return;
  }

  if (de >= ate) {
    alert('Campo "do" deve ser inferior ao campo "ate" ');
    document.getElementById("de").value = "";
    document.getElementById("ate").value = "";
    return;
  }

  // Verifique se a quantidade é válida
  if (quantidade <= 0 || de >= ate) {
    alert("Por favor, insira valores válidos.");
    return;
  }

  let sorteados = [];

  // Controlar a quantidade de números.
  for (let i = 0; i < quantidade; i++) {
    let numero = obterNumeroAleatorio(de, ate);

    while (sorteados.includes(numero)) {
      numero = obterNumeroAleatorio(de, ate);
      try {
        numeros = gerarNumerosAleatorios(qtd, inicio, fim);
        console.log("Números gerados:", numeros);
      } catch (e) {
        console.error("Erro:", e.message);
        setTimeout(() => {
          location.reload(); // Reinicia a página após 5 segundos
        }, 3000);
      }
      alert(
        "Não é possivel obter números aleatórios recarregue a página e tente outros números"
      );
    }
    sorteados.push(numero);
  }
  let resultado = document.getElementById("resultado");
  resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados}</label>`;

  alterarStatusBotao();
}

function obterNumeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min; // Inclui o max
}

function reiniciar() {
  document.getElementById("quantidade").value = "";
  document.getElementById("de").value = "";
  document.getElementById("ate").value = "";
  document.getElementById("resultado").innerHTML =
    '<label class="texto__paragrafo">Números sorteados: nenhum até agora</label>';
  alterarStatusBotao(); // Chama a função para alterar o status do botão
}

function alterarStatusBotao() {
  let botao = document.getElementById("btn-reiniciar");
  if (botao.classList.contains("container__botao-desabilitado")) {
    botao.classList.remove("container__botao-desabilitado");
    botao.classList.add("container__botao");
  } else {
    botao.classList.remove("container__botao");
    botao.classList.add("container__botao-desabilitado");
  }
}

// Chama a função para garantir que o botão comece desabilitado ao carregar a página
function sortear() {
  let quantidade = parseInt(document.getElementById("quantidade").value);
  let de = parseInt(document.getElementById("de").value);
  let ate = parseInt(document.getElementById("ate").value);

  if (isNaN(quantidade) || isNaN(de) || isNaN(ate)) {
    alert("Por favor, insira apenas números válidos.");
    return;
  }

  if (de >= ate) {
    alert('Campo "de" deve ser inferior ao campo "ate".');
    document.getElementById("de").value = "";
    document.getElementById("ate").value = "";
    return;
  }

  // Calcule a quantidade de números disponíveis no intervalo
  const numerosDisponiveis = ate - de + 1;

  // Verifique se a quantidade solicitada é maior do que a quantidade disponível
  if (quantidade <= 0 || quantidade > numerosDisponiveis) {
    alert(
      `ERRO: Não consigo pedir ${quantidade} números aleatórios de ${de} até ${ate}.`
    );
    return;
  }

  // Verifique se a quantidade é válida
  if (quantidade <= 0 || de >= ate) {
    alert("Por favor, insira valores válidos.");
    return;
  }

  let sorteados = [];

  // Controlar a quantidade de números.
  for (let i = 0; i < quantidade; i++) {
    let numero = obterNumeroAleatorio(de, ate);

    while (sorteados.includes(numero)) {
      numero = obterNumeroAleatorio(de, ate);
      try {
        numeros = gerarNumerosAleatorios(qtd, inicio, fim);
        console.log("Números gerados:", numeros);
      } catch (e) {
        console.error("Erro:", e.message);
        setTimeout(() => {
          location.reload(); // Reinicia a página após 5 segundos
        }, 3000);
      }
      alert(
        "Não é possivel obter números aleatórios recarregue a página e tente outros números"
      );
    }
    sorteados.push(numero);
  }
  let resultado = document.getElementById("resultado");
  resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados}</label>`;

  alterarStatusBotao();
}

function obterNumeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min; // Inclui o max
}

function reiniciar() {
  document.getElementById("quantidade").value = "";
  document.getElementById("de").value = "";
  document.getElementById("ate").value = "";
  document.getElementById("resultado").innerHTML =
    '<label class="texto__paragrafo">Números sorteados: nenhum até agora</label>';
  alterarStatusBotao(); // Chama a função para alterar o status do botão
}

function alterarStatusBotao() {
  let botao = document.getElementById("btn-reiniciar");
  if (botao.classList.contains("container__botao-desabilitado")) {
    botao.classList.remove("container__botao-desabilitado");
    botao.classList.add("container__botao");
  } else {
    botao.classList.remove("container__botao");
    botao.classList.add("container__botao-desabilitado");
  }
}

// Chama a função para garantir que o botão comece desabilitado ao carregar a página

//lista de amigos
let amigos = [];
function adicionar() {
  // ids
  let nomeInput = document.getElementById("nome-amigo");
  let lista = document.getElementById("lista-amigos");
  // trazer valor
  let nomeAmigos = nomeInput.value;

  // impossibilitar de colocar um nome vazio
  if (nomeAmigos == "") {
    alert("Insira um nome para adicionar a lista de amigos.");
  } else {
    // Mostrar lista no site
    lista.innerHTML = lista.innerHTML + ` ${nomeAmigos},`;

    //Adicionar amigo a lista
    amigos.push(nomeAmigos);
    console.log(amigos);
    // Atualizar a exibição da lista
    lista.innerHTML = amigos.join(", ");
  }
  // deixar nome vazio após envio
  nomeInput.value = "";
}

function sortear() {
  let sorteio = document.getElementById("lista-sorteio");
  embaralhar(amigos);
  if (amigos.length == 1) {
    alert(`É necessário ter mais pessoas para sortear.`);
  } else
    for (let i = 0; i < amigos.length; i++) {
      if (i == amigos.length - 1) {
        sorteio.innerHTML =
          sorteio.innerHTML + amigos[i] + " --> " + amigos[0] + "<br/>";
      } else {
        sorteio.innerHTML =
          sorteio.innerHTML + amigos[i] + " --> " + amigos[i + 1] + "<br/>";
      }
    }
}

function embaralhar(lista) {
  for (let indice = lista.length; indice; indice--) {
    const indiceAleatorio = Math.floor(Math.random() * indice);
    [lista[indice - 1], lista[indiceAleatorio]] = [
      lista[indiceAleatorio],
      lista[indice - 1],
    ];
  }
}

function reiniciar() {
  amigos = [];
  document.getElementById("lista-amigos").innerHTML = "";
  document.getElementById("nome-amigo").value = "";
  document.getElementById("lista-sorteio").innerHTML = "";
}

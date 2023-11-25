var valorDoInput = document.querySelector("input#nums");
const mensagens = document.querySelector("select#info");
var listaDeNumeros = [];
function adicionarValor() {
  let numeroInformado = Number(valorDoInput.value);
  let confirm = true;
  for (let item in listaDeNumeros) {
    if (listaDeNumeros[item] == numeroInformado) {
      window.alert(
        "O valor informado já foi adicionado. Por favor informe um valor diferente!!!"
      );
      confirm = false;
    }
  }
  if (confirm == true) {
    if (numeroInformado > 100) {
      window.alert("O valor informado não pode ser maior do que 100!!!");
    } else if (numeroInformado < 0) {
      window.alert("O valor informado não pode ser menor do que 0!!!");
    } else if (valorDoInput.value.length == 0) {
      window.alert("Informe um valor dentro da caixa para prosseguir!!!");
    } else {
      let novaOpcao = document.createElement("option");
      novaOpcao.text = `Valor ${numeroInformado} adicionado`;
      listaDeNumeros.push(numeroInformado);
      mensagens.appendChild(novaOpcao);
    }
  }
}

function finalizar() {
  var informacoes = document.querySelector("div#informacoes");
  let somaDosValores = 0;
  for (item in listaDeNumeros) {
    somaDosValores += listaDeNumeros[item];
  }

  informacoes.innerHTML = `<p>Ao todo, temos ${
    listaDeNumeros.length
  } valores cadastrados</p> <p>O maior valor informado foi ${Math.max.apply(
    null,
    listaDeNumeros
  )}</p> <p>O menor valor informado foi ${Math.min.apply(
    null,
    listaDeNumeros
  )}</p> <p>Somando todos os valores, temos ${somaDosValores}</p> <p>A média dos valores digitados é ${
    (somaDosValores / listaDeNumeros.length).toFixed(1)
  }</p>`;
}

function limpar() {
  let confirm = window.prompt('Tem certeza que deseja reiniciar? [S/N]')
  while (true)
    if (confirm[0] == 's' || confirm[0] == 'S') {
      listaDeNumeros = []
      mensagens.innerHTML = ''
      informacoes.innerHTML = ''
      break
    } else if (confirm[0] == 'n' || confirm[0] == 'S') {
      break
    } else {
      confirm = window.prompt('Tem certeza que deseja reiniciar? [S/N]')
    }
} 
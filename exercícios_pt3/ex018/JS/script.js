var valorDoInput = document.querySelector("input#nums");
const mensagens = document.querySelector("select#info");
var informacoes = document.querySelector("div#informacoes");
var listaDeNumeros = [];
function adicionarValor() {
  let numeroInformado = Number(valorDoInput.value);
  let confirm = true;
  for (let item in listaDeNumeros) {
    if (listaDeNumeros[item] == numeroInformado) {
      window.alert(
        "[ERRO] O valor informado já foi adicionado. Por favor informe um valor diferente!!!"
      );
      confirm = false;
    }
  }
  if (confirm == true) {
    if (numeroInformado > 100) {
      window.alert("[ERRO] O valor informado não pode ser maior do que 100!!!");
    } else if (numeroInformado < 0) {
      window.alert("[ERRO] O valor informado não pode ser menor do que 0!!!");
    } else if (valorDoInput.value.length == 0) {
      window.alert(
        "[ERRO] Informe um valor dentro da caixa para prosseguir!!!"
      );
    } else {
      let novaOpcao = document.createElement("option");
      novaOpcao.text = `Valor ${numeroInformado} adicionado`;
      listaDeNumeros.push(numeroInformado);
      mensagens.appendChild(novaOpcao);
    }
  }
  valorDoInput.value = "";
  valorDoInput.focus();
  informacoes.innerHTML = "";
}

function finalizar() {
  let somaDosValores = 0;
  if (listaDeNumeros.length == 0) {
    window.alert("[ERRO] Adicione algum valor para continuar!!!");
  } else {
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
    )}</p> <p>Somando todos os valores, temos ${somaDosValores}</p> <p>A média dos valores digitados é ${(
      somaDosValores / listaDeNumeros.length
    )
      .toFixed(1)
      .replace(".", ",")}</p>`;
  }
}

function limpar() {
  let confirm = window.confirm("Tem certeza que deseja reiniciar?");
  if (confirm == true) {
    listaDeNumeros = [];
    mensagens.innerHTML = "";
    informacoes.innerHTML = "";
  }
}

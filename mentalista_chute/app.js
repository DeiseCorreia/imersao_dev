var numeroSecreto = parseInt(Math.random() * 11);

function Chutar() {
  var elementoResultado = document.getElementById("resultado");
  var chute = parseInt(document.getElementById("valor").value);
  console.log(chute);

  if (chute > 10 || chute < 0) {
    //já verifica antes se é maior do que 10
    elementoResultado.innerHTML = "Digite Novamente um número entre 0 a 10"; //linha extra somente para verificar se pode entrar no else
  } else if (chute == numeroSecreto) {
    elementoResultado.innerHTML = "Parabéns você acertou!";
  } else {
    elementoResultado.innerHTML = "Que pena!não foi dessa vez";
    if (numeroSecreto > chute) {
      elementoResultado.innerHTML =
        " O numero secreto é maior,tente um numero menor ou no meio";
    } else {
      elementoResultado.innerHTML =
        " O numero secreto é menor,tente um número no meio";
    }
  }
}

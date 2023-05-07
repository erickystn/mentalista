var numeroSecreto = parseInt(Math.random() * 11);
var tentativas = 3;

function Chutar() {
  var elementoResultado = document.getElementById("resultado");

  if (tentativas > 0) {
    var chute = parseInt(document.getElementById("valor").value);

    if (chute == numeroSecreto) {
      elementoResultado.innerHTML = "Você Acertou!";
      console.log("Acertou!");
      tentativas = 0;
    } else if (chute < 0 || chute > 10 || chute == "" || chute == undefined) {
      elementoResultado.innerHTML = "Digite numeros de 0 a 10";
      console.log("Digite numeros de 0 a 10!");
    } else {
      elementoResultado.innerHTML = "Você errou!";
      if (chute < numeroSecreto) {
        elementoResultado.innerHTML = " Voce errou, numero é maior! ";
      } else {
        elementoResultado.innerHTML = "Voce errou, o numero é menor!";
      }
    }
    tentativas--;
  } else {
    document.getElementById("bouton").setAttribute("disabled", "disabled");
    elementoResultado.innerHTML =
    "<br> <br>" + "Numero de tentativas Excedidas";
  }
}
let numeroSecreto = Math.floor(Math.random() * 100) + 1;
let tentativasRestantes = 20;
let pontos = 0;
let jogoContinua = true;

document.getElementById("enviar").addEventListener("click", function() {
  if (jogoContinua) {
    let palpite = document.getElementById("palpite").value;

    if (palpite == numeroSecreto) {
      document.getElementById("mensagem").innerHTML = "Parabéns! Você acertou o número secreto!";
      pontos += 10; // adicionar pontos por acertar o número secreto
      document.getElementById("pontos").innerHTML = "Pontos: " + pontos;
      numeroSecreto = Math.floor(Math.random() * 100) + 1; // gerar novo número secreto
    } else if (palpite < numeroSecreto) {
      document.getElementById("mensagem").innerHTML = "O número secreto é maior que " + palpite + ".";
      tentativasRestantes--;
      document.getElementById("tentativas-restantes").innerHTML = tentativasRestantes;
    } else {
      document.getElementById("mensagem").innerHTML = "O número secreto é menor que " + palpite + ".";
      tentativasRestantes--;
      document.getElementById("tentativas-restantes").innerHTML = tentativasRestantes;
    }

    if (tentativasRestantes == 0) {
      jogoContinua = false;
      document.getElementById("mensagem").innerHTML = "Game over! O número secreto era " + numeroSecreto + ".";
    }
  }
});

// adicionar evento de clique para a loja
document.getElementById("comprar-tentativas").addEventListener("click", function() {
    if (pontos >= 10) {
      let opcao = prompt("Escolha uma opção:\n1. Comprar 5 tentativas adicionais por 10 pontos\n2. Comprar 10 tentativas adicionais por 20 pontos\n3. Comprar 20 tentativas adicionais por 40 pontos");
      switch (opcao) {
        case "1":
          pontos -= 10;
          tentativasRestantes += 5;
          document.getElementById("pontos").innerHTML = "Pontos: " + pontos;
          document.getElementById("tentativas-restantes").innerHTML = tentativasRestantes;
          jogoContinua = true;
          break;
        case "2":
          if (pontos >= 20) {
            pontos -= 20;
            tentativasRestantes += 10;
            document.getElementById("pontos").innerHTML = "Pontos: " + pontos;
            document.getElementById("tentativas-restantes").innerHTML = tentativasRestantes;
            jogoContinua = true;
          } else {
            alert("Você não tem pontos suficientes para comprar essa opção.");
          }
          break;
        case "3":
          if (pontos >= 40) {
            pontos -= 40;
            tentativasRestantes += 20;
            document.getElementById("pontos").innerHTML = "Pontos: " + pontos;
            document.getElementById("tentativas-restantes").innerHTML = tentativasRestantes;
            jogoContinua = true;
          } else {
            alert("Você não tem pontos suficientes para comprar essa opção.");
          }
          break;
        default:
          alert("Opção inválida.");
      }
    } else {
      alert("Você não tem pontos suficientes para comprar tentativas adicionais.");
    }
  });
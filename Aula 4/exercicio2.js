function ex2 () {
  let numeroCerto = Math.floor((Math.random() * 100) + 1);
  let chute = 0
  let numeroDeTentativas = 0

  while (chute !== numeroCerto) {
    chute = Number(prompt("Diga um número de 1 a 20"));
    if (chute > numeroCerto) {
      alert("Abaixo!");
    } else if (chute < numeroCerto) {
      alert("Acima!");
    }
    numeroDeTentativas = numeroDeTentativas + 1
  }

  console.log("Você acertou!");
  console.log("Você precisou de", numeroDeTentativas, "tentativas.");

}


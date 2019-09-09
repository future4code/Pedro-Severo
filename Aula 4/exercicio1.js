

function ex1() {
 
    const numeroCerto = 13
    let chute = 0
    let numeroDeTentativas = 0

    while (chute !== numeroCerto) {
      chute = Number(prompt("Diga um número de 1 a 20"));
      if (chute > 13) {
        alert("Abaixo!");
      } else if (chute < 13) {
        alert("Acima!");
      }
      numeroDeTentativas = numeroDeTentativas + 1
    }

    console.log("Você acertou!");
    console.log("Você precisou de", numeroDeTentativas, "tentativas.");
}



//1

function ex1ab() {

  const primeiroNumero = Number(prompt("coloque um número:"));
  const segundoNumero = Number(prompt("coloque outro número:"));
  const terceiroNumero = Number(prompt("só mais um número:"));

// 1a

  if (primeiroNumero === segundoNumero) {
    console.log ("Erro");
  }
    else if (primeiroNumero > segundoNumero) {
      console.log (primeiroNumero, segundoNumero);
    }
    else if (primeiroNumero < segundoNumero) {
      console.log (segundoNumero, primeiroNumero);
    }


//1b

  if (primeiroNumero === segundoNumero || primeiroNumero === terceiroNumero || segundoNumero === terceiroNumero) {
    console.log ("Erro");
  }
    else if (primeiroNumero > segundoNumero && primeiroNumero > terceiroNumero) {
      if (segundoNumero > terceiroNumero) {
        console.log(primeiroNumero, segundoNumero, terceiroNumero);
      }
        else {
          console.log(primeiroNumero, terceiroNumero, segundoNumero);
        }
    }
    else if (segundoNumero > primeiroNumero && segundoNumero > terceiroNumero) {
      if (primeiroNumero > terceiroNumero) {
        console.log(segundoNumero, primeiroNumero, terceiroNumero);
      }
        else {
          console.log(segundoNumero, terceiroNumero, primeiroNumero);
        }
    }
    else {
      if (primeiroNumero > segundoNumero) {
      console.log(terceiroNumero, primeiroNumero, segundoNumero)
      }
        else {
          console.log(terceiroNumero, segundoNumero, primeiroNumero);
        }
    }

}


function ex2ab () {

//2a

const animal = confirm("É um animal?")
​
if (animal === true) {
    const temPelo = confirm("Tem Pelo?");
    if (temPelo === true) {
        const late = confirm("Late?");
        if (late === true) {
            console.log("É um cachorro")
        } else {
            console.log("É um gato");
        }
    } else {
        const voa = confirm("Voa?");
        if (voa === true) {
            console.log("É um pássaro");
        } else {
            console.log("É um peixe");
        }
    }
} else {
    console.log("É uma pedra");
}

  //2b

if (animal === true) {
    const temPelo = confirm("Tem Pelo?");
    if (temPelo === true) {
        const late = confirm("Late?");
        if (late === true) {
            console.log("É um cachorro")
        } else {
            const roi = confirm("É um roedor?");
              if (roi === true) {
              console.log("É um rato");
              }
              else {
                console.log("É um gato")
              } 
        }
    } else {
        const voa = confirm("Voa?");
        if (voa === true) {
            console.log("É um pássaro");
        } else {
            const anfibio = confirm ("é um anfíbio");
            if (anfibio === true) {
              console.log("É um sapo");
            }
            else {
              console.log ("É um peixe");
            }
        }
    }
} else {
    const planta = confirm("É uma planta?");
    if (voa === true) {
    console.log("É uma planta");
    }
    else {
      console.log("É uma pedra");
    }
}

}
//3

function ex3 () {

const nomeDoCliente = prompt("Seu nome Completo:");
const tipoDoJogo = prompt("Tipo de jogo:");
const etapaDoJogo = prompt("Etapa do jogo:");
const categoria = Number(prompt("Categoria:"));
const ingressos = Number(prompt("Quantidade de ingresso:"));


console.log("Nome do Cliente: ", nomeDoCliente);


if (tipoDoJogo === "NA") {
  console.log ("Tipo de Jogo: nacional.");
} 
else {
  console.log ("Tipo de Jogo: internacional.");
}


if (etapaDoJogo === "SF") {
  console.log ("Etapa do Jogo: semifinal.");
}
else if (etapaDoJogo === "DT") {
  console.log ("Etapa do Jogo: decisão de terceiro lugar.");
}
else if (etapaDoJogo === "FI") {
  console.log ("Etapa do Jogo: final.");
}


console.log ("Categoria: ", categoria);
console.log ("Quantidade de ingressos: ", ingressos, "ingressos")


if (etapaDoJogo === "SF" && categoria === 1) { 
    if (tipoDoJogo === "NA") {
      console.log("Valor do ingresso: R$",1320 * ingressos, ",00");
    }
    else if(tipoDoJogo === "IN") {
      console.log("Valor do ingresso: U$$", 1320 * 4.1 * ingressos, ",00");
    }
}
else if (etapaDoJogo === "SF" && categoria === 2)  {
    if (tipoDoJogo === "NA") {
      console.log("Valor do ingresso: R$",880 * ingressos, ",00");
    }
    else if (tipoDoJogo === "IN") {
      console.log("Valor do ingresso: U$$", 880 * 4.1 * ingressos, ",00");
}
}
else if (etapaDoJogo === "SF" && categoria === 3){
      if (tipoDoJogo === "NA") {
      console.log("Valor do ingresso: R$",550 * ingressos, ",00");
    }
    else if(tipoDoJogo === "IN") {
      console.log("Valor do ingresso: U$$", 550 * 4.1 * ingressos, ",00");
    }
}
else if (etapaDoJogo === "SF" && categoria === 4){
      if (tipoDoJogo === "NA") {
      console.log("Valor do ingresso: R$",220 * ingressos, ",00");
    }
    else if (tipoDoJogo === "IN") {
      console.log("Valor do ingresso: U$$", 220 * 4.1 * ingressos, ",00");
    }
}
else if (etapaDoJogo === "DT" && categoria === 1){
      if (tipoDoJogo === "NA") {
      console.log("Valor do ingresso: R$",660 * ingressos, ",00");
    }
    else if (tipoDoJogo === "IN") {
      console.log("Valor do ingresso: U$$", 660 * 4.1 * ingressos, ",00");
    }
}
else if (etapaDoJogo === "DT" && categoria === 2){
      if (tipoDoJogo === "NA") {
      console.log("Valor do ingresso: R$", 440 * ingressos, ",00");
    }
    else if (tipoDoJogo === "IN") {
      console.log("Valor do ingresso: U$$", 440 * 4.1 * ingressos, ",00");
    }
}
else if (etapaDoJogo === "DT" && categoria === 3){
      if (tipoDoJogo === "NA") {
      console.log("Valor do ingresso: R$", 330 * ingressos, ",00");
    }
    else if (tipoDoJogo === "IN") {
      console.log("Valor do ingresso: U$$", 330 * 4.1 * ingressos, ",00");
    }
}
else if (etapaDoJogo === "DT" && categoria === 4){
      if (tipoDoJogo === "NA") {
      console.log("Valor do ingresso: R$", 170 * ingressos, ",00");
    }
    else if (tipoDoJogo === "IN") {
      console.log("Valor do ingresso: U$$", 170 * 4.1 * ingressos, ",00");
    }
}
else if (etapaDoJogo === "FI" && categoria === 1){
      if (tipoDoJogo === "NA") {
      console.log("Valor do ingresso: R$", 1980 * ingressos, ",00");
    }
    else if (tipoDoJogo === "IN") {
      console.log("Valor do ingresso: U$$", 1980 * 4.1 * ingressos, ",00");
    }
}
else if (etapaDoJogo === "FI" && categoria === 2){
      if (tipoDoJogo === "NA") {
      console.log("Valor do ingresso: R$", 1320 * ingressos, ",00");
    }
    else if (tipoDoJogo === "IN") {
      console.log("Valor do ingresso: U$$", 1320.00 * 4.10 * ingressos, ",00");
    }
}
else if (etapaDoJogo === "FI" && categoria === 3){
      if (tipoDoJogo === "NA") {
      console.log("Valor do ingresso: R$", 880 * ingressos, ",00");
    }
    else if (tipoDoJogo === "IN") {
      console.log("Valor do ingresso: U$$", 880 * 4.1 * ingressos, ",00");
    }
}
else if (etapaDoJogo === "FI" && categoria === 4){
      if (tipoDoJogo === "NA") {
      console.log("Valor do ingresso: R$", 330 * ingressos, ",00");
    }
    else if (tipoDoJogo === "IN") {
      console.log("Valor do ingresso: U$$", 330 * 4.1 * ingressos, ",00");
    }
}



}


ex2ab ()

function comprarCarta() {
  // Cria array de cartas
  const cartas = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

  // Cria array de naipes
  const naipes = ["♦️", "♥️", "♣️", "♠️"]

  // Sorteia uma carta
  const numero = cartas[Math.floor(Math.random() * 13)]

  // Sorteia um naipe
  const naipe = naipes[Math.floor(Math.random() * 4)]

  let valor

  // Verifica se é uma das letras e coloca o valor correspondente na variável valor
  if (numero === "A") {
    valor = 11
  } else if (numero === "J" || numero === "Q" || numero === "K") {
    valor = 10
  } else { // Se nao for uma das letras, só converte a string para número
    valor = Number(numero)
  }

  // Cria um objeto da carta com as propriedades que vamos precisar: texto e valor
  const carta = {
    texto: numero + naipe,
    valor: valor
  }

  return carta
}




// 5 - O usuário recebe um `confirm` que indica todas as suas cartas, a primeira carta do computador (a segunda é oculta para o usuário). O texto do `confirm` seria algo como `Suas cartas são 2♠️ K♥️. A carta revelada do computador é 6♣️. Deseja comprar mais uma carta?`.

// 5a - Se o usuário decidir comprar mais cartas, uma nova carta é sorteada para ele. Nesse momento sua pontuação pode superar 21 e, nesse caso, ele perde. Se sua pontuação for menor ou igual a 21, repetir a etapa 5 até que o usuário decida parar ou exceda 21.

//b - Se o usuário decidir não comprar novas cartas, é a vez do computador. O computador compra cartas até que sua pontuação seja igual ou maior do que a pontuação do usuário. O jogo finaliza quando o computador parar de comprar cartas.

//6 - Ao final do jogo o programa deve apresentar um `alert` com a seguinte mensagem, ajustada de acordo com o resultado do jogo. `Suas cartas são 2♠️ 3♦️ 6♥️. Sua pontuação é 11. As cartas do computador são 6♦️ K♠️. A pontuação do computador é 16. O computador ganhou!`

alert("Bem vindo ao jogo de Blackjack!")

let querJogar = true


while (querJogar) {
  
  querJogar = confirm("Você quer iniciar uma nova partida?")
  if (querJogar === true) {
    const carta1 = comprarCarta()
    const carta2 = comprarCarta()
    const carta3 = comprarCarta()
    const carta4 = comprarCarta()
    const carta5 = comprarCarta()
    const carta6 = comprarCarta()
    const carta7 = comprarCarta()
    const carta8 = comprarCarta()
    const carta9 = comprarCarta()
    const carta10 = comprarCarta()     
    const carta11 = comprarCarta()
    const carta12 = comprarCarta()
    const carta13 = comprarCarta()
    const carta14 = comprarCarta()
    const carta15 = comprarCarta()
    const carta16 = comprarCarta()
    const carta17 = comprarCarta()
    const carta18 = comprarCarta()
    const carta19 = comprarCarta()
    const carta20 = comprarCarta()
    const carta21 = comprarCarta()
    const carta22 = comprarCarta()  
    
    let maoUsuario = [carta1.texto, carta2.texto]
    let valoresUsuario = [carta1.valor, carta2.valor]

    let maoComputador = [carta3.texto, carta4.texto]
    let valoresComputador = [carta3.valor, carta4.valor]

    let somaDaMaoDoUsuario = 0
    let somaDaMaoDoComputador = 0

    for (let valorAtualUsuario of valoresUsuario) {
      somaDaMaoDoUsuario += valorAtualUsuario
    }

    for (let valorAtualComputador of valoresComputador) {
      somaDaMaoDoUsuario += valorAtualComputador
    }

    //colocar soma de strings e depois partir para a construção do jogo, a partir do while(valorsUsuario)

    for ()
      
      while (valoresUsuario)
      querComprar1 = confirm("Suas cartas são", carta1.texto, carta2.texto,". A carta revelada pelo computador é",carta3.texto,". Deseja comprar outra carta?")
          
        
        
        if (querComprar === true) {
          if ( > 21) {
            console.log("Usuário - cartas: ", carta1.texto, carta2.texto, carta5.texto"- pontuação:", carta1.valor + carta2.valor + carta5.valor)
            console.log("Computador - cartas:", carta3.texto, carta4.texto, "- pontuação:", carta3.valor + carta4.valor);
            console.log("O computador ganhou.")
            } else {
              querComprar2 = confirm("Suas cartas são", carta1.texto, carta2.texto, carta5.texto". A carta revelada pelo computador é",carta3.texto,". Deseja comprar outra carta?")
            }

        
        
        } else {
            for (querComprar = false; )
          }
        



        const pontuacaoUsuario = console.log("Usuário - cartas: ", carta1.texto, carta2.texto, "- pontuação:", carta1.valor + carta2.valor)
        const pontuacaoComputador = console.log("Computador - cartas:", carta3.texto, carta4.texto, "- pontuação:", carta3.valor + carta4.valor)
      } if (carta4.valor + carta3.valor > carta2.valor + carta1.valor) {
        console.log("O computador venceu!") 
        } else if (carta4.valor + carta3.valor < carta2.valor + carta1.valor) {
          console.log("O usuário venceu!")
          } else if (carta4.valor + carta3.valor === carta2.valor + carta1.valor) {
            console.log("Empate.")
            }
  querJogar = false
  
  }  else {
    console.log("O jogo acabou.")
  }


import {SimularPedidoInput, SimularPedidoUseCase} from './SimularPedidoUseCase'

test('Testando todos os precos', () => {
  // Preparacao
  const useCase = new SimularPedidoUseCase()
  const input: SimularPedidoInput = {
    impressao: {
      tamanho: "13x18",
      tipoPapel: "BRILHANTE"
    }, moldura: {
      tamanho: "PEQUENA",
      tipo: "CRUA"
    }
  }

  // Execucao
  const result = useCase.execute(input)

  // Verificacao
  expect(result.precoImpressao).toBe(20)
})
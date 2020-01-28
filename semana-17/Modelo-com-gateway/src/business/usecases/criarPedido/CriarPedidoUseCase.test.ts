import {CriarPedidoInput, CriarPedidoUseCase, RandomIdGenerator} from './CriarPedidoUseCase'
import {PedidoGateway} from '../../gateways/PedidoGateway'
import {Pedido} from '../../entities/Pedido'

// test('Testando todos os precos', () => {
//
// // Preparacao
//   const pedidoGateway: PedidoGateway = {
//     salvarPedido(pedido: Pedido): Promise<void> {
//       return Promise.resolve()
//     }
//   }
//
//   const useCase = new CriarPedidoUseCase(pedidoGateway)
//   const input: CriarPedidoInput = {
//     impressao: {
//       tamanho: "13x18",
//       tipoPapel: "BRILHANTE"
//     }, moldura: {
//       tamanho: "PEQUENA",
//       tipo: "CRUA"
//     }, usuario: {
//       email: "darvas@darvas",
//       nome: "Pedro Darvas"
//     }
//   }
//
// // Execucao
//   const result = useCase.execute(input)
//
// // Verificacao
//   expect(result).toBe(20)
// })

test('Testa se da erro quando nao tem id', async () => {

  // Preparacao
  const pedidoGateway: PedidoGateway = {
    salvarPedido(pedido: Pedido): Promise<void> {
      return Promise.resolve()
    }
  }

  const idGenerator: RandomIdGenerator = {
    generate(): string {
      return 'abc'
    }
  }

  const useCase = new CriarPedidoUseCase(pedidoGateway, idGenerator)
  const input: CriarPedidoInput = {
    impressao: {
      tamanho: '13x18',
      tipoPapel: 'BRILHANTE'
    }, moldura: {
      tamanho: 'PEQUENA',
      tipo: 'CRUA'
    }, usuario: {
      email: 'darvas@darvas',
      nome: 'Pedro Darvas'
    }
  }

  // Execucao
  const result = await useCase.execute(input)

  expect(result.id).toBe('abc')

})
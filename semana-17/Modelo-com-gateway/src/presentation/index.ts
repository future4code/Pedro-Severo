import express, {Request, Response} from 'express'
import {SimularPedidoInput, SimularPedidoUseCase} from '../business/usecases/simularPedido/SimularPedidoUseCase'
import {CriarPedidoInput, CriarPedidoUseCase} from '../business/usecases/criarPedido/CriarPedidoUseCase'
import {PedidoDatabase} from '../data/PedidoDatabase'
import {V4IdGenerator} from '../services/V4IdGenerator'

const app = express()
app.use(express.json()) // Linha mágica (middleware)

app.post('/pedido/simular', (request: Request, response: Response) => {
  const useCase = new SimularPedidoUseCase()

  const input: SimularPedidoInput = {
    impressao: {
      tamanho: request.body.tamanhoImpressao,
      tipoPapel: request.body.tipoPapel
    },
    moldura: {
      tamanho: request.body.tamanhoMoldura,
      tipo: request.body.tipoMoldura
    }
  }

  const result = useCase.execute(input)

  response.send({
    precoImpressao: formatNumberEmReais(result.precoImpressao),
    precoMoldura: formatNumberEmReais(result.precoMoldura),
    total: formatNumberEmReais(result.total)
  })
})

app.post('/pedido', async (request: Request, response: Response) => {
  const pedidoGateway = new PedidoDatabase()
  const idGenerator = new V4IdGenerator()
  const useCase = new CriarPedidoUseCase(pedidoGateway, idGenerator)

  const input: CriarPedidoInput = {
    impressao: {
      tamanho: request.body.tamanhoImpressao,
      tipoPapel: request.body.tipoPapel
    },
    moldura: {
      tamanho: request.body.tamanhoMoldura,
      tipo: request.body.tipoMoldura
    },
    usuario: {
      nome: request.body.nomeUsuario,
      email: request.body.email
    }
  }

  const result = await useCase.execute(input)

  response.send({
    precoImpressao: formatNumberEmReais(result.precoImpressao),
    precoMoldura: formatNumberEmReais(result.precoMoldura),
    total: formatNumberEmReais(result.total)
  })
})

function formatNumberEmReais(numero: number): string {
  return `R$${numero.toFixed(2)}`
}

export default app
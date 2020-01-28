import {Papel} from '../../entities/Papel'
import {Moldura} from '../../entities/Moldura'
import {Pedido} from '../../entities/Pedido'
import {Usuario} from '../../entities/Usuario'
import {PedidoGateway} from '../../gateways/PedidoGateway'

export interface RandomIdGenerator {
  generate(): string
}

export class CriarPedidoUseCase {
  private pedidoGateway: PedidoGateway
  private idGenerator: RandomIdGenerator

  constructor(pedidoGateway: PedidoGateway, idGenerator: RandomIdGenerator) {
    this.pedidoGateway = pedidoGateway
    this.idGenerator = idGenerator
  }

  async execute(input: CriarPedidoInput) {
    const papel = new Papel(input.impressao.tamanho, input.impressao.tipoPapel)
    const moldura = new Moldura(input.moldura.tamanho, input.moldura.tipo)
    const usuario = new Usuario(input.usuario.nome, input.usuario.email)

    const pedido = new Pedido(papel, moldura, usuario, this.idGenerator.generate())

    await this.pedidoGateway.salvarPedido(pedido)

    return {
      precoImpressao: pedido.calcularPrecoPapel(),
      precoMoldura: pedido.calcularPrecoMoldura(),
      total: pedido.calcularPrecoTotal(),
      id: pedido.getId()
    }
  }
}

export interface CriarPedidoInput {
  impressao: {
    tamanho: string
    tipoPapel: string
  }
  moldura: {
    tipo: string
    tamanho: string
  }
  usuario: {
    nome: string
    email: string
  }
}

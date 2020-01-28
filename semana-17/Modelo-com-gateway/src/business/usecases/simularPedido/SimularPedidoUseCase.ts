import {Papel} from '../../entities/Papel'
import {Moldura} from '../../entities/Moldura'
import {Pedido} from '../../entities/Pedido'

export class SimularPedidoUseCase {
  execute(input: SimularPedidoInput): SimularPedidoOutput {
    const papel = new Papel(input.impressao.tamanho, input.impressao.tipoPapel)
    const moldura = new Moldura(input.moldura.tamanho, input.moldura.tipo)

    const pedido = new Pedido(papel, moldura)

    return {
      precoImpressao: pedido.calcularPrecoPapel(),
      precoMoldura: pedido.calcularPrecoMoldura(),
      total: pedido.calcularPrecoTotal()
    }
  }
}

export interface SimularPedidoInput {
  impressao: {
    tamanho: string
    tipoPapel: string
  }
  moldura: {
    tipo: string
    tamanho: string
  }
}

export interface SimularPedidoOutput {
  precoImpressao: number
  precoMoldura: number
  total: number
}
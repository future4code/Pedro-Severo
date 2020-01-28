import {Pedido} from '../entities/Pedido'

export interface PedidoGateway {
  salvarPedido(pedido: Pedido): Promise<void>
}
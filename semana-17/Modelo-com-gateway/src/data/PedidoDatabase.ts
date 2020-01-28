import knex from 'knex'
import {Pedido} from '../business/entities/Pedido'
import {PedidoGateway} from '../business/gateways/PedidoGateway'

interface PedidoModel {
  id: string
  nome_usuario: string
  email: string
  tamanho_impressao: string
  tipo_impressao: string
  tamanho_moldura: string
  tipo_moldura: string
}

export class PedidoDatabase implements PedidoGateway {
  private connection: knex

  constructor() {
    this.connection = knex({
      client: 'mysql',
      connection: {
        host: 'ec2-18-229-236-15.sa-east-1.compute.amazonaws.com',
        user: 'darvas',
        password: 'teste',
        database: 'aulas_arquitetura'
      }
    })
  }

  async salvarPedido(pedido: Pedido): Promise<void> {
    if (!pedido.getId()) {
      throw new Error('Nao tem id')
    }
  }
}

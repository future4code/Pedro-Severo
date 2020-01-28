import { v4 } from 'uuid'
import {RandomIdGenerator} from '../business/usecases/criarPedido/CriarPedidoUseCase'

export class V4IdGenerator implements RandomIdGenerator {
  generate(): string {
    return v4()
  }
}


export class MeuIdGenerator implements RandomIdGenerator {
  generate(): string {
    return `${Math.random() * 10000}`
  }
}

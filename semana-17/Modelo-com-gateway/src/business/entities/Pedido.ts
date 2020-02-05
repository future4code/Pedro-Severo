import {Papel} from './Papel'
import {Moldura} from './Moldura'
import {Usuario} from './Usuario'

export class Pedido {
  private id?: string
  private papel: Papel
  private moldura: Moldura
  private usuario?: Usuario

  constructor(papel: Papel, moldura: Moldura, usuario?: Usuario, id?: string) {
    this.papel = papel
    this.moldura = moldura
    this.usuario = usuario
    this.id = id
  }

  public getId() {
    return this.id
  }

  public calcularPrecoPapel() {
    return this.papel.calcularPreco()
  }

  public calcularPrecoMoldura() {
    return this.moldura.calcularPreco()
  }

  public calcularPrecoTotal() {
    return this.moldura.calcularPreco() + this.papel.calcularPreco()
  }
}

export enum TamanhoPapel {
  "13x18" = "13x18",
  "21x30" = "21x30",
  "30x30" = "30x30",
  "30x42" = "30x42",
  "42x60" = "42x60",
}
const precosPapel = {
  [TamanhoPapel['13x18']]: 20
}

export class Papel {
  private tamanho: TamanhoPapel
  private tipo: TipoPapel

  constructor(tamanho: string, tipo: string) {
    if(!(tamanho in TamanhoPapel)) {
      throw new Error('Tamanho papel invalido')
    }

    if(!(tipo in TipoPapel)) {
      throw new Error('Tipo papel invalido')
    }

    this.tamanho = tamanho as TamanhoPapel
    this.tipo = tipo as TipoPapel
  }

  public calcularPreco() {
    return precosPapel[this.tamanho] * this.tipo
  }
}


export enum TipoPapel {
  BRILHANTE = 'BRILHANTE',
  FOSCO = 'FOSCO',
  FIBRA = 'FIBRA',
  RESINADO = 'RESINADO',
  PEROLA = 'PEROLA',
}
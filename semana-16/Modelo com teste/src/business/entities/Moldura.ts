export class Moldura {
  private tamanho: TamanhoMoldura
  private tipo: TipoMoldura

  constructor(tamanho: string, tipo: string) {
    if(!(tamanho in TamanhoMoldura)) {
      throw new Error('Tamanho moldura invalido')
    }

    if(!(tipo in TipoMoldura)) {
      throw new Error('Tipo moldura invalido')
    }

    this.tamanho = tamanho as TamanhoMoldura
    this.tipo = tipo as TipoMoldura
  }


  public calcularPreco() {
    return 16.30
  }
}

export enum TipoMoldura {
  CRUA = 'CRUA',
  LISA = 'LISA',
  CLASSICA = 'CLASSICA',
  VINTAGE = 'VINTAGE',
  MADEIRA = 'MADEIRA',
}

export enum TamanhoMoldura {
  PEQUENA = 'PEQUENA',
  MEDIA = 'MEDIA',
  GRANDE = 'GRANDE'
}

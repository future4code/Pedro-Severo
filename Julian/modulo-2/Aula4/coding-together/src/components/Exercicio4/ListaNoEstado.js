import React from 'react';
import CardPessoa from "../CardPessoa/CardPessoa"

class ListaNoEstado extends React.Component {
  state = {
    listaDePessoas: [
      {
        nome: "Goli",
        idade: 23
      },
      {
        nome: "Paulinha",
        idade: 20
      },
      {
        nome: "Darvas",
        idade: 10
      }
    ]
  }

  removePessoa = (nomeParaRemocao) => {

    const novaListaDePessoas = this.state.listaDePessoas.filter(pessoa => {
      return pessoa.nome !== nomeParaRemocao
    })

    this.setState({
      listaDePessoas: novaListaDePessoas
    })
  };


  render () {
    const listaDePessoasNaTela = this.state.listaDePessoas.map(pessoa => {
      const chamaRemovePessoa = () => {
        this.removePessoa(pessoa.nome)
      }

      return (
        <div>
          <CardPessoa 
            nome={pessoa.nome}
            idade={pessoa.idade}
          />
          <button
            onClick={chamaRemovePessoa}
          >
            Deletar
          </button>
        </div>
      )
    })

    return (
      <div>
        {listaDePessoasNaTela}
      </div>
    )
  };
};

export default ListaNoEstado;
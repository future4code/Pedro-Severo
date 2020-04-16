import React from "react";
import CardPessoa from "../CardPessoa/CardPessoa";

const listaDePessoasDoBack = [
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

const listaDePessoasNaTela = listaDePessoasDoBack.map(pessoa => {
    return <CardPessoa 
        nome={pessoa.nome}
        idade={pessoa.idade}
    />
})

const ListasNoComponenteFuncional = () => {

    return (
        <div>
            {listaDePessoasNaTela}
        </div>
    )
}

export default ListasNoComponenteFuncional